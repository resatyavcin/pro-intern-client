import axios from 'axios'
import { Student } from '../common/models/User/Student';

export const SERVER_BASE_URL = 'http://localhost:8080/api';


export const registerService = async (form: Student) => {
    try {
        const response = await axios.post(SERVER_BASE_URL + '/auth/register', { ...form, role: 'STUDENT' });
        return response.data;
    } catch (err: any) {
        return err.response
    }
}

export const loginService = async (form: Pick<Student, "email" | "password">) => {
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
