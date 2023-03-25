var startButton = document.querySelector("#start-button");
var quizContainer = document.getElementById("quiz");
var scoreContainer = document.querySelector(".highscore-pg");
var startPage = document.querySelector(".start-pg");
var timer = document.querySelector(".time");
var hsLabel = document.querySelector("#hs-label");
var timeLeft = document.querySelector("#timer");

var intervalId;
var score = 0;
var currentQuestionIndex = 0;

let currentTime = timeLeft.textContent;

// Quiz Questions
const questions = [
   
    {
       question: "What one is NOT a Javascript Type?",
       choices: ['Number', 'String', 'Element', 'Boolean'],
       correctAnswer: "Element"
   
   },
   
   {
       question: "What Company invented JavaScript?",
       choices: ['Twitter', 'Meta', 'Netscape', 'Apple'],
       correctAnswer: "Netscape"
   },
   
   {
       question: "What does this operator mean == ?",
       choices: ['Equals', 'Logical and', 'Assigned too', 'Logical and'],
       correctAnswer: "Equals"
   },
   
   {
       question: "What option is not a Pop up box available in JavaScript?",
       choices: ['Alert', 'Confirm and', 'Prompt', 'Window'],
       correctAnswer: "Window"
   },
   
   {
       question: "Which option is not a boolean operator in JavaScript?",
       choices: ['||', '#', '&&', '!'],
       correctAnswer: "#"
   }    
];

// Event listener for view-hs
const viewHs = document.getElementById("view-hs");
viewHs.addEventListener('click', viewHighScores);

// Start Quiz Event Listener 
startButton.addEventListener("click", function() {
    startPage.style.display ="none";
    quizContainer.style.display ="block";
    viewHs.style.display = "none";
    showCurrentQuestion();

    intervalId = setInterval(startTimer, 1000);

    // Timer function
    function startTimer () {
        currentTime--;
        timeLeft.textContent = currentTime;

        if (currentTime === 0) {
            clearInterval(intervalId);
            endQuiz();
        } else if (currentQuestionIndex === questions.length) {
            clearInterval(intervalId);
            endQuiz();
        }
    }
});

// showCurrentQuestion() function
function showCurrentQuestion() {
    const questionsContainer = document.getElementsByClassName("questions")[0];
    const currentQuestion = questions[currentQuestionIndex];

    const questionElement = document.createElement("div");
    questionElement.innerHTML = currentQuestion.question;

    const currentChoices = currentQuestion.choices;
    const resultEl = document.getElementById('results');

    // created for loops to populate questions
    for (let i = 0; i < currentChoices.length; i++) {
        const choiceElement = document.createElement("button");
        choiceElement.classList.add("answer-btn");
        choiceElement.textContent = ( i + 1 ) + ". " + currentChoices[i];
        questionElement.appendChild(choiceElement);
        choiceElement.addEventListener("click", function() {
            if (currentChoices[i] === currentQuestion.correctAnswer) {
                if (showCurrentQuestion !== undefined) {
                    console.log(showCurrentQuestion.length);
                };
                score++;
                resultEl.textContent = "Correct!";
            } else if (currentTime >= 10) {
                currentTime -= 10; // penalty for incorrect answer
                resultEl.textContent = "Wrong!";
            } else {
                currentTime = 0; // sets time to 0 to prevent time going to negative
            }
            console.log(resultEl);
            timeLeft.textContent = currentTime;

            quizContainer.appendChild(resultEl);
            
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                // display next question
                questionsContainer.innerHTML = "";
                showCurrentQuestion();
            } 
        });
    }
    questionsContainer.appendChild(questionElement);
};
// endQuiz() function
function endQuiz() {
    clearInterval(intervalId);
    quizContainer.style.display = "none";
    scoreContainer.style.display = "block";
    
    // Display final score
    const finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = score + currentTime;

    // enter users initals and upload to local storage
    const submitBtn = document.querySelector("#submit-score");
    submitBtn.addEventListener("click", function() {
        const initialsInput = document.getElementById("initials");
        const initials = initialsInput.value;

        highScores.push({initials, score: score + currentTime});
        localStorage.setItem('High Scores', JSON.stringify(highScores));
    
        score = 0;
        currentQuestionIndex = 0;

        initialsInput.value = "";
        viewHighScores();
    });
}

let highScores = [];
if (localStorage.getItem ('High Scores')) {
    highScores = JSON.parse(localStorage.getItem('High Scores'));
};

