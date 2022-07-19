import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers.js"
import photo from "../../assets/small/commercial/0.jpg";

const Gallery = (props ) => {

    const {currentCategory} = props;

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div  className="flex-row">
                <img src={photo} alt={currentCategory.description} className="img-thumbnail mx-1"/>
            </div>
        </section>
    );
}

export default Gallery;