import React from 'react'
import PropTypes from 'prop-types';

export default function Gamecard(props){
    return(
        <>
        <div className="game-card-style">
            <img className="img-game" src= {props.image}  alt="Forza Horizon 5"/>
            <h3 className="title-game">{props.title}</h3>
            <p className="description-game">{props.description}</p>
           <button type="button" className="game-card-button">Ver mais</button>
        </div>
        </>
    )
}