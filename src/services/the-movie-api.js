import axios from "axios";


// URL BASE :https://api.themoviedb.org/3/
// API KEY: 942fdd976bafbf9b9e6f08ec14189285
// LANGUAGE: language=pt-BR


const api = axios.create({

  baseURL: 'https://api.themoviedb.org/3/'

})  


export default api