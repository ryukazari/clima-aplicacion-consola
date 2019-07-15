const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=fef0ca7343df5f16863af68ba73842b8&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}