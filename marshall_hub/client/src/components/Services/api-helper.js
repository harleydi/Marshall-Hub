import axios from 'axios'

const baseUrl = 'http://localhost:3000'

const api = axios.create({
    baseURL: baseUrl
})

export const loginUser = async (loginData) => {
    const response = await api.post('/auth/login', loginData)
    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('id', response.data.user.id);
    console.log(response.data)
    api.defaults.headers.common.authourization = `Bearer ${response.data.token}`
    return response.data.user
}

export const registerUser = async (registerData) => {
    const response = await api.post('/users/', { user: registerData })
    localStorage.setItem('authToken', response.data.token);
    localStorage.setItem('id', response.data.user.id);
    api.defaults.headers.common.authourization = `Bearer ${response.data.token}`
    return response.data.user
}

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const response = await api.get('/auth/verify');
      return response.data
    }
    return false
}

const createUser = async (data) => {
    const response = await api.post('/users', { user: data })
    return response.data
}

const readAllUsers = async () => {
    const response = await api.get('/users')
    return response.data
}
  
const updateUser = async (id, data) => {
    const response = await api.put(`/users/${id}`, { teacher: data })
    return response.data
}
  
const destroyUser = async (id) => {
    const response = await api.delete(`/users/${id}`)
    return response.data
}

const readCase = async (id) => {
    const response = await api.get(`/cases/${id}`)
    return response.data
}

const readUser = async (id) => {
    const response = await api.get(`/users/${id}`)
    return response.data
}

const createCase = async (data) => {
    const response = await api.post('/cases',  data)
    return response.data
}

const editCase = async (data, id) => {
    const response = await api.put(`/cases/${id}`,  data)
    return response.data
}

const destroyCase = async (id) => {
    const response = await api.delete(`/cases/${id}`)
    return response.data
}

export {
    createUser,
    readAllUsers,
    updateUser,
    destroyUser,
    readCase,
    readUser,
    createCase,
    editCase,
    destroyCase
}