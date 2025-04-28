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
                let liEl = document.createElement("li");
                liEl.textContent = `Företag: ${job.companyname}, Jobbtitel: ${job.jobtitle}, Plats: ${job.location}`;
                jobList.appendChild(liEl);
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
        fetch("https://backend2-1-vera.onrender.com/resume/add", {
            method: 'POST',
            headers: {
                'content-type': 'applications/json'
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


