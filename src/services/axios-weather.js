import axios from "axios";

const service = axios.create({
    baseURL:"https://api.seniverse.com/v3",
    timeout:5000,
})

service.interceptors.response.use(response=>{
    return response.data;
},error => {
    console.log(error.response.status);
    return Promise.reject(error);
})

//封装常用的方法
const api =  {
    get(url, params) {
        return service.get(url, {params});
    },
    post(url, data) {
        return service.post(url, data);
    },
    put(url, data) {
        return service.put(url, data);
    },
    delete(url) {
        return service.delete(url);
    }
};

export default api