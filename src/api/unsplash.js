import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e02654c5e77bd7b37bb0dc004ee1e6ac6dbf32c6773adffe77bf78c2c0a5a239'
    }
});