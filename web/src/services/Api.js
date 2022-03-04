import axios from "axios";

const Api = axios.create({
    baseURL: "http://45.168.116.101/",
});

export default Api;