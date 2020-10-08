class Game {
  constructor(array) {
    this.array = array;
    this.gameCount = 1;
    this.gameMetod(this.array, this.gameCount);
  }
  gameMetod(inputArray, gameCount) {
    let player_button = document.getElementById("playerBtn");
    let player_info = document.getElementById("info-player");
    let quiz_form = document.getElementById("quiz-form");
    let question = document.getElementById("question");
    let submit = document.getElementById("submit");
    let submitAnswer = document.getElementById("submitAnswer");
    let questionAnswerForm = document.getElementById("question-and-answer");
    let playerStats = document.getElementById("player-stats");
    let playerform = document.getElementById("player-form");
    let questionNumber = document.getElementById("question-number");



    let answerOutput = [];
    let answerInput = [];
    let score;
    let myArray = inputArray;
    let name;
    let count = 0;

    let player = new Player(name, score);

    // Create player and score! --------------------------------------------------------------
    player_button.addEventListener("click", function (e) {

      playerStats.classList.remove("hide");
      submit.classList.remove("hide");
      player_button.classList.add("hide");
      playerform.classList.add("hide");

      player.name = document.getElementById("player-text").value;
      player.score = 0;
      player_info.innerHTML = "Player: " + player.name + "<br />" + "Score: " + player.score;

      console.log(player);
    });
    //----------------------------------------------------------------------------------------

    // Pushes all spans that needs to be used for outputting answers--------------------------
    for (let i = 1; i <= 6; i++) {
      answerOutput.push(document.getElementById("text-input" + [i]));
    }
    //----------------------------------------------------------------------------------------

    // Håller reda på vilka checkboxes som är i fylda och sparar ner i array------------------
    quiz_form.addEventListener("change", function (e) {
      answerInput = [];
      for (let i = 1; i <= 6; i++) {
        answerInput.push(document.getElementById("input" + [i]).checked);
      }
    });
    //----------------------------------------------------------------------------------------

    // An eventlistener that checks if user has answered correctly----------------------------
    submitAnswer.addEventListener("click", function (e) {
      submitAnswer.classList.add("hide");

      let correct_amount = 0;
      let correct_answer = Object.values(myArray[count].correct_answers);
      let stringArray = answerInput.map((x) => x.toString()); // converts answerInput from boolean to string

      // A for loop that checks if user has answered correctly
      for (let i = 0; i < correct_answer.length; i++) {
        if (correct_answer[i] === stringArray[i]) {
          correct_amount++;
        }
        if (correct_answer[i] == "true") {
          answerOutput[i].style.color = "green";
        }
        if (correct_answer[i] == "false") {
          answerOutput[i].style.color = "red";
        }
      }
      if (correct_amount == 6) {
        player.score++;
        player_info.innerHTML = "Player: " + player.name + "<br />" + "Score: " + player.score;
      }
      answerInput = [];
      count++;
      if (count <= 10) {
        submit.classList.remove("hide");
      }
    });
    //-------------------------------------------------------------------------------------------

    // An eventlistener for outupting questions--------------------------------------------------
    submit.addEventListener("click", function (e) {
      if (count < 10) {
        questionAnswerForm.classList.remove("hide");
        submitAnswer.classList.remove("hide");
        submit.classList.add("hide");
        submit.textContent = "Nästa fråga!";

        // Changing text color and unchecking boxes
        for (let i = 0; i < answerOutput.length; i++) {
          answerOutput[i].style.color = "white";
        }
        for (let i = 1; i <= 6; i++) {
          document.getElementById("input" + [i]).checked = false;
        }

        // outputs gamecount and question number
        let number = count;
        number++;
        questionNumber.innerHTML = " Omgång: " + gameCount + "<br />" + "Fråga: " + number;
        questionNumber.style.color = "orange";

        // outputs question and loops and outputs all answers
        question.textContent = myArray[count].question;
        let answerArray = Object.values(myArray[count].answers);
        for (let i = 0; i < answerOutput.length; i++) {
          answerOutput[i].textContent = answerArray[i];
        }
      } else {
        // Restarts game if user presses confirm in browser
        submit.classList.add("hide");
        questionAnswerForm.classList.add("hide");

        if (confirm("Du fick: " + player.score + " Poäng! Av 10 möjliga! Vill du spela igen tryck OK!")) {
          submit.classList.remove("hide");

          player.score = 0;
          count = 0;
          gameCount++;
          player_info.innerHTML = "Player: " + player.name + "<br />" + "Score: " + player.score;

          fetch("https://quizapi.io/api/v1/questions?apiKey=ApIq7xjNwiSVvRYkKtGckbRBzQvw1MhiHbM1iZFe&limit=10")
            .then((response) => response.json())
            .then((data) => (myArray = data));
        }
      }
    });
    //------------------------------------------------------------------------------------------------------------
  }
}