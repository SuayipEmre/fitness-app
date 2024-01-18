
import axios from 'axios'


const apiCall = async(url) => {
  console.log(url);
    try {
        const options = {
            method : 'GET',
            url,
            headers : {
                'X-RapidAPI-Key': process.env.EXPO_PUBLIC_API_KEY ,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',

            }
        }

        const {data} = await axios.request(options)
        return data
    } catch (error) {
        console.log('err' , error)
    }
}


export const fetchExcersisesByBodyPart = async (bodyPart) => {
  let data = await apiCall(`${ process.env.EXPO_PUBLIC_API_BASE_URL  }/exercises/bodyPart/${bodyPart}`)
  return data
}