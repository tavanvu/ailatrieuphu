class Manager{
    constructor(limit) {
        this.limit =limit
        this.current = 0
        this.quizs = []
    }
    checkAnswer(ans){
        if (ans === this.quizs[this.current].correct){
         return true
        }else {
         return false
        }
    } //kiểm trả câu trả lời
    chooseAnswer(ans){
        if (this.checkAnswer(ans)){
            alert("bạn đã trả lời đúng");
        }else {
            alert("bạn đã trả lời sai");
        }
    }//chọn câu tl
    nextQuiz(){
        if (this.current < this.limit-1){
            this.current++
        }else {
            alert("bạn đã đến câu hỏi cuối")
            this.current = 0
        }
    } //chuyển câu hỏi
    endGame(){
        alert("bạn đã trả lời sai bạn sẽ phải chơi lại từ đầu")

    }
    addQuiz(quiz){
        this.quizs.push(quiz)
    }//thêm phần tử vào mảng
    reTest(){
        this.current =0
    }

} let gameManager = new Manager(2);