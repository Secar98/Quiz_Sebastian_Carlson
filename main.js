
document.addEventListener('DOMContentLoaded', function (e) {    
    let player_button = document.getElementById("playerBtn");
    let player_info = document.getElementById("info-player");
    let player_score = document.getElementById("score-player");
    let amountOfQuestions = document.getElementById("question-amount");
    let amount;

    let quiz = new Quiz(amount);

    amountOfQuestions.addEventListener("change", function(e) {
        amount = amountOfQuestions.value;
        return amount;
    })

    player_button.addEventListener("click", function (e) {
        let name = document.getElementById("player-text").value;
        let score = 0;
        let player = new Player(name, score);
        console.log(player);
        player_info.innerHTML = "Name: " + player.name;
        player_score.innerHTML = "Score: " + player.score;
    })
    
    function Questions() {
        let questionArray = [];
        for (let i = 0; i < amountOfQuestions; i++){ // 10 kan bytas mot hur många frågot användaren vill ha
            questionArray.push(quiz.fetchData(i));
        }
        return questionArray;
    }
    Questions();

});


/*Försöker fixa amount of questions on change fo select box*/