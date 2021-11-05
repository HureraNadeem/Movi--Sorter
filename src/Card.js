import React from 'react'
import "./Card.css"


export default function Card(props) {
    return (
        <>
            <div className="card">
                <img src={props.linksrc} alt="Avatar" />
                    <div className="container">
                        <h4><b>{props.name}</b></h4>
                        <p>{props.year}</p>
                    </div>
            </div>
        </>
    );
}
