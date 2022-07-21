import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers.js"
import PhotoList from "../PhotoList/index.js";

const Gallery = (props) => {

    const {currentCategory} = props;

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category = {currentCategory.name} />
        </section>
    );
}

export default Gallery;