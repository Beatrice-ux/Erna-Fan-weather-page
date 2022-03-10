function displayTemp(response){
    console.log(response)
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let humidElement=document.querySelector("#humidIndex");
    let windElement=document.querySelector("#windSpeed");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.wind.speed);
}

function formDate(response){
    let 
}


let apiKey="a3b981fcdb00e192a7a49927e31c8d54";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);
axios.get(apiUrl).then(formDate);



