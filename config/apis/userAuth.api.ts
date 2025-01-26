import axios from "./interceptor"

const URL = process.env.REACT_APP_API_BASE_URL

const getOrCreateUserApi = async (data: { email: string }) => {
    try {
        const User = await axios.post(`${URL}/authenticate`, {
            "email": "rudrakshkachhawa@gmail.com",
            "firstName": "Rudra",
            "lastName": "kachhawa"
        })
        return User
    } catch (error) {
        throw error
    }
}

export {
    getOrCreateUserApi
}

