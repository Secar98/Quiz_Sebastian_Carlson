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
    let restart = document.getElementById("restart");
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
    //---------------------------------------------------------------------------------------
    
    // Sparar ner alla spans som ska användas för att skriva ut frågor-----------------------
    for (let i = 1; i <= 6; i++) {
      answerOutput.push(document.getElementById("text-input" + [i]));
    }
    //---------------------------------------------------------------------------------------

    // Håller reda på vilka checkboxes som är i fylda och sparar ner i array-----------------
    quiz_form.addEventListener("change", function (e) {
      answerInput = [];
      for (let i = 1; i <= 6; i++) {
        answerInput.push(document.getElementById("input" + [i]).checked);
      }
    });
    //---------------------------------------------------------------------------------------

    // En eventlyssnare som kollar om svaret användaren har kryssat i är sant----------------
    submitAnswer.addEventListener("click", function (e) {
      let correct_answer = Object.values(myArray[count].correct_answers);
      let correct_amount = 0;
      let stringArray = answerInput.map((x) => x.toString()); // mappar igenom och gör booleanska värden till strängar

      // A for loop that checks if user has answered correctly
      for (let i = 0; i < correct_answer.length; i++) {
        if (correct_answer[i] == stringArray[i]) {
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
      submitAnswer.classList.add("hide");
    });
    //----------------------------------------------------------------------------------------

    // Object.values()
    submit.addEventListener("click", function (e) {
      if (count < 10) {
        questionAnswerForm.classList.remove("hide");
        let number = count;
        number++;
        questionNumber.innerHTML = " Omgång: " + gameCount + "<br />" + "Fråga: " + number;
        questionNumber.style.color = "orange";
        for (let i = 0; i < answerOutput.length; i++) {
          answerOutput[i].style.color = "white";
        }
        for (let i = 1; i <= 6; i++) {
          document.getElementById("input" + [i]).checked = false;
        }
        submitAnswer.classList.remove("hide");
        
        let answerArray = Object.values(myArray[count].answers);
        submit.textContent = "Nästa fråga!";
        question.textContent = myArray[count].question;
        for (let i = 0; i < answerOutput.length; i++) {
          answerOutput[i].textContent = answerArray[i];
        }
        
        submit.classList.add("hide");
      } else {
        // starta om spelet
        if (confirm("Du fick: " + player.score + " Poäng! Vill spela igen tryck OK!")) {
            question.textContent = "";
            for (let i = 0; i < answerOutput.length; i++) {
                answerOutput[i].textContent = "";
              }
            restart.classList.remove("hide");
            submit.classList.add("hide");
            questionAnswerForm.classList.add("hide");
          } else {
            questionAnswerForm.classList.add("hide");
          }
        
      }
    });
    restart.addEventListener("click", function (e) {
      player.score = 0;
      gameCount++;
      player_info.innerHTML = "Player: " + player.name + "<br />" + "Score: " + player.score;
      count = 0;
      // kan låta användaren välja amount, problem
      fetch(
        "https://quizapi.io/api/v1/questions?apiKey=ApIq7xjNwiSVvRYkKtGckbRBzQvw1MhiHbM1iZFe&limit=10"
      )
        .then((response) => response.json())
        .then((data) => (myArray = data));
      restart.classList.add("hide");
      submit.classList.remove("hide");
    });
  }
}

/*
Din uppgift är att skriva en quiz-applikation. En quiz-applikation är ett frågesport-spel.

Din applikation ska vara objektorienterad. Du ska visa att du kan skapa lämpliga klasser. 
Det kommer att vara högre fokus på det i denna uppgift än i gruppuppgiften, eftersom ni kan börja att 
skriva era applikationer objektorienterat från början nu.

Quizet ska hålla reda på en spelare. 
Det ska hantera spelarens namn, spelarens poäng i den aktuella omgången.
Frågorna ska läsas in från https://quizapi.io/ som levererar ett resultat i JSON.
Du måste använda ditt omdöme och göra en analys av kraven för att kunna leva upp till dem.


G-krav


Man ska kunna välja flera svar. Ibland kan ett alternativ vara rätt, ibland flera.
När omgången är slut ska poängen visas och användaren ska få välja att starta ett nytt spel med nya frågor.
Du ska använda minst en array-funktion. 


Skriv minst en klass som innehåller minst en metod och minst en egenskap. *
Lämna in projektet som ett git-repo. *
Spelet ska innehålla 10 frågor. *
Du får inte använda inline-css eller inline-event (t ex <p style="color:red" onlick="something();">) *
*/
