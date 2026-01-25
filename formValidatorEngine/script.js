// THE RULES OBJECT
const Rules = {
    required: (val) => val.trim().length > 0 || "Field is required",
    noNumbers: (val) => !/\d/.test(val) || "No numbers allowed",
    min: (val, len) => val.length >= parseInt(len) || `At least ${len} characters`,
    matches: (val, otherId) => val === document.getElementById(otherId).value || "Does not match password",
    isUnique: async (val) => {
        if (!val) return true
        return new Promise(res => setTimeout(() => {
            res(!['admin', 'test'].includes(val.toLowerCase()) || "Name taken")
        }, 800));
    },
    isStrong: (val) => {
        const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
        return strong.test(val) || "Needs: 8+ chars, 1 Cap, 1 Num, 1 Symbol"
    },
    noLetters: (val) => !/[a-z]/i.test(val) || "No letters allowed"
}

// ENGINE LOGIC
const debounceTimers = {}

async function validateField(input) {
    // Skip if the entire field group is hidden by conditional logic
    if (input.closest('.hidden')) return true

    // Find the container first
    const container = input.closest('.field-group')
    if (!container) return true; // Safety check if .field-group class is missing

    //  Find error and status elements inside that container
    const errorEl = container.querySelector('.error-msg')
    const statusEl = container.querySelector('.async-status')

    const rules = input.dataset.rules.split('|')

    for (const ruleStr of rules) {
        const [name, param] = ruleStr.split(':')
        
        if (name === 'isUnique' && statusEl) {
            statusEl.innerText = "Checking..."
        }
        
        const result = await Rules[name](input.value, param)
        if (statusEl) statusEl.innerText = ""

        if (result !== true) {
            input.classList.add('invalid')
            input.classList.remove('valid')
            
            //PRECAUTIONS
            if (errorEl) errorEl.innerText = result
            return false
        }
    }

    // When all conditions are satisfied
    input.classList.remove('invalid')
    input.classList.add('valid')
    if (errorEl) errorEl.innerText = ""
    return true
}

// INITIALIZATION 
const form = document.getElementById('advancedForm')
const inputs = form.querySelectorAll('[data-rules]')

// Password Visibility 
document.querySelector('.toggle-btn').addEventListener('click', (e) => {
    const passInput = document.getElementById('password')
    const isPass = passInput.type === 'password'
    passInput.type = isPass ? 'text' : 'password'
    e.target.innerText = isPass ? 'Hide' : 'Show'
})

// Real-time Listeners (Debounced)
inputs.forEach(input => {
    input.addEventListener('input', () => {

        if (input.id === 'password') updateStrengthMeter(input.value)

        // Debounce the validation check
        clearTimeout(debounceTimers[input.name])
        debounceTimers[input.name] = setTimeout(() => validateField(input), 400)
    })
})

//  Business or Personal
document.getElementById('accountType').addEventListener('change', (e) => {
    const companyGroup = document.getElementById('companyGroup')
    const isBusiness = e.target.value === 'business'
    companyGroup.classList.toggle('hidden', !isBusiness)
})

// On Submit 
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const results = await Promise.all([...inputs].map(i => validateField(i)))
    if (results.every(r => r === true)) {
        alert("Submission Successful!")
    }
})

function updateStrengthMeter(val) {
    const bar = document.querySelector('.bar')
    let score = 0
    if (val.length > 5) score++
    if (val.length > 8 && /[A-Z]/.test(val)) score++
    if (/[!@#$%^&*]/.test(val)) score++

    const colors = ['#eee', '#ef4444', '#f59e0b', '#10b981']
    const widths = ['0%', '33%', '66%', '100%']
    bar.style.width = widths[score]
    bar.style.backgroundColor = colors[score]
}