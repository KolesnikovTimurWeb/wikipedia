import axios from 'axios';
   let date= "2024-06-11"
const instance = axios.create({
   baseURL: `https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=501d70ab741c433b99e394a6d8129295`, // Adjust the base URL as needed
});

export const getPosts = async () => {

   const response = await instance.get();

   return response.data;
};

export const getPostsByDate = async (newDate) => {
    date = newDate
    console.log(date)
   const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=501d70ab741c433b99e394a6d8129295`)
   .catch(err=>{
      return "Error"
   });
   console.log(response.message === 426)
   if(response.status === 426) return 'Too old info'
   return response.data;
};