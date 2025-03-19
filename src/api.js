import axios from "axios";

const searchImages = async(term) =>{

   const response =  await axios.get ('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID 4YegVf5eSQUAPnC2ZBctSD3G2SvUa6cb3iTEeUleYco'
        },
        params:{
            query: term,
        },
    });
    //console.log(response.data.results);
    return response.data.results;
}

export default searchImages;