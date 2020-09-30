document.addEventListener('DOMContentLoaded', function (e) {    
    player_button = document.getElementById("playerBtn");
    game_button = document.getElementById("gameBtn");
    
    player_button.addEventListener("click", function (e) {
        let name = document.getElementById("player-text").value;
        let score = 0;
        let player = new Player(name, score);
        console.log(player);
    })
    

});
