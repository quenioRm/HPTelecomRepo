import axios from "axios";

const ApiGoogle = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/place/details",
});

// ApiGoogle.defaults.headers.get["Content-Type"] ='application/json;charset=utf-8';
// ApiGoogle.defaults.headers.get["Access-Control-Allow-Origin"] ='*';

// ApiGoogle.interceptors.request.use(async config => {
//     config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
//     config.headers['Access-Control-Allow-Credentials'] = true;
//     config.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
//     config.headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept';
    
//     // config.headers['Content-Type'] = 'application/json';
//     // config.headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36';
//     // config.headers['accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9';
    
    
//     return config;
// });

export default ApiGoogle;