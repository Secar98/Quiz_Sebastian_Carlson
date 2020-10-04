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
        
        question.innerHTML = myArray[0].question;
        answerInput1.innerHTML = myArray[0].answers.answer_a;
        answerInput2.innerHTML = myArray[0].answers.answer_b;
        answerInput3.innerHTML = myArray[0].answers.answer_c;
        answerInput4.innerHTML = myArray[0].answers.answer_d;
        answerInput5.innerHTML = myArray[0].answers.answer_e;
        answerInput6.innerHTML = myArray[0].answers.answer_f;

        console.log(myArray[0]);
        
    }
}



/*
Behöver skriva ut question till innerHTML *
Behöver skriva ut alla answers mha "answers" till innerHTML *
Behöver hämta "correct_answer" och gemföra med vad användaren har valt

Kanske behöver hämta "multiple_correct_answers" och jämföra med correct answer
*/