import React, {Component} from "react";
import data from '../Data/api.json'
import Categories from "../Categories/components/Categories";

class Home extends Component {
    render() {
        return(
            <Categories data={data}/>
        );
    }
}

export default Home;