import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    const searchApi = async (searchTerm)=>{
        try{
            const response = await yelp.get("/search",{
            params:{
                limit:50,
                term:searchTerm,
                location: "san jose"
            }
            })
        setResults(response.data.businesses) //FINAL
        }catch(e){
            setErrorMessage("Something went wrong.")
     }
    }

    useEffect(()=>{ //ilk açılışta bir kez çalışır.
        searchApi("sushi and pizza")
    },[])
    return [searchApi,results,errorMessage]
}