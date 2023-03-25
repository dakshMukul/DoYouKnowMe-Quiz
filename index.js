const readLineSync = require('readline-sync');
const userName = readLineSync.question("What is your name?")
console.log("Welcome "+ userName +"!");
console.log("I will ask you some question about Mukul...")
console.log("let's see how much you know him!!!")
console.log("")
console.log("***----------***---------***")
console.log("")

var score = 0;

var questions = [
  questionOne = {
  question: "who is his favorite superhero? ",
  answer: "iron man"
},
  questionTwo = {
  question: "Which is his favorite food? ",
  answer: "biryani"
},
  questionThree = {
  question: "Which is his favorite movie? ",
  answer: "rrr"
},
  questionFour = {
  question: "Which sport he likes the most? ",
  answer: "cricket"
},
  questionThree = {
  question: "Dream company he wants to work at? ",
  answer: "google"
},
];

play = (question, answer) => {
  const userAns = readLineSync.question(question).toLowerCase();
  if(userAns === answer){
    console.log("Right answer!")
    score++;
    console.log("---------------***--------------")
    console.log("")

  }else{
    console.log("Wrong answer");
  }
}


for(let i = 0; i < questions.length; i++){
  const currentQuestion =  questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY!!! Your score is: "+ score);

