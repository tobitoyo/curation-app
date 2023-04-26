import axios from 'axios';
const baseUrl = 'http://localhost:3002/users';

const read = () => {
  return axios.get(baseUrl)
}

const create = newUser => {
  return axios.post(baseUrl, newUser)
}

const update = (id, updatedUser) => {
  return axios.put(`${baseUrl}/${id}`, updatedUser)
}

export default { read, create, update}