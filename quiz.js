



function fetchData() {

    fetch('https://quizapi.io/api/v1/questions?apiKey=ApIq7xjNwiSVvRYkKtGckbRBzQvw1MhiHbM1iZFe&limit=10')
    .then(response => response.json())
    .then(data => {
        console.log(data[0]);
    });
}

document.addEventListener("DOMContentLoaded", function(event) { 
    console.log(fetchData());
})
