import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/api",
    timeout: 2500,
    headers: {
        "Content-Type": "application/json"
    }
});