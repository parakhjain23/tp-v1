import defaultAxios from 'axios'
const axios = defaultAxios.create()

// request interceptor
axios.interceptors.request.use(
    async (config) => {
        config.headers['proxy_auth_token'] = localStorage.getItem('proxy_auth_token')
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)


// response interceptor
axios.interceptors.response.use(
    (response) => {
        return response
    },
    async function (error) {
        if (error?.response?.status === 401) {
            const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || ""
            localStorage.clear()
            let redirectUrl = new URL(baseUrl)
            redirectUrl.searchParams.append('error', 'session expired')
            window.location.href = redirectUrl.href
        }
        return Promise.reject(error)
    }
)

export default axios
