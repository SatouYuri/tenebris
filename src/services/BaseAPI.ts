import axios from "axios";

const url = "http://localhost:3054";

const BaseAPI = axios.create({
    baseURL: url,
});

export default BaseAPI;