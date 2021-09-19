import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: "Bearer eqpBOqJwx7i-yj2yiC0zmi5NEpn4_45aDOTcFPSQkCZG1Uxso1LfBVCJQViRE0kklirY5YE9M8YUa9mKfeLRzm98dCxkg8JJszwrM5yE54j9PEDAu5cjNFIgDz-_YHYx"
    }
})