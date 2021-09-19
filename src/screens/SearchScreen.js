import React, {useState} from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import SearchBar from "../components/SearchBar"
import useResults from "../hooks/useResults"
import ResultsList from "../components/ResultsList"

const SearchScreen = ()=>{
    const [term,setTerm] = useState("") // onchangetext > onnewtermchange > setterm > term
    const [searchApi,results,errorMessage] = useResults()

    const filterResultsByPrice = (price)=>{

        return results.filter(result =>{
            return result.price === price //nice.
        })
    }

    return (
    <>
        <SearchBar
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {/* <Text style={{marginLeft:15, color:"#0f7c90"}}>We have found {results.length} results.</Text> */}
        <ScrollView>
            <ResultsList results={filterResultsByPrice("$")} title="Cost Effective"/>
            <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
            <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender"/> 
        </ScrollView>

    </>
    )    
}

const styles = StyleSheet.create({

})

export default SearchScreen

// ₺