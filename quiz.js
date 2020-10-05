class Quiz{
    constructor(amount){
        this.amount = 'https://quizapi.io/api/v1/questions?apiKey=ApIq7xjNwiSVvRYkKtGckbRBzQvw1MhiHbM1iZFe&limit=' + [amount];
    }
    fetchApi() {
        fetch(this.amount)
            .then(response => response.json())
            .then(data => {
                new Game(data);
        });
        
    }
}

