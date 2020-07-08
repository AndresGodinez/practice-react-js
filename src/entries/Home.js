import React from "react";
import data from '../Data/api.json'
import Categories from "../Categories/Categories";

function Home(){
    return(
        <Categories data={data}/>
    );
}

export default Home;