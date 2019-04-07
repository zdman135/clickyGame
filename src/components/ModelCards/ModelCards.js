import React from 'react';

import './ModelCards.css'


export function ModelWrapper({children}) {
    return(
        <div className="container boxes">{children}</div>
    );
}

export function ModelCards(props) {
    return (        
        <div className="card card-dimensions box-margin">
        <a href="">
            <img className="card-img-top" id={props.id} onClick={props.onClick} src={props.image} alt={props.alt} />
            </a>
        </div>
    );
}

