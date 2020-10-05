class Game {
    constructor(array) {
        this.array = array;
        this.gameMetod(this.array);
    }
    gameMetod(myArray) {

        // Create player and score! ------------------------------------------------------------------------
        let player_button = document.getElementById("playerBtn");
        let player_info = document.getElementById("info-player");
        let player_score = document.getElementById("score-player");
        

        player_button.addEventListener("click", function (e) {
            let name = document.getElementById("player-text").value;
            let score = 0;
            let player = new Player(name, score);
            console.log(player);
            player_info.innerHTML = "Name: " + player.name;
            player_score.innerHTML = "Score: " + player.score;
        })

        // Outputing questions, answers and outputing score -------------------------------------------------

        let answerOutput = [];
        let answerInput = [];
        let quiz_form = document.getElementById("quiz-form");
        let question = document.getElementById("question");
        let submit = document.getElementById("submit");
        let count = 0;

        for (let i = 1; i <= 6; i++) {
            answerOutput.push(document.getElementById("text-input" + [i]));
        }
        quiz_form.addEventListener("change", function (e) {
            answerInput = [];
            for (let i = 1; i <= 6; i++) {
                answerInput.push(document.getElementById("input" + [i]).checked);
            }
            console.log(answerInput);
        })


        // Object.values()
        submit.addEventListener("click", function (e) {
            if (count < 10) { // Ittererar genom frågorna  
                let correct_amount = 0;
                let answerArray = Object.values(myArray[count].answers); 
                let correct_answer = Object.values(myArray[count].correct_answers);
                
                console.log(myArray);
                for (let i = 0; i <= 6; i++) {
                    if (correct_answer[i] == "true") {
                        correct_amount++;
                    }
                }
                submit.textContent = "Nästa fråga!";
                question.innerHTML = myArray[count].question;
                for(let i = 0; i < answerOutput.length; i++) {
                    answerOutput[i].textContent = answerArray[i];
                }
                count++;
            } else { // starta om spelet
                submit.textContent = "Tryck för att starta om!";
                count = 0;
                let new_quiz = new Quiz(10); // kan låta användaren välja amount, problem
                new_quiz.fetchApi();
            }                                 

        })

        

        
        
    }
}



/*
    Behöver hämta vad användaren klickar i för checkbox,
    och sen jämföra det med correct_answers inte correct_answer
*/

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