import React,{ useState,useEffect } from "react"
import {View , Text , StyleSheet,FlatList,Image} from "react-native"
import yelp from "../api/yelp"

const ResultsShowScreen = ({navigation}) =>{
    const [result, setResult] = useState(null) // null bcs we will get an object
    const id = navigation.getParam("id")

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`) //response comes as an object
        setResult(response.data)   // we have to take its data. needs rerender
    }
    useEffect(()=>{
        getResult(id)  // fonksiyonu ilk kez burada çalıştırıyoruz, bir kez çalışması için effect kullandık fakat fonk. içinde state yapısı kullanıldı.
    },[])

    if(!result){
        return null
    }


    return <>
        <Text style={{color:"#0f7c90"}}>2. Screen , Business id: {id}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={(photo)=>photo} // ??
        renderItem={({item})=>{
            return <Image style={styles.image} source={{uri:item}}/>
        }}
        />
    </>
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300,
        borderRadius:4,
        marginBottom:5
    }


}) 

export default ResultsShowScreen

//screen açıldığında nav.dan id paramı alınacak ve effect yapısı sayesinde async getResult fonksiyonu bir kez çalışarak api'dan gerekli data'yı çekecek.
//getResult içinde state yapısı kullanıldı çünkü bir api'dan async olarak data çekiliyor. 
//ders 120'yi izle bir daha anlamak istiyorsan.