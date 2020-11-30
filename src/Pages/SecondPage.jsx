import React, { useState} from 'react'
import SubjectCard from '../Components/Card/SubjectCard';
import Main from '../Components/MainView/Main';
import Pagination from '../Components/Pagination';
import subjects from '../Data/IT.json';

export default function SecondPage() {
    const [loading, setLoading] = useState(false);
    //Page we are on
    const [currentPage, setCurrentPage] = useState(1);
    //How many subjects to be shown  on page
    const [subjectsPerPage] = useState(10);

    //Change Page
    const paginate = (pageNumber)=> setCurrentPage(pageNumber);

    //Get first subject based on the page we're on
    const indexOfLastSubject = currentPage * subjectsPerPage;
    //Get last subject based on the page we're on
    const indexOfFirstSubject = indexOfLastSubject - subjectsPerPage;

    //Constrain posts so that it only gets from the first post to last post
    const currentPageSubjects = subjects.slice(indexOfFirstSubject, indexOfLastSubject);
    

    return (
        <Main>
            <div>
                This is the Second Page!
            </div>
            <div className="subject-container">
                {currentPageSubjects.map((subject) => {
                    return <SubjectCard name={subject.name} id={subject.id} description={subject.description} className="subject-container"/>
                    }    
                )}
            </div>
            <Pagination subjectsPerPage={subjectsPerPage} totalSubjects={subjects.length} paginate={paginate}/>
        </Main>
    )
}
