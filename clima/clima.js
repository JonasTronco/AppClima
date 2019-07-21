const axios = require('axios');

const climaActual = async (lat, lng) => {

    let climaRespuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&cnt=10&units=metric&appid=da35dd18ea1b0fa5cbe861762a6f37be`)


    if (climaRespuesta.data.cod === "400") {
        throw new Error(`Paramentros no encontrados ${lat} - ${lng}`)
    }

    return climaRespuesta.data.main.temp

     
}

module.exports = {
    climaActual
}