import React from "react";
import Category from "./Category";

function Categories(props) {
    return (
        <div>
            {
                props.data.categories.map((category)=> {
                    return <Category {...category} key={category.id} />
            })
            }
        </div>
    )

}

export default Categories;