import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = (props) => {

    const {
        categories = [],
        currentCategory,
        setCurrentCategory,
        contactSelected,
        setContactSelected,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/" data-testid="link">
                    <span role="img" aria-label="camera" >📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    { /* About page */}
                    <li className="mx-2">
                        <a href="#about" data-testid="about" onClick={() => setContactSelected(false)}>About me</a>
                    </li>
                    { /* Contact page */}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact me</span>
                    </li>
                    { /* List the rest of the Categories */}
                    {
                        categories.map((category) => (
                            <li className={`mx-2  ${currentCategory.name === category.name && !contactSelected && "navActive"}`} key={category.name}>
                                <span onClick={() => {
                                    setCurrentCategory(category);
                                    setContactSelected(false);
                                }}>
                                    {capitalizeFirstLetter(category.name)}
                                </span>
                            </li>
                        )
                        )
                    }
                </ul>
            </nav>

        </header>
    );
}

export default Nav;