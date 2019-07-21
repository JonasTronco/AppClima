const axios = require('axios');

const localizacion = async direccionInicial => {


    let DireccionEncodeURI = encodeURI(direccionInicial)
    let DireccionRespuesta =  await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${DireccionEncodeURI}&key=AIzaSyBklO7W7i8uCg94A8CuBgtxT6JTiP_ykwU`)
    
    if (DireccionRespuesta.data.status === 'ZERO_RESULTS') {
        throw new Error (`No se ha encontrado ${DireccionEncodeURI}`);
    }

    if (DireccionRespuesta.data.status === 'OVER_QUERY_LIMIT') {
        throw new Error (`Falla con la API, Limite alcanzado`);
    }
    

    let location = DireccionRespuesta.data.results[0];
    let coors = location.geometry.location

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    localizacion
}

