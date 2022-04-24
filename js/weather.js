
function onGeoOK (position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child"); 
        const temp = document.querySelector("#weather span:nth-child(2)"); 
        const city = document.querySelector("#weather span:last-child"); 
        city.innerText = `${data.name}`;
        temp.innerText = `${data.main.temp} °C`;
        weather.innerText = `${data.weather[0].main}`;
    })
}

function onGeoError(){
    console.log("위치를 가져올 수 없어요.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);