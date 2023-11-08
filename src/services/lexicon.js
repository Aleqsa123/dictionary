import axios from 'axios';
const baseUrl = 'http://localhost:3003/api/lexicon';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
  
const addWord = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deleteWord = id =>axios.delete(baseUrl + `/${id}`)

const updateWord = (newObject, id) => {
    const request = axios.put(baseUrl + `/${id}`, newObject)
    return request.then(response => response.data)
}

export default { getAll, addWord, deleteWord, updateWord };