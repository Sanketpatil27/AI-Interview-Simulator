import axios from "axios"

// 2.21.30

export const getToken = async () => {
    const result = await axios.get('/api/getToken');
    return result.data;
}