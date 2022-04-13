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
