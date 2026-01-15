let transactions = JSON.parse(localStorage.getItem("transactions")) || []
let expenses = 0
let income = 0
let isIncome = false
let amount = document.getElementById("amount")
let text = document.getElementById("text")
let domBalance = document.getElementById("balance")
let transactionsList = document.getElementById("transactions")
let domIncome = document.getElementById("income")
let domExpense = document.getElementById("expense")
//add the text and amount into the array?? Done

function recalcTotals() {
    income = 0
    expenses = 0

    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].cost >= 0) {
            income += transactions[i].cost;
        } else {
            expenses += transactions[i].cost;
        }
    }
}


function addTransaction(){
    const actualAmount = +amount.value

    if(actualAmount < 0){
        expenses += actualAmount


    }
    else if(actualAmount >= 0){
        income += actualAmount
}

    let newTransaction = {
        id : Math.random() * 1000,
        description: text.value,
        cost : actualAmount
    }

    transactions.push(newTransaction)

    localStorage.setItem("transactions", JSON.stringify(transactions));

    console.log(transactions)
    amount.value = ""
    text.value = ""
}


function displayTransactions(){
    let balance = income + expenses 
    domBalance.textContent = "$" + balance

    domIncome.textContent = "$" + income
    domExpense.textContent = "$" + expenses
    transactionsList.innerHTML = ""

   // This shit always rerenders instead of just updating
   //The fix is on line 45
    for (let i = 0; i < transactions.length; i++){
        let color = transactions[i].cost >= 0 ? "plus" : "minus"
        transactionsList.innerHTML += "<li class = " + color + ">" + transactions[i].description + ": " +  "$" + transactions[i].cost + "</li>"
    }
}

document.getElementById("btn").addEventListener("click", function () {
    addTransaction();
    displayTransactions();
});

recalcTotals()
displayTransactions()

/* on add transaction, add to transaction object. 
If the the transaction is negative add amount to expenses else add it to income. 
display income and expenses on page and subtract expenses from income to get balance */

/*if(+actualAmount < 0){
        expenses += actualAmount


    }
    else if(+actualAmount >= 0){
        income += actualAmount
}
    */


/*How to create html elements  innerHTML*/

/*Next add localstorage (Done)
Make the display transactions only render the given array (Done already) 
Add the conditional for the list items (Done)
It also isnt good practice to put two functions in the same onclick atrribute in html. Fix that - ITS better to use an event listener or someshit sha (Done)
And add it to fucking github nigga 😒😒 */