const questions = [
   {
     id: 1,
     question: "What is the capital of Nigeria?",
     options: ["Ibadan", "Lagos", "Abuja", "Benin"],
     answer: "Abuja"
   },
   {
     id: 2,
     question: "Which planet is known as the Red Planet?",
     options: ["Venus", "Mars", "Jupiter", "Saturn"],
     answer: "Mars"
   },
   {
     id: 3,
     question: "How many continents are there?",
     options: ["5", "6", "7", "8"],
     answer: "7"
   },
   {
     id: 4,
     question: "What gas do humans need to breathe to survive?",
     options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
     answer: "Oxygen"
   },
   {
     id: 5,
     question: "Who was the first man to walk on the moon?",
     options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"],
     answer: "Neil Armstrong"
   },
   {
     id: 6,
     question: "Which ocean is the largest?",
     options: ["Atlantic", "Indian", "Arctic", "Pacific"],
     answer: "Pacific"
   },
   {
     id: 7,
     question: "What is the currency of the United Kingdom?",
     options: ["Euro", "Pound Sterling", "Dollar", "Franc"],
     answer: "Pound Sterling"
   },
   {
     id: 8,
     question: "Which organ pumps blood through the body?",
     options: ["Brain", "Liver", "Lungs", "Heart"],
     answer: "Heart"
   },
   {
     id: 9,
     question: "What is H₂O commonly known as?",
     options: ["Hydrogen", "Oxygen", "Salt", "Water"],
     answer: "Water"
   },
   {
     id: 10,
     question: "Which country is known as the Land of the Rising Sun?",
     options: ["China", "South Korea", "Japan", "Thailand"],
     answer: "Japan"
   },
 
   {
     id: 11,
     question: "How many days are there in a leap year?",
     options: ["364", "365", "366", "367"],
     answer: "366"
   },
   {
     id: 12,
     question: "Which instrument is used to measure temperature?",
     options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
     answer: "Thermometer"
   },
   {
     id: 13,
     question: "What is the largest mammal in the world?",
     options: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
     answer: "Blue whale"
   },
   {
     id: 14,
     question: "Which metal is liquid at room temperature?",
     options: ["Iron", "Mercury", "Aluminium", "Copper"],
     answer: "Mercury"
   },
   {
     id: 15,
     question: "What is the square root of 64?",
     options: ["6", "7", "8", "9"],
     answer: "8"
   },
   {
     id: 16,
     question: "Which country has the largest population?",
     options: ["USA", "India", "China", "Russia"],
     answer: "China"
   },
   {
     id: 17,
     question: "Which blood group is known as the universal donor?",
     options: ["A", "B", "AB", "O"],
     answer: "O"
   },
   {
     id: 18,
     question: "What part of the plant conducts photosynthesis?",
     options: ["Root", "Stem", "Leaf", "Flower"],
     answer: "Leaf"
   },
   {
     id: 19,
     question: "Which language has the most native speakers?",
     options: ["English", "Spanish", "Mandarin", "French"],
     answer: "Mandarin"
   },
   {
     id: 20,
     question: "How many sides does a hexagon have?",
     options: ["5", "6", "7", "8"],
     answer: "6"
   },
 
   {
     id: 21,
     question: "Who wrote 'Romeo and Juliet'?",
     options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
     answer: "William Shakespeare"
   },
   {
     id: 22,
     question: "Which planet is closest to the sun?",
     options: ["Venus", "Earth", "Mercury", "Mars"],
     answer: "Mercury"
   },
   {
     id: 23,
     question: "What is the boiling point of water in Celsius?",
     options: ["90°C", "95°C", "100°C", "110°C"],
     answer: "100°C"
   },
   {
     id: 24,
     question: "Which continent is the Sahara Desert located in?",
     options: ["Asia", "Africa", "Australia", "South America"],
     answer: "Africa"
   },
   {
     id: 25,
     question: "What is the hardest natural substance?",
     options: ["Gold", "Iron", "Diamond", "Silver"],
     answer: "Diamond"
   },
   {
     id: 26,
     question: "Which gas is most abundant in the Earth’s atmosphere?",
     options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
     answer: "Nitrogen"
   },
   {
     id: 27,
     question: "How many players are on a football team on the field?",
     options: ["9", "10", "11", "12"],
     answer: "11"
   },
   {
     id: 28,
     question: "What is the capital of France?",
     options: ["Rome", "Madrid", "Berlin", "Paris"],
     answer: "Paris"
   },
   {
     id: 29,
     question: "Which organ is responsible for breathing?",
     options: ["Heart", "Liver", "Lungs", "Kidney"],
     answer: "Lungs"
   },
   {
     id: 30,
     question: "What is the chemical symbol for gold?",
     options: ["Ag", "Au", "Gd", "Go"],
     answer: "Au"
   },
 
   {
     id: 31,
     question: "Which country hosted the 2016 Olympics?",
     options: ["China", "Brazil", "UK", "Japan"],
     answer: "Brazil"
   },
   {
     id: 32,
     question: "What is the smallest prime number?",
     options: ["0", "1", "2", "3"],
     answer: "2"
   },
   {
     id: 33,
     question: "Which planet has rings?",
     options: ["Mars", "Earth", "Saturn", "Venus"],
     answer: "Saturn"
   },
   {
     id: 34,
     question: "What is the capital of Ghana?",
     options: ["Kumasi", "Accra", "Takoradi", "Tema"],
     answer: "Accra"
   },
   {
     id: 35,
     question: "Which vitamin is produced by sunlight?",
     options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
     answer: "Vitamin D"
   },
   {
     id: 36,
     question: "How many teeth does an adult human have?",
     options: ["28", "30", "32", "34"],
     answer: "32"
   },
   {
     id: 37,
     question: "What is the longest river in the world?",
     options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
     answer: "Nile"
   },
   {
     id: 38,
     question: "Which country invented paper?",
     options: ["India", "China", "Egypt", "Greece"],
     answer: "China"
   },
   {
     id: 39,
     question: "What is the capital of Italy?",
     options: ["Milan", "Venice", "Rome", "Naples"],
     answer: "Rome"
   },
   {
     id: 40,
     question: "Which device is used to measure time?",
     options: ["Thermometer", "Clock", "Scale", "Barometer"],
     answer: "Clock"
   },
 
   {
     id: 41,
     question: "What is the largest planet in the solar system?",
     options: ["Earth", "Saturn", "Jupiter", "Neptune"],
     answer: "Jupiter"
   },
   {
     id: 42,
     question: "Which country is known as the Giant of Africa?",
     options: ["South Africa", "Egypt", "Nigeria", "Kenya"],
     answer: "Nigeria"
   },
   {
     id: 43,
     question: "How many bones are in the human body?",
     options: ["204", "206", "208", "210"],
     answer: "206"
   },
   {
     id: 44,
     question: "Which gas do plants absorb from the atmosphere?",
     options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
     answer: "Carbon dioxide"
   },
   {
     id: 45,
     question: "What is the capital of Canada?",
     options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
     answer: "Ottawa"
   },
   {
     id: 46,
     question: "Which scientist proposed the theory of relativity?",
     options: ["Newton", "Einstein", "Galileo", "Tesla"],
     answer: "Einstein"
   },
   {
     id: 47,
     question: "Which organ removes waste from the blood?",
     options: ["Liver", "Heart", "Kidney", "Lungs"],
     answer: "Kidney"
   },
   {
     id: 48,
     question: "What is the national animal of Nigeria?",
     options: ["Elephant", "Lion", "Horse", "Eagle"],
     answer: "Eagle"
   },
   {
     id: 49,
     question: "Which continent is the coldest?",
     options: ["Europe", "Asia", "Antarctica", "Australia"],
     answer: "Antarctica"
   },
   {
     id: 50,
     question: "What is the capital of Japan?",
     options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
     answer: "Tokyo"
   },
 
   {
     id: 51,
     question: "Which element has the chemical symbol O?",
     options: ["Gold", "Oxygen", "Osmium", "Zinc"],
     answer: "Oxygen"
   },
   {
     id: 52,
     question: "How many hours are in a day?",
     options: ["12", "18", "24", "36"],
     answer: "24"
   },
   {
     id: 53,
     question: "Which country is famous for the Eiffel Tower?",
     options: ["Italy", "France", "Spain", "Germany"],
     answer: "France"
   },
   {
     id: 54,
     question: "What is the main source of energy for Earth?",
     options: ["Moon", "Sun", "Wind", "Water"],
     answer: "Sun"
   },
   {
     id: 55,
     question: "Which planet is known as the Morning Star?",
     options: ["Mars", "Venus", "Jupiter", "Mercury"],
     answer: "Venus"
   },
   {
     id: 56,
     question: "What is the largest organ in the human body?",
     options: ["Heart", "Liver", "Skin", "Brain"],
     answer: "Skin"
   },
   {
     id: 57,
     question: "Which country has the longest coastline?",
     options: ["USA", "Australia", "Russia", "Canada"],
     answer: "Canada"
   },
   {
     id: 58,
     question: "What is the capital of South Africa?",
     options: ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
     answer: "Pretoria"
   },
   {
     id: 59,
     question: "Which instrument is used to see distant objects in space?",
     options: ["Microscope", "Periscope", "Telescope", "Binoculars"],
     answer: "Telescope"
   },
   {
     id: 60,
     question: "How many minutes are in an hour?",
     options: ["30", "45", "60", "90"],
     answer: "60"
   },
 
   {
     id: 61,
     question: "Which continent has the most countries?",
     options: ["Asia", "Africa", "Europe", "South America"],
     answer: "Africa"
   },
   {
     id: 62,
     question: "What is the capital of Germany?",
     options: ["Munich", "Hamburg", "Berlin", "Frankfurt"],
     answer: "Berlin"
   },
   {
     id: 63,
     question: "Which animal is known as the King of the Jungle?",
     options: ["Tiger", "Elephant", "Lion", "Leopard"],
     answer: "Lion"
   },
   {
     id: 64,
     question: "What is the freezing point of water?",
     options: ["0°C", "10°C", "32°C", "100°C"],
     answer: "0°C"
   },
   {
     id: 65,
     question: "Which country uses the Yen as currency?",
     options: ["China", "Japan", "South Korea", "Thailand"],
     answer: "Japan"
   },
   {
     id: 66,
     question: "Which part of the computer processes data?",
     options: ["Monitor", "Keyboard", "CPU", "Mouse"],
     answer: "CPU"
   },
   {
     id: 67,
     question: "Who invented the telephone?",
     options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Newton"],
     answer: "Alexander Graham Bell"
   },
   {
     id: 68,
     question: "What is the capital of Egypt?",
     options: ["Alexandria", "Giza", "Cairo", "Luxor"],
     answer: "Cairo"
   },
   {
     id: 69,
     question: "Which shape has four equal sides?",
     options: ["Rectangle", "Triangle", "Square", "Circle"],
     answer: "Square"
   },
   {
     id: 70,
     question: "What do bees produce?",
     options: ["Milk", "Wax", "Honey", "Oil"],
     answer: "Honey"
   },
 
   {
     id: 71,
     question: "Which planet is farthest from the sun?",
     options: ["Neptune", "Uranus", "Saturn", "Pluto"],
     answer: "Neptune"
   },
   {
     id: 72,
     question: "What is the capital of Spain?",
     options: ["Barcelona", "Valencia", "Madrid", "Seville"],
     answer: "Madrid"
   },
   {
     id: 73,
     question: "Which organ controls the nervous system?",
     options: ["Heart", "Brain", "Liver", "Kidney"],
     answer: "Brain"
   },
   {
     id: 74,
     question: "How many letters are in the English alphabet?",
     options: ["24", "25", "26", "27"],
     answer: "26"
   },
   {
     id: 75,
     question: "Which gas is essential for combustion?",
     options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
     answer: "Oxygen"
   },
   {
     id: 76,
     question: "What is the capital of Australia?",
     options: ["Sydney", "Melbourne", "Canberra", "Perth"],
     answer: "Canberra"
   },
   {
     id: 77,
     question: "Which continent is Australia in?",
     options: ["Asia", "Europe", "Australia", "Antarctica"],
     answer: "Australia"
   },
   {
     id: 78,
     question: "What is the main language spoken in Brazil?",
     options: ["Spanish", "English", "Portuguese", "French"],
     answer: "Portuguese"
   },
   {
     id: 79,
     question: "Which metal is attracted to magnets?",
     options: ["Gold", "Iron", "Silver", "Copper"],
     answer: "Iron"
   },
   {
     id: 80,
     question: "What is the capital of Kenya?",
     options: ["Mombasa", "Nairobi", "Kisumu", "Eldoret"],
     answer: "Nairobi"
   },
 
   {
     id: 81,
     question: "Which sense organ is used to see?",
     options: ["Ear", "Nose", "Eye", "Skin"],
     answer: "Eye"
   },
   {
     id: 82,
     question: "What is the capital of Russia?",
     options: ["Kiev", "Moscow", "St. Petersburg", "Warsaw"],
     answer: "Moscow"
   },
   {
     id: 83,
     question: "Which planet supports life?",
     options: ["Mars", "Earth", "Venus", "Jupiter"],
     answer: "Earth"
   },
   {
     id: 84,
     question: "How many colors are in a rainbow?",
     options: ["5", "6", "7", "8"],
     answer: "7"
   },
   {
     id: 85,
     question: "Which gas is released during photosynthesis?",
     options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
     answer: "Oxygen"
   },
   {
     id: 86,
     question: "What is the capital of China?",
     options: ["Shanghai", "Beijing", "Hong Kong", "Wuhan"],
     answer: "Beijing"
   },
   {
     id: 87,
     question: "Which animal is the tallest in the world?",
     options: ["Elephant", "Horse", "Giraffe", "Camel"],
     answer: "Giraffe"
   },
   {
     id: 88,
     question: "What is the capital of Norway?",
     options: ["Stockholm", "Copenhagen", "Oslo", "Helsinki"],
     answer: "Oslo"
   },
   {
     id: 89,
     question: "Which part of the body helps in digestion?",
     options: ["Heart", "Stomach", "Lungs", "Brain"],
     answer: "Stomach"
   },
   {
     id: 90,
     question: "What is the capital of India?",
     options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
     answer: "New Delhi"
   },
 
   {
     id: 91,
     question: "Which instrument measures air pressure?",
     options: ["Thermometer", "Barometer", "Anemometer", "Hygrometer"],
     answer: "Barometer"
   },
   {
     id: 92,
     question: "What is the capital of Argentina?",
     options: ["Santiago", "Buenos Aires", "Montevideo", "Lima"],
     answer: "Buenos Aires"
   },
   {
     id: 93,
     question: "Which gas is used by plants for photosynthesis?",
     options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
     answer: "Carbon dioxide"
   },
   {
     id: 94,
     question: "How many seconds are in a minute?",
     options: ["30", "45", "60", "90"],
     answer: "60"
   },
   {
     id: 95,
     question: "Which country is famous for pyramids?",
     options: ["Mexico", "Peru", "Egypt", "India"],
     answer: "Egypt"
   },
   {
     id: 96,
     question: "What is the capital of Sweden?",
     options: ["Oslo", "Helsinki", "Stockholm", "Copenhagen"],
     answer: "Stockholm"
   },
   {
     id: 97,
     question: "Which planet is known as the Blue Planet?",
     options: ["Earth", "Neptune", "Uranus", "Saturn"],
     answer: "Earth"
   },
   {
     id: 98,
     question: "What is the capital of Portugal?",
     options: ["Madrid", "Lisbon", "Porto", "Seville"],
     answer: "Lisbon"
   },
   {
     id: 99,
     question: "Which organ is responsible for thinking?",
     options: ["Heart", "Liver", "Brain", "Kidney"],
     answer: "Brain"
   },
   {
     id: 100,
     question: "What is the capital of the United States?",
     options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
     answer: "Washington D.C."
   }
 ];
 
    
    