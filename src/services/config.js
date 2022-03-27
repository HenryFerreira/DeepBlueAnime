//----------------------------------------------//
//Imports
import axios from "axios";
//----------------------------------------------//

//----------------------------------------------//
//Instancia de la API
const instance = axios.create({
    baseURL: 'https://api.jikan.moe/v3'//URL de la API
});
//----------------------------------------------//

//----------------------------------------------//
//Exports
export default instance;
//----------------------------------------------//