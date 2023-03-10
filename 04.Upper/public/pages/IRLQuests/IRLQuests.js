// https://www.boredapi.com/ 

fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((result) => { 
        console.log(result);
        document.getElementById("quest").innerText = result.activity;
    });