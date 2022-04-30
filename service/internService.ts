import axios from "axios";

import { SERVER_BASE_URL } from "./authService";

export const fetchAllInterns = async () => {
    const token = localStorage.getItem('token')

    try {
        const response = await axios.get(SERVER_BASE_URL + '/intern/fetch-all-interns', {
            headers: {
                Authorization: 'Bearer '+ token                                                                                                                                                                                                          
            }
        });
        return response.data;
    } catch (err: any) {
        return err.response
    }
}

export const applicationInternService = async (form: any) => {
    const token = localStorage.getItem('token')

    try {
        const response = await axios.post(SERVER_BASE_URL + '/intern/application', {...form} ,{
            headers: {
                Authorization: 'Bearer '+ token                                                                                                                                                                                                          
            }
        });


        return response.data;
    } catch (err: any) {
        return err.response
    }
}


export const createSignatureFileByStudentService = async (path: string) => {
    const token = localStorage.getItem('token')

    try {
        const response = await axios.post(SERVER_BASE_URL + '/intern/create-signature-file', { path: path } ,{
            headers: {
                Authorization: 'Bearer '+ token                                                                                                                                                                                                          
            }
        });


        return response.data;
    } catch (err: any) {
        return err.response
    }
}


export const signatureByStudentService = async () => {
    const token = localStorage.getItem('token')

    try {
        const response = await axios.post(SERVER_BASE_URL + '/intern/signature/student', {} ,{
            headers: {
                Authorization: 'Bearer '+ token                                                                                                                                                                                                          
            }
        });


        return response.data;
    } catch (err: any) {
        return err.response
    }
}


export const fetchInternService = async (intern_id: string | string[]| undefined) => {
    const token = localStorage.getItem('token')

    try {
        const response = await axios.get(SERVER_BASE_URL + '/intern/fetch-intern/' + intern_id ,{
            headers: {
                Authorization: 'Bearer '+ token                                                                                                                                                                                                          
            }
        });

        return response.data;
    } catch (err: any) {
        return err.response
    }
}

