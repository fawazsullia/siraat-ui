import axios from "axios";
import { GlobalConfig } from "../GlobalConfig";

export const axiosInstance = axios.create(
    {
        baseURL: GlobalConfig.baseUrl + "/api",
        timeout: 1000,
    }
)