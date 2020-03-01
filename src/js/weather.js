function useLocation(position) {

  // var url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b2f47ed414856afb38b851ebbc23ef19&units=metric`;
  var url = `/.netlify/functions/weatherapi?lat=${position.coords.latitude}&lon=${position.coords.longitude}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector('#city').textContent = data.name;
      document.querySelector('#temp').textContent = data.main.temp;
      document.querySelector('#main').textContent = data.weather[0].main;
      document.querySelector('#desc').textContent = data.weather[0].description;

      document.querySelector('#weather').classList.remove("hidden");
      console.log(data);
    });

}

function noLocation(error) {
  console.log('error :', error);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(useLocation, noLocation);
}


