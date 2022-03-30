import { BASE_URL } from "../utils/const"

export const USER_TYPE = "/users"
export const AUTH_TYPE = "/saml/getUser"

const API_ENDPOINT = "/api"
const API_VERSION = "/v6a"

export const getURl = (type)=>{

    var url = BASE_URL+API_ENDPOINT+API_VERSION

    switch(type){
        case USER_TYPE:
            return url+USER_TYPE;
        case AUTH_TYPE:
            return url+AUTH_TYPE;
    }
    
}

export const getQuery =(json)=>{
    
    var extraUrl = Object.keys(json).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(json[k])
    }).join('&')

    console.log(extraUrl);
  return extraUrl;

}