// Display high scores
function viewHighScores() {
    startPage.style.display ="none";
    timer.style.display = "none";
    scoreContainer.style.display = "none";
    quizContainer.style.display = "none";
    hsLabel.style.display = "block";

    const hsList = document.getElementById('hs-list');
    hsList.innerHTML = "";

    const highScores = JSON.parse(localStorage.getItem('High Scores')) || [];

    highScores.sort((a,b) => b.score - a.score);
    highScores.forEach(function(score) {
        const li = document.createElement("li");
        li.textContent = score.initials + "  -  " + score.score;
        hsList.appendChild(li);
    });
    const backButton = document.createElement('button');
    backButton.classList.add("back-btn");
    backButton.textContent = "Back to Start";
    hsList.appendChild(backButton);

    backButton.addEventListener("click", function() {
        resetQuiz();
    });
}

function resetQuiz() {
    location.reload();
}

// Old Code
// let previousBtn = document.getElementById('previous');
// let nextBtn = document.getElementById('next');
// let option1 = document.getElementById('answer1');
// let option2 = document.getElementById('answer2');
// let option3 = document.getElementById('answer3');
// let option4 = document.getElementById('answer4');
// let number = document.getElementById('number');
// let submitBtn = document.getElementById('submit');
// let startBtn = document.getElementById('start-button');
// let questionText = document.getElementById('question-text');
// let timer = document.getElementById('timer');


// let currentQuestion=0;
// var score = 0;
// var highscore = localStorage.getItem("highscore");

// if(highscore !== null){
//     if (score > highscore) {
//         localStorage.setItem("highscore", score);      
//     }
// }
// else{
//     localStorage.setItem("highscore", score);
// }
// console.log(highscore);

// let startButton = document.getElementById('start-button');

// /*startBtn.addEventListener("click",startBtn);
// function startGame () {
//     console.log('started')
//     startButton.classList.add('hide')
//     questionText.classList.remove('hide')
// }
// */
// let questions = [
   
//  {
//     question: "What one is NOT a Javascript Type?",
//     answers: [
//         {option1:"Number",answer:false},
//         {option2:"String",answer:false},
//         {option3:"Element",answer:true},
//         {option4:"Boolean",answer:false}
//     ]

// },

// {
//     question: "What Company invented JavaScript?",
//     answers: [
//         {option1:"Twitter",answer:false},
//         {option2:"Meta",answer:false},
//         {option3:"Netscape",answer:true},
//         {option4:"Apple",answer:false},
//     ]
// },

// {
//     question: "What does this operator mean == ?",
//     answers: [
//         {option1:"Equals",answer:true},
//         {option2:"Logical and",answer:false},
//         {option3:"Assined too",answer:false},
//         {option4:"Logical and",answer:false},
//     ]
// },

// {
//     question: "What option is not a Pop up box available in JavaScript?",
//     answers: [
//         {option1:"Alert",answer:false},
//         {option2:"Confirm and",answer:false},
//         {option3:"Prompt",answer:false},
//         {option4:"Window",answer:true},
//     ]
// },

// {
//     question: "Which option is not a boolean operator in JavaScript?",
//     answers: [
//         {option1:"||",answer:false},
//         {option2:"#",answer:true},
//         {option3:"&&",answer:false},
//         {option4:"!",answer:false},
//     ]
// }    
// ]

// previousBtn.addEventListener('click',previous);
// nextBtn.addEventListener('click',next);
// submitBtn.addEventListener('click',submit);

// function beginQuiz () {
//     currentQuestion = 0;
//     questionText.innerHTML = questions[currentQuestion].question;
//     option1.innerHTML = questions[currentQuestion].answers[0].option1;
//     option1.onclick = () => {
//         let ano = 0
//         if(questions[currentQuestion].answers[ano].answer){
//             if(score<5) {
//                 score++;
//             }
//         } 
//         number.innerHTML = score;
//         if (currentQuestion<5) {
//             next();
//         }
//     }
//     currentQuestion = 1;
//     questionText.innerHTML = questions[currentQuestion].question;
//     option2.innerHTML = questions[currentQuestion].answers[1].option2;
//     option2.onclick = () => {
//         let ano = 0
//         if(questions[currentQuestion].answers[ano].answer){
//             if(score<5) {
//                 score++;
//             }
//         } 
//         number.innerHTML = score;
//         if (currentQuestion<5) {
//             next();
//         }
//     }
//     currentQuestion = 2;
//     questionText.innerHTML = questions[currentQuestion].question;
//     option3.innerHTML = questions[currentQuestion].answers[2].option3;
//     option3.onclick = () => {
//         let ano = 0
//         if(questions[currentQuestion].answers[ano].answer){
//             if(score<5) {
//                 score++;
//             }
//         } 
//         number.innerHTML = score;
//         if (currentQuestion<5) {
//             next();
//         }
//     }
//     currentQuestion = 3;
//     questionText.innerHTML = questions[currentQuestion].question;
//     option4.innerHTML = questions[currentQuestion].answers[3].option4;
//     option4.onclick = () => {
//         let ano = 0
//         if(questions[currentQuestion].answers[ano].answer){
//             if(score<5) {
//                 score++;
//             }
//         } 
//         number.innerHTML = score;
//         if (currentQuestion<5) {
//             next();
//         }
//     }
// }

