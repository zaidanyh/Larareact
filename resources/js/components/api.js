import axios from 'axios';

const BASE_API_URL = 'http://localhost:8000/api'

export default {
    getAllData: () => axios.get(`${BASE_API_URL}/notes`),
    getOneData: (id) => axios.get(`${BASE_API_URL}/notes/${id}/edit`),
    addNote: (note) => axios.post(`${BASE_API_URL}/notes`, note),
    updateNote: (note, id) => axios.put(`${BASE_API_URL}/notes/${id}`, note),
    deleteNote: (id) => axios.delete(`${BASE_API_URL}/notes/${id}`)
}
