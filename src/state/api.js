import axios from 'axios';
   let date= "2024-06-11"


export const getPosts = async () => {

   const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=501d70ab741c433b99e394a6d8129295`);

   return response.data;
};

export const getPostsByDate = async (newDate) => {
    date = newDate
   const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${date}&sortBy=publishedAt&apiKey=501d70ab741c433b99e394a6d8129295`)
   .catch(err=>{
      return "undefined"
   });
   if(response.status === 426) return 'Too old info'
   return response.data;
};