const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);
    console.log(encodedUrl);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 10000,
        headers: {
            'X-RapidAPI-Key': '48ee851511mshd41ee771878e49bp1bb852jsn1eb59a47f1af'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;
    return {
        direccion,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLng
}