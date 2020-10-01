document.addEventListener('DOMContentLoaded', function (e) {    
    let player_button = document.getElementById("playerBtn");
    let player_info = document.getElementById("info-player");
    let player_score = document.getElementById("score-player");
    let quiz = new Quiz();

    console.log(quiz.question);

    player_button.addEventListener("click", function (e) {
        let name = document.getElementById("player-text").value;
        let score = 0;
        let player = new Player(name, score);
        console.log(player);
        player_info.innerHTML = "Name: " + player.name;
        player_score.innerHTML = "Score: " + player.score;
    })
    


});
