const apikey = "df8db8955654edcf686106ea612384e6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=mumbai";

async function weather(){
    const response = await fetch(apiurl + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data)
}
weather()