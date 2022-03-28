import axios from 'axios'

export const SERVER_BASE_URL = 'http://localhost:8080/api';

interface User {
    email: string;
    password: string;
    phone: string;
}

type A = Omit<User, "phone">


export const registerService = async (form: User) => {
    try {
        const response = await axios.post(SERVER_BASE_URL + '/auth/register', { ...form });
        return response.data;
    } catch (err: any) {
        return err.response
    }
}


export const loginService = async (form: A) => {
    try {
        const response = await axios.post(SERVER_BASE_URL + '/auth/login', { ...form });
        return response.data;
    } catch (err: any) {
        return err.response
    }
}

export const activateAccountService = async (token: string) => {
    try {
        const response = await axios.patch(SERVER_BASE_URL + '/auth/activate', null, {
            params: {
                token: token
            }
        });
        console.log(response)
        return response.data;
    } catch (err: any) {
        return err.response
    }
}
