var readlineSync = require("readline-sync");

var userName = readlineSync.question("Hi, What's your name ? ")

console.log("Hello" + userName)

console.log("------------------")
console.log("Let\'s play a game \"Pokemon Quiz\" ")

var score = 0;

var questions = [
  {
    question: "What is pikachu\'s next form \na. Pichu \nb. Catmia \nc. Raichu \nd. Jiraya",
    answer: "c"
  },
  {
    question: "Where is Ash\'s house ? \na. Chembur \nb. Dharavi \nc. Rock Island \nd. Palete city",
    answer: "d"
  },
  {
    question: "Did Ash\'s Pikachu evolved ? \na. Yes \nb. No",
    answer: "b"
  },
  {
    question: "Who is Ash\'s arch rival \na. James \nb. Brock \nc. Garry \nd. Charlizard",
    answer: "c"
  },
  {
    question: "Is Charlizard a legendary pokemon ? \na. Yes \nb. No",
    answer: "b"
  },
];

function check(question, answer) {
  var ans = readlineSync.question(question);

  if(ans == answer) {
    console.log("right!");
    score++;
  }
  else {
    console.log("wrong!");
  }
  console.log("--------------");
  console.log("Your score is "+ score);
}

for(var i = 0; i < questions.length; i++){
  check(questions[i].question, questions[i].answer)
}