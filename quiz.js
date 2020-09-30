



function fetchData() {

    fetch('https://quizapi.io/api/v1/questions?apiKey=ApIq7xjNwiSVvRYkKtGckbRBzQvw1MhiHbM1iZFe&limit=10') // + [i] för att välja antal frågor
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

document.addEventListener("DOMContentLoaded", function(event) { 
    console.log(fetchData());
})
