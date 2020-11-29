import React, { useState} from 'react'
import SubjectCard from '../Components/Card/SubjectCard';
import Main from '../Components/MainView/Main';
import Pagination from '../Components/Pagination';
import subjects from '../Data/engineering.json';

export default function SecondPage() {
    const [loading, setLoading] = useState(false);
    //Page we are on
    const [currentPage, setCurrentPage] = useState(1);
    //How many subjects to be shown  on page
    const [subjectsPerPage] = useState(10);

    //Change Page
    const paginate = (pageNumber)=> setCurrentPage(pageNumber);

    //Get current posts
    const indexOfLastSubject = currentPage * subjectsPerPage;
    const indexOfFirstSubject = indexOfLastSubject - subjectsPerPage;

    //Filter posts so that it only gets from the first post to last post
    const currentPageSubjects = subjects.slice(indexOfFirstSubject, indexOfLastSubject);
    return (
        <Main>
            <div>
                This is the Second Page!
            </div>
            {currentPageSubjects.map((subject) => {
                 return <SubjectCard name={subject.name} description={subject.description}/>
                }    
            )}
            <Pagination subjectsPerPage={subjectsPerPage} totalSubjects={subjects.length} paginate={paginate}/>
        </Main>
    )
}
