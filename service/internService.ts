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


export const applicationInternService = async (companyName: string, startDate: Date, endDate: Date) => {
    const token = localStorage.getItem('token')

    try {
        const response = await axios.get(SERVER_BASE_URL + '/intern/application', {
            headers: {
                Authorization: 'Bearer '+ token                                                                                                                                                                                                          
            }
        });

        return response.data;
    } catch (err: any) {
        return err.response
    }
}