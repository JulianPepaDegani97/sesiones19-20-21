import axios from "axios";
import APIRequest from "../utils/config/axios.config";

export const getRandomUser = () => {
    /*return APIRequest.get('/', {
        validateStatus: (status) => {
            return status < 500;
        }
    });*/
    return axios.get('https://randomuser.me/api/');
    //APIRequest.post('/login', body)
}

export const getJoke = async() => {
    return await axios.get('https://api.chucknorris.io/jokes/random');
}