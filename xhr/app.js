const getWeather = () => {
        const xhr = new XMLHttpRequest;
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=Maastricht,nl&appid=d60ebbc71990a2bf77fc7e5be1e6bb92&units=metric'
        // xhr.onload = function () {
        //     const parsedResponse = JSON.parse(xhr.responseText);
        //     console.log(Math.floor(parsedResponse.main.temp));
        //     console.log(parsedResponse.weather[0].description);
        // }
        xhr.responseType = "json"
        xhr.onload = function () {
            if(xhr.status < 400) {
                const weatherData = xhr.response;
                document.querySelector('h1').textContent = `Today's temparature in Maastricht is ${Math.floor(weatherData.main.temp)}°C. ` ;
                const weatherDescription = document.querySelector('h2');
                weatherDescription.innerHTML = `${weatherData.weather[0].description} <img width="30px" src="file:///C:/Users/Gebruiker/Downloads/clouds.svg">`
            }
            else {
                console.log(`Something went wrong... ${xhr.status}`)
            }
        }
        xhr.onerror = function(err){
            //network error
            console.log('Errrorr', err)
        }
        xhr.open('GET', url);
        xhr.send();
        }
        const button = document.querySelector('button');
        button.onclick = getWeather;
