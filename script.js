const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const refreshButton = document.getElementById('refresh-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const finalScore = document.getElementById('score')
let total = 0

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion()
})
refreshButton.addEventListener('click', refresh)

function startGame(){
    console.log('Start!')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random() -.5)
    currentQuestionIndex= 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    total=0
    finalScore.innerHTML = `Points ${total}`
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer=>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
            finalScore.innerHTML = `Current Point: ${total}`
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

    correctCount.innerHTML = 'score:'
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.hasChildNodes()){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button, button.dataset.correct)
    })

    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')  
    } else{
        startButton.innerHTML = 'Restart'
        refreshButton.classList.remove('hide')
        finalScore.innerHTML = `Your final score is ${total}/${questions.length}`
    }
    if(correct){
        total++
        finalScore.innerHTML = `Current Point: ${total}`
    } 
    
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function refresh(){
    window.location.reload("Refresh")
  }


  const questions = [
    {
        question: 'Choose the correct fact to each keyword',
        answers:[
            { text: "a", correct: false },
            { text: "b", correct: false },
            { text: "c", correct: true },
            { text: "d", correct: false }
        ]
    },

    {
        question: 'Choose the correct fact to each keyword',
        answers:[
            { text: "a", correct: false },
            { text: "b", correct: false },
            { text: "c", correct: true },
            { text: "d", correct: false }
        ]
    },
    
    {
        question: 'Choose the correct fact to each keyword',
        answers:[
            { text: "a", correct: false },
            { text: "b", correct: false },
            { text: "c", correct: true },
            { text: "d", correct: false }
        ]
    },

    
]