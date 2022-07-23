import React from 'react';

const Modal = (props) => {
    const {name, category, description, index} = props.currentPhoto;
    const onClose = props.onClose;
    console.log(`../../assets/large/${category}/${index}.jpg`);

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img
                    alt={name} 
                    src={require(`../../assets/large/${category}/${index}.jpg`)}
                />
                <p>{description}</p>
                <button type="button" onClick={() => onClose()}>
                    Close
                </button>
            </div>  
        </div>
    );
}

export default Modal;
