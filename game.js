class Game {
    constructor(array) {
        this.array = array;
        this.metod(this.array);
    }
    metod(myArray) {
        let question = document.getElementById("question");
        let answerInput1 = document.getElementById("text-input1");
        let answerInput2 = document.getElementById("text-input2");
        let answerInput3 = document.getElementById("text-input3");
        let answerInput4 = document.getElementById("text-input4");
        let answerInput5 = document.getElementById("text-input5");
        let answerInput6 = document.getElementById("text-input6");

        

        let submit = document.getElementById("submit");

        let count = 0;
        
        submit.addEventListener("click", function (e) {
                question.innerHTML = myArray[count].question;
                answerInput1.innerHTML = myArray[count].answers.answer_a;
                answerInput2.innerHTML = myArray[count].answers.answer_b;
                answerInput3.innerHTML = myArray[count].answers.answer_c;
                answerInput4.innerHTML = myArray[count].answers.answer_d;
                answerInput5.innerHTML = myArray[count].answers.answer_e;
                answerInput6.innerHTML = myArray[count].answers.answer_f;

                
                count++;
        })
        
    }
}



/*
    Behöver hämta vad användaren klickar i för checkbox,
    och sen jämföra det med correct_answers inte correct_answer
*/