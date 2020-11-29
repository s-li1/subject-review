import React from 'react'
import './SubjectCard.css';
export default function SubjectCard(props) {
    
    return (
        <div className="container">
            <div className="card">
                <div className="card-container">
                    <h1 className="card-header">
                        {props.name}
                    </h1>
                    <p className="card-body">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
