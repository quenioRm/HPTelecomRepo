import axios from "axios";

const Api = axios.create({
    baseURL: "https://localhost:7001/",
});

export default Api;