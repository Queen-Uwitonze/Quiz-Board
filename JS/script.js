const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

// // FRONT-END LOGIC

// $(document).ready(function() {
//     $('form').submit(function(event) {
//         event.preventDefault();

//         var firstNumber = parseInt($('#first-number').val());
//         var secondNumber = parseInt($('#second-number').val());

//         var sum = add(firstNumber, secondNumber);

//         $('#result').text(sum);
//     })
// });

// // BUSINESS LOGIC

// function add(firstNumber, secondNumber) {
//     var result = firstNumber + secondNumber;

//     return result;
// }















// var userInput = new Array();
// var answers = new Array(10);
// answers[0] = "B";
// answers[1] = "C";
// answers[2] = "A";
// answers[3] = "C";
// answers[4] = "D";
// answers[5] = "D";
// answers[6] = "D";
// answers[7] = "D";
// answers[8] = "C";
// answers[9] = "A";

// function getScore(){
// var score=0;
// var numQuestions=10;

// for (var i=0;i<numQuestions;i++){
// if (userInput[i]==answers[i]){
// score += 4;
// }
// else{
// score += 0;
// }

// }
// return score;
// }
// function returnScore(){
// alert("Your score is "+getScore()+"/10");
// }