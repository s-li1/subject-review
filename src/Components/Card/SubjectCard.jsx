import React from 'react'
import './SubjectCard.css';
import { Link, Route } from 'react-router-dom';
import Review from '../../Pages/Review';
export default function SubjectCard({subjectsData, name}) {
    return (
        <>
        {subjectsData().map(subject => {
            return(
                <>
                    <div className="container">
                        <div className="card">
                            <div className="card-container">
                                <h1 className="card-header">
                                    {subject.id}
                                    <br/>
                                    {subject.name} 
                                </h1>
                                <p className="card-body">
                                    {subject.description}
                                </p>
                                <Link className="reviewButton" to ={`/${name}/${subject.id}`} >
                                Review
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )
        })}
        <Route path={`/${name}/:subjectId`} exact render={(props) => {
            return <Review {...props}/>
        }} />
        </>
    )
}