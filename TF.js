const questions = [
    {
        question: "3+5=8",
        answers: [
            {text: "TRUE", correct: true},
            {text: "False", correct: false},
        ],
        eplanation :["3+5=8"] 
    },

    {
        question: "6-2=4",
        answers: [
            {text: "TRUE", correct: true},
            {text: "False", correct: false},
        ],eplanation : ["6-2=4"]
    },
    {
    question: "4 x 2 =8",
        answers: [
            {text: "TRUE", correct: true},
            {text: "False", correct: false},
        ],
        eplanation : ["4 x 2 = 8"]
    },
    {
        question: "9 / 3 = 2",
            answers: [
                {text: "TRUE", correct: false},
                {text: "False", correct: true},
            ],
            eplanation : ["9 / 3 = 3"]
        },
        {
            question: "2 + 2 = 5",
                answers: [
                    {text: "TRUE", correct: false},
                    {text: "False", correct: true},  
                ],
                eplanation : ["2 + 2 =4"]
            },

            {
                question: "7 - 4 = 3",
                    answers: [
                        {text: "TRUE", correct: true},
                        {text: "False", correct: false},
                    ],
                    eplanation: ["7 - 4 = 3"]
                },
                {
                    question: "3 x 3 = 6",
                        answers: [
                            {text: "TRUE", correct: false},
                            {text: "False", correct: true},
                        ],
                        eplanation: ["3 x 3 = 9"]
                    },

                    {
                        question: "4 x 2 =8",
                            answers: [
                                {text: "TRUE", correct: true},
                                {text: "False", correct: false},
                            ],
                            eplanation: ["4 x 2 =8"]
                        },

                        {
                            question: "8 / 2 = 4",
                                answers: [
                                    {text: "TRUE", correct: true},
                                    {text: "False", correct: false},
                                ],
                                eplanation: ["8 / 2 = 4"]
                            }
];



//const resultContainer = document.getElementById("results");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const result = document.getElementById("results");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score  = 0;
    nextButton.innerHTML = "Next";
    showQuestion(); 
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    questionElement.innerHTML = questionNo + "."+currentQuestion.question;
    document.getElementById("result").innerHTML = "";
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
   
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}



function selectAnswer(e){
    const currentQuestion = questions[currentQuestionIndex];
    const resultElement = document.getElementById("result")
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        resultElement.innerHTML = "Correct!"+ currentQuestion. eplanation;
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
        resultElement.innerHTML = "Incorrect!"+ currentQuestion. eplanation;
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ===  "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    document.getElementById("score").innerHTML="score :"+" "+score+"/"+questions.length;
    nextButton.style.display = "block";
}


function showscore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showscore();
    }
}




nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){ 
        handleNextButton();
    }
    else{
        startQuiz();
    }
   
});


startQuiz();
