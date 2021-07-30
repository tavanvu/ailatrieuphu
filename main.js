gameManager.addQuiz(quiz1)
gameManager.addQuiz(quiz2)
console.log(gameManager)

function displayQuiz(index) {
    document.getElementById('question').innerHTML = gameManager.quizs[index].question;
    for (let i = 1; i <= gameManager.quizs[index].answer.length; i++) {
        document.getElementById("ans-" + i).innerHTML = gameManager.quizs[index].answer[i - 1]
    }
}
displayQuiz(0);

function nextQuiz() {
    gameManager.nextQuiz() //đổi câu hỏi
    displayQuiz(gameManager.current)
}

function endGame() {
    gameManager.endGame()
    displayQuiz(gameManager.current)
}

function reTest() {
    gameManager.reTest()
    displayQuiz(gameManager.current)
}
function deleteQuiz() {
    let indexDeleted1;
    let indexDeleted2;
    do {
        indexDeleted1 = Math.trunc(Math.random()*4)
    } while (indexDeleted1 === !this.correct)
    do {
        indexDeleted2 =  Math.trunc(Math.random()*4);
    } while (indexDeleted2 === indexDeleted1 || indexDeleted2 === !this.correct);
    document.getElementById(`ans-${indexDeleted1}`).innerHTML = "";
    document.getElementById(`ans-${indexDeleted2}`).innerHTML = "";
}//xóa phần tử khỏi mảng`
function chooseAns(id) {
    let ans = document.getElementById(id).innerHTML
    gameManager.chooseAnswer(ans)
    if (gameManager.checkAnswer(ans)) {
        nextQuiz()
    } else {
        endGame()
    }
}