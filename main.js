//Variabler 
let jobList = document.getElementById("all-work");
let addingForm = document.getElementById("form");

//Get all jobs
if(jobList){
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
        if(data.length > 0){
            data.forEach(job => {
                let secEl = document.createElement("section");
                let headerEl = document.createElement("h3");
                let parElFirst = document.createElement("p");
                let parElSec = document.createElement("p");
                headerEl.textContent = `Företag: ${job.companyname}`;
                parElFirst.textContent = `Jobbtitel: ${job.jobtitle}`;
                parElSec.textContent = `Plats: ${job.location}`;
                secEl.appendChild(headerEl);
                secEl.appendChild(parElFirst);
                secEl.appendChild(parElSec);
                jobList.appendChild(secEl);
            });
        }
    })
    .catch(error => {
        console.error("Fel vid hämtning av alla jobb: " + error);
    })
}
}

//Add job
if(addingForm){
    addingForm.addEventListener("submit", function (e){
        event.preventDefault();
        const data = new FormData(e.target);
        const job = {
            companyname: data.get("companyname"),
            jobtitle: data.get("jobtitle"),
            location: data.get("location")
        };
        console.log(job);
        fetch("https://backend2-1-vera.onrender.com/resume/add", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(job)
        })
    .then(response => {
        if(!response.ok){
            throw Error("Något gick fel med förfrågan!");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        alert("Jobb tillagd i CV!");
    })
    .catch(error => {
        console.error("Fel vid hämtning av att lägga till jobb: " + error);
    })
    })
}
function addJob(){
    
}


