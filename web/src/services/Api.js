import axios from "axios";

const Api = axios.create({
    baseURL: "https://api.hptelecom.com.br/",
});

export default Api;