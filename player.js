class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score
    }
    CreatePlayer(){
        this.name = document.getElementById("player-text").value;
        this.score = 0;
    }
}