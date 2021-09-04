const Api_key = `1f60a876e23d23e648516c7076382565`;

const searchTemperature = async () => {
  const city = document.getElementById("search-city");
  const cityName = city.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${Api_key}&units=metric`;
  // console.log(url)
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  displayTemperature(data);
};
const setinnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemperature = (temperature) => {
  setinnerText("city", temperature.name);
  setinnerText('temp',temperature.main.temp);
  setinnerText('condition',temperature.weather[0].main)
  const url=` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgicon=document.getElementById('weather-icon');
  imgicon.setAttribute('src',url);
};
