//Variabler 
let jobList = document.getElementById("all-work");

getList();

function getList(){
    fetch("https://backend2-1-vera.onrender.com")
    .then(response => {
        if(!response.ok){
            throw Error("Något gick fel med förfrågan!");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Fel vid hämtning av alla jobb: " + error);
    })
}


