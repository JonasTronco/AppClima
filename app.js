
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la cuidad para tener el Clima',
        demand: true
    }
}).argv;

const { localizacion } = require('./datos/localizacion')
const { climaActual } = require('./clima/clima')


let getClima = async (direccion) =>{

    try {
        let coordenadas = await localizacion(direccion)
        let clima = await climaActual(coordenadas.lat,coordenadas.lng)

        return `La temperatura en ${direccion} es ${clima} °C`
        
    } catch (error) {
        return `La temperatura no se puede determinar por un ${error}`
    }

}


getClima(argv.direccion)
    .then(respuesta => console.log(respuesta))
    .catch(e => console.log(e))