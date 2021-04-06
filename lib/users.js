import axios from 'axios'
import {BASE_URL, APP_ID} from './constants'

export const getAllUsers = async () => {
  const users = await axios.get(`${BASE_URL}/readdata`, { headers: { 'app-id': APP_ID } })
  .then(({data}) => {
    return data
  })
  return users
}

export const getAllIds = async () => {
  const users = await axios.get(`${BASE_URL}/readdata`)
  .then(({data}) => {
    debugger;
    return data
  })
  return users.map(user => {
    return {
      params: {
        id: user._id
      }
    }
  })
}

export const getUserDataById = async (id) => {
  const userData = await axios.get(`${BASE_URL}/readdata/${id}`)
  .then(({data}) => {
    console.log("testing obj data id");
  console.log(data);
    return data
  })
  return userData
}