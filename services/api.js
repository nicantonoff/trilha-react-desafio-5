require('dotenv').config();
import axios from 'axios';

export const api  = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        apikey: process.env.API_KEY,
        authorization: `Bearer ${process.env.API_KEY}`,
    }
})