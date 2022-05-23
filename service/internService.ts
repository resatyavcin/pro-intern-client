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


export const createSignature = async (path: string) => {
    const token = localStorage.getItem('token')

    try {
        const response = await axios.post(SERVER_BASE_URL + '/intern/create-signature', {path: path} ,{
            headers: {
                Authorization: 'Bearer '+ token                                                                                                                                                                                                          
            }
        },);


        return response.data;
    } catch (err: any) {
        return err.response
    }
}


export const signatureFileService = async (fileID: string, internID:string, page:number) => {
    const token = localStorage.getItem('token')

    try {
        const response = await axios.post(SERVER_BASE_URL + '/intern/sign-file', {fileID, internID, page} ,{
            headers: {
                Authorization: 'Bearer '+ token                                                                                                                                                                                                          
            }
        });


        return response.data;
    } catch (err: any) {
        return err.response
    }
}


export const commitSignatureToFileService = async (fileID: string, internID:string, page:number) => {
    const token = localStorage.getItem('token')

    try {
        const response = await axios.post(SERVER_BASE_URL + '/intern/commit-signature', {fileID, internID, page} ,{
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

