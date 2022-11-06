const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const number = document.getElementById('number');
const questionText = document.getElementById('question-text');
const timer = document.getElementById('timer');

var currentQuestion=0;
var count=0;

let questions = [
{
    question1: "What one is NOT a Javascript Type?",
    answers: [
        {option1:"Number",answer:false},
        {option2:"String",answer:false},
        {option3:"Element",answer:true},
        {option4:"Boolean",answer:false}
    ]
},

{
    question2: "What Company invented JavaScript?",
    answers: [
        {option1:"Twitter",answer:false},
        {option2:"Meta",answer:false},
        {option3:"Netscape",answer:true},
        {option4:"Apple",answer:false},
    ]
},

{
    question3: "What does this operator mean? ==",
    answers: [
        {option1:"Equals",answer:true},
        {option2:"Logical and",answer:false},
        {option3:"Assined too",answer:false},
        {option4:"Logical and",answer:false},
    ]
},

{
    question4: "What option is not a Pop up box available in JavaScript?",
    answers: [
        {option1:"alert",answer:false},
        {option2:"confirm and",answer:false},
        {option3:"prompt",answer:false},
        {option4:"window",answer:true},
    ]
},

{
    question5: "Which option is not a boolean operator in JavaScript?",
    answers: [
        {option1:"||",answer:false},
        {option2:"#",answer:true},
        {option3:"&&",answer:false},
        {option4:"!",answer:false},
    ]
}    
]

previousBtn.addEventListener('click',previousBtn);
nextBtn.addEventListener('click',next);
option1.addEventListener('click',option1);
option2.addEventListener('click',option2);
option3.addEventListener('click',option3);
option4.addEventListener('click',option4);

function beginQuiz () {
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    option1.innerHTML = questions[currentQuestion].answers[0].option;
    option1.onclick = () => {
        let ano = 0
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5) {
                score++;
            }
        } 
        userScore.innerHTML = score;
        if (currentQuestion<5) {
            next();
        }
    }
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    option1.innerHTML = questions[currentQuestion].answers[1].option;
    option1.onclick = () => {
        let ano = 0
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5) {
                score++;
            }
        } 
        userScore.innerHTML = score;
        if (currentQuestion<5) {
            next();
        }
    }
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    option1.innerHTML = questions[currentQuestion].answers[2].option;
    option1.onclick = () => {
        let ano = 0
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5) {
                score++;
            }
        } 
        userScore.innerHTML = score;
        if (currentQuestion<5) {
            next();
        }
    }
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    option1.innerHTML = questions[currentQuestion].answers[3].option;
    option1.onclick = () => {
        let ano = 0
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5) {
                score++;
            }
        } 
        userScore.innerHTML = score;
        if (currentQuestion<5) {
            next();
        }
    }
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    option1.innerHTML = questions[currentQuestion].answers[4].option;
    option1.onclick = () => {
        let ano = 0
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5) {
                score++;
            }
        } 
        userScore.innerHTML = score;
        if (currentQuestion<5) {
            next();
        }
    }

}
console.log(questionText);