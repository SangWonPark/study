import axios from "axios";
import _ from "lodash";

const rest = axios.create({
    // header 설정
    headers: {
    }
})

rest.interceptors.request.use(
    (request) => {
        return request;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

rest.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: any) => {
        return Promise.reject(error)
    }
)

export default rest;