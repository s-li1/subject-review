import React, { useState} from 'react'
import SubjectCard from '../Components/Card/SubjectCard';
import Main from '../Components/MainView/MainView';
import Pagination from '../Components/Pagination';
export default function SubjectsPage({course}) {
    let subjects = require(`../Data/${course}.json`);
   
    const [currentPage, setCurrentPage] = useState(1);
    const [subjectsPerPage] = useState(10);
    
    const paginate = (pageNumber)=> setCurrentPage(pageNumber);

    const indexOfLastSubjectOnPage = currentPage * subjectsPerPage;

    const indexOfFirstSubjectOnPage = indexOfLastSubjectOnPage - subjectsPerPage;

    const currentPageSubjects = subjects.slice(indexOfFirstSubjectOnPage, indexOfLastSubjectOnPage);
    
    const[input, setInput] = useState("");
    
    const subjectsByFilter = subjects.filter((subject)=> {
        try {
            return subject.name.toString().toLowerCase().match(input.toLowerCase());
        } catch(error) {
            console.log(error);
        }
    });

    const handleSubjectSearch = ()=> {
        if (input.length > 0) {
            return subjectsByFilter;
        } else {
            return currentPageSubjects;
        }
    }
    const handleChange = (e)=> {
        e.preventDefault();
        setInput(e.target.value);
    }

    return (
        <Main input={handleChange}>
            <div className="subject-container">
                <SubjectCard subjectsData={handleSubjectSearch} name={course}/> 
            </div>
            <Pagination subjectsPerPage={subjectsPerPage} totalSubjects={subjects.length} paginate={paginate}/>
           
        </Main>
    )
}