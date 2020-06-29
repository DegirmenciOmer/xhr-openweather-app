// Make a request for a user with a given ID

const input = document.querySelector('input')

const getWeather = (cityName) => {
  const resultText = document.querySelector('#resultText')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d60ebbc71990a2bf77fc7e5be1e6bb92&units=metric`
  axios.get(url)
  .then(function (response) {
    resultText.textContent = `Today's temparature in ${cityName} is ${Math.floor(response.data.main.temp)}°C. ` ;
    resultText.style.color = 'black'
    const weatherDescription = document.querySelector('#description');
    weatherDescription.innerHTML = `${response.data.weather[0].description} <img width="30px" src="file:///C:/Users/Gebruiker/Downloads/clouds.svg">`

  })
  .catch(function (error) {
    resultText.textContent = `Something went wrong... ${error}`
    resultText.style.color = 'red'
  })
}
input.onkeydown = function(e){
  if(e.key == 'Enter' ){
    const cityName = document.querySelector('#cityTextInput').value;
    getWeather(cityName);
  }
}
document.querySelector('button').onclick = function(){
  const cityName = document.querySelector('#cityTextInput').value;
  getWeather(cityName);
}
