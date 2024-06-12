import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://newsapi.org/v2/everything?q=tesla&from=2024-06-11&sortBy=publishedAt&apiKey=501d70ab741c433b99e394a6d8129295', // Adjust the base URL as needed
});

export const getPosts = async () => {
   const response = await instance.get();

   return response.data;
};
