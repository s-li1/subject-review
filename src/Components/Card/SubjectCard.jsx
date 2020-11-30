import React from 'react'
import './SubjectCard.css';
export default function SubjectCard({subjectsData}) {
    
    return (
        subjectsData().map(subject => {
            return(
                <div className="container">
                    <div className="card">
                        <div className="card-container">
                            <h1 className="card-header">
                                <span>{subject.id}</span>
                                <br/>
                                {subject.name} 
                            </h1>
                            <p className="card-body">
                                {subject.description}
                            </p>
                        </div>
                    </div>
                </div>
            )
        })
    )
}
