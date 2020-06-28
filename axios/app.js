
// Make a request for a user with a given ID
const getWeather = (cityName) => {
  const h1 = document.querySelector('h1')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},nl&appid=d60ebbc71990a2bf77fc7e5be1e6bb92&units=metric`
  axios.get(url)
  .then(function (response) {
    h1.textContent = `Today's temparature in ${cityName} is ${Math.floor(response.data.main.temp)}°C. ` ;
    h1.style.color = 'black'
    const weatherDescription = document.querySelector('h2');
    weatherDescription.innerHTML = `${response.data.weather[0].description} <img width="30px" src="file:///C:/Users/Gebruiker/Downloads/clouds.svg">`
  })
  .catch(function (error) {
    h1.textContent = `Something went wrong... ${error}`
    h1.style.color = 'red'
  })
}
document.querySelector('input').onkeydown = function(e){
  if(e.key == 'Enter' ){
    const cityName = document.querySelector('#cityTextInput').value;
    getWeather(cityName);
  }

}

document.querySelector('button').onclick = function(){
  const cityName = document.querySelector('#cityTextInput').value;
  getWeather(cityName);
  

}