// console.log(questionText);

// function next (){
//     currentQuestion++;
//     if(currentQuestion>=5){
//         nextBtn.classList.add('hide');
//         previousBtn.classList.remove('hide');
//     }
//     questionText.innerHTML = questions[currentQuestion].question;
//     option1.innerHTML = questions[currentQuestion].answers[0].option1;
//     option1.onclick = () => {
//         let ano = 0;
//         if(questions[currentQuestion].answers[ano].answer){
//             if (score<5){
//                 score++;
//             }
//         }
//         number.innerHTML = score;
//         if(currentQuestion<5){
//             next();
//         }
//     }
//     option2.innerHTML = questions[currentQuestion].answers[1].option2;
//     option2.onclick = () => {
//         let ano = 1;
//         if(questions[currentQuestion].answers[ano].answer){
//             if (score<5){
//                 score++;
//             }
//         }
//         number.innerHTML = score;
//         if(currentQuestion<5){
//             next();
//         }
//     }
//     option3.innerHTML = questions[currentQuestion].answers[2].option3;
//     option3.onclick = () => {
//         let ano = 2;
//         if(questions[currentQuestion].answers[ano].answer){
//             if (score<5){
//                 score++;
//             }
//         }
//         number.innerHTML = score;
//         if(currentQuestion<5){
//             next();
//         }
//     }
//     option4.innerHTML = questions[currentQuestion].answers[3].option4;
//     option4.onclick = () => {
//         let ano = 3;
//         if(questions[currentQuestion].answers[ano].answer){
//             if (score<5){
//                 score++;
//             }
//         }
//         number.innerHTML = score;
//         if(currentQuestion<5){
//             next();
//         }
//     }
//     previousBtn.classList.remove('hide');
// }    

// function previous (){
//     currentQuestion--;
//     if(currentQuestion<=0){
//         previousBtn.classList.add('hide');
//         nextBtn.classList.remove('hide');
//     }
//     questionText.innerHTML = questions[currentQuestion].question;
//     option1.innerHTML = questions[currentQuestion].answers[0].option1;
//     option1.onclick = () => {
//         let ano = 0;
//         if(questions[currentQuestion].answers[ano].answer){
//             if (score<5){
//                 score++;
//             }
//         }
//         number.innerHTML = score;
//         if(currentQuestion<5){
//             next();
//         }
//     }
//     option2.innerHTML = questions[currentQuestion].answers[1].option2;
//     option2.onclick = () => {
//         let ano = 1;
//         if(questions[currentQuestion].answers[ano].answer){
//             if (score<5){
//                 score++;
//             }
//         }
//         number.innerHTML = score;
//         if(currentQuestion<5){
//             next();
//         }
//     }
//     option3.innerHTML = questions[currentQuestion].answers[2].option3;
//     option3.onclick = () => {
//         let ano = 2;
//         if(questions[currentQuestion].answers[ano].answer){
//             if (score<5){
//                 score++;
//             }
//         }
//         number.innerHTML = score;
//         if(currentQuestion<5){
//             next();
//         }
//     }
//     option4.innerHTML = questions[currentQuestion].answers[3].option4;
//     option4.onclick = () => {
//         let ano = 3;
//         if(questions[currentQuestion].answers[ano].answer){
//             if (score<5){
//                 score++;
//             }
//         }
//         number.innerHTML = score;
//         if(currentQuestion<5){
//             next();
//         }
//     }
// }    

// function submit (){
//     previousBtn.classList.add('d-none');
//     nextBtn.classList.add('d-none');
//     submitBtn.classList.add('d-none');
//     option1.classList.add('d-none');
//     option2.classList.add('d-none');
//     option3.classList.add('d-none');
//     option4.classList.add('d-none');
//     questionText.classList.add('d-none');
//     startBtn.classList.add('d-none');

// }