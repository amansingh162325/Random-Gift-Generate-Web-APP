
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";


const url = 'https://api.giphy.com/v1/gifs/random?api_key=2pzUSl1CPvP5oJpiIeOnh75FzqgwjKd6';


const useGif = (tag) => {

   
   const [gif, setGif] = useState('');
   const [loading, setLoading] = useState('false');
   
  

   async function fetchData(tag) {
    setLoading(true);
    
    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSourse = data.data.images.downsized_large.url;
    setGif(imageSourse);
    setLoading(false);

   }
   useEffect( () => {
    fetchData('car');
   }, [])

   return {gif, loading, fetchData};
    
}

export default useGif