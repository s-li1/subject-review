import React from 'react'
import './SubjectCard.css';
export default function SubjectCard({name, id, description}) {
    
    return (
        <div className="container">
            <div className="card">
                <div className="card-container">
                    <h1 className="card-header">
                        <span>{id}</span>
                        <br/>
                        {name} 
                    </h1>
                    <p className="card-body">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
