let previousBtn = document.getElementById('previous');
let nextBtn = document.getElementById('next');
let option1 = document.getElementById('answer1');
let option2 = document.getElementById('answer2');
let option3 = document.getElementById('answer3');
let option4 = document.getElementById('answer4');
let number = document.getElementById('number');
let submitBtn = document.getElementById('submit');
let startBtn = document.getElementById('start-button');
let questionText = document.getElementById('question-text');
let timer = document.getElementById('timer');


let currentQuestion=0;
var score = 0;
var highscore = localStorage.getItem("highscore");

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);      
    }
}
else{
    localStorage.setItem("highscore", score);
}
console.log(highscore);

let startButton = document.getElementById('start-button');

/*startBtn.addEventListener("click",startBtn);

function startGame () {
    console.log('started')
    startButton.classList.add('hide')
    questionText.classList.remove('hide')
}
*/
let questions = [
   
 {
    question: "What one is NOT a Javascript Type?",
    answers: [
        {option1:"Number",answer:false},
        {option2:"String",answer:false},
        {option3:"Element",answer:true},
        {option4:"Boolean",answer:false}
    ]

},

{
    question: "What Company invented JavaScript?",
    answers: [
        {option1:"Twitter",answer:false},
        {option2:"Meta",answer:false},
        {option3:"Netscape",answer:true},
        {option4:"Apple",answer:false},
    ]
},

{
    question: "What does this operator mean == ?",
    answers: [
        {option1:"Equals",answer:true},
        {option2:"Logical and",answer:false},
        {option3:"Assined too",answer:false},
        {option4:"Logical and",answer:false},
    ]
},

{
    question: "What option is not a Pop up box available in JavaScript?",
    answers: [
        {option1:"Alert",answer:false},
        {option2:"Confirm and",answer:false},
        {option3:"Prompt",answer:false},
        {option4:"Window",answer:true},
    ]
},

{
    question: "Which option is not a boolean operator in JavaScript?",
    answers: [
        {option1:"||",answer:false},
        {option2:"#",answer:true},
        {option3:"&&",answer:false},
        {option4:"!",answer:false},
    ]
}    
]

previousBtn.addEventListener('click',previous);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);

function beginQuiz () {
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    option1.innerHTML = questions[currentQuestion].answers[0].option1;
    option1.onclick = () => {
        let ano = 0
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5) {
                score++;
            }
        } 
        number.innerHTML = score;
        if (currentQuestion<5) {
            next();
        }
    }
    currentQuestion = 1;
    questionText.innerHTML = questions[currentQuestion].question;
    option2.innerHTML = questions[currentQuestion].answers[1].option2;
    option2.onclick = () => {
        let ano = 0
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5) {
                score++;
            }
        } 
        number.innerHTML = score;
        if (currentQuestion<5) {
            next();
        }
    }
    currentQuestion = 2;
    questionText.innerHTML = questions[currentQuestion].question;
    option3.innerHTML = questions[currentQuestion].answers[2].option3;
    option3.onclick = () => {
        let ano = 0
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5) {
                score++;
            }
        } 
        number.innerHTML = score;
        if (currentQuestion<5) {
            next();
        }
    }
    currentQuestion = 3;
    questionText.innerHTML = questions[currentQuestion].question;
    option4.innerHTML = questions[currentQuestion].answers[3].option4;
    option4.onclick = () => {
        let ano = 0
        if(questions[currentQuestion].answers[ano].answer){
            if(score<5) {
                score++;
            }
        } 
        number.innerHTML = score;
        if (currentQuestion<5) {
            next();
        }
    }
}

console.log(questionText);

function next (){
    currentQuestion++;
    if(currentQuestion>=5){
        nextBtn.classList.add('hide');
        previousBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    option1.innerHTML = questions[currentQuestion].answers[0].option1;
    option1.onclick = () => {
        let ano = 0;
        if(questions[currentQuestion].answers[ano].answer){
            if (score<5){
                score++;
            }
        }
        number.innerHTML = score;
        if(currentQuestion<5){
            next();
        }
    }
    option2.innerHTML = questions[currentQuestion].answers[1].option2;
    option2.onclick = () => {
        let ano = 1;
        if(questions[currentQuestion].answers[ano].answer){
            if (score<5){
                score++;
            }
        }
        number.innerHTML = score;
        if(currentQuestion<5){
            next();
        }
    }
    option3.innerHTML = questions[currentQuestion].answers[2].option3;
    option3.onclick = () => {
        let ano = 2;
        if(questions[currentQuestion].answers[ano].answer){
            if (score<5){
                score++;
            }
        }
        number.innerHTML = score;
        if(currentQuestion<5){
            next();
        }
    }
    option4.innerHTML = questions[currentQuestion].answers[3].option4;
    option4.onclick = () => {
        let ano = 3;
        if(questions[currentQuestion].answers[ano].answer){
            if (score<5){
                score++;
            }
        }
        number.innerHTML = score;
        if(currentQuestion<5){
            next();
        }
    }
    previousBtn.classList.remove('hide');
}    

function previous (){
    currentQuestion--;
    if(currentQuestion<=0){
        previousBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    option1.innerHTML = questions[currentQuestion].answers[0].option1;
    option1.onclick = () => {
        let ano = 0;
        if(questions[currentQuestion].answers[ano].answer){
            if (score<5){
                score++;
            }
        }
        number.innerHTML = score;
        if(currentQuestion<5){
            next();
        }
    }
    option2.innerHTML = questions[currentQuestion].answers[1].option2;
    option2.onclick = () => {
        let ano = 1;
        if(questions[currentQuestion].answers[ano].answer){
            if (score<5){
                score++;
            }
        }
        number.innerHTML = score;
        if(currentQuestion<5){
            next();
        }
    }
    option3.innerHTML = questions[currentQuestion].answers[2].option3;
    option3.onclick = () => {
        let ano = 2;
        if(questions[currentQuestion].answers[ano].answer){
            if (score<5){
                score++;
            }
        }
        number.innerHTML = score;
        if(currentQuestion<5){
            next();
        }
    }
    option4.innerHTML = questions[currentQuestion].answers[3].option4;
    option4.onclick = () => {
        let ano = 3;
        if(questions[currentQuestion].answers[ano].answer){
            if (score<5){
                score++;
            }
        }
        number.innerHTML = score;
        if(currentQuestion<5){
            next();
        }
    }
}    

function submit (){
    previousBtn.classList.add('d-none');
    nextBtn.classList.add('d-none');
    submitBtn.classList.add('d-none');
    option1.classList.add('d-none');
    option2.classList.add('d-none');
    option3.classList.add('d-none');
    option4.classList.add('d-none');
    questionText.classList.add('d-none');
    startBtn.classList.add('d-none');

}


