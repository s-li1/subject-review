import React from 'react'
import './MainLayout.css';
/* eslint-disable */
export default function Pagination({subjectsPerPage, totalSubjects, paginate}) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalSubjects / subjectsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="nav-pagination">
            <ul className="pagination">
                {pageNumbers.map(number=> {
                    return <li key={number}>
                        
                        <a onClick={()=> paginate(number)} href="#" className="page-link">
                            {number}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}
