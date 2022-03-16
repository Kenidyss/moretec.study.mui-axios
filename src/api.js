import axios from "axios";

export const endPoint = {
    createUsers: "/users",

}

const baseURLEnd = "/api/v1/"

const api = axios.create({
      baseURL: "https://623251a4961530db4aa34217.mockapi.io"+baseURLEnd //MockAPI
});


export default api;
