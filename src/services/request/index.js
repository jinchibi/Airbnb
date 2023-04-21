import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class JCRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
        this.instance.interceptors.response.use((res) => {
            return res.data
        }, err => {
            return err
        })
    } 
    request(config) {
        return this.instance.request(config)
    }
    get(config) {
        return this.request({ ...config, method: "get" })
    }
    post(config) {
        return this.request({ ...config, method: "post" })
    }
}
const jcRequest = new JCRequest(BASE_URL, TIMEOUT)
export default jcRequest