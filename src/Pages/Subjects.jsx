import React, { useState} from 'react'
import SubjectCard from '../Components/Card/SubjectCard';
import Main from '../Components/MainView/Main';
import Pagination from '../Components/Pagination';
import subjects from '../Data/IT.json';

export default function SecondPage() {
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

    
    const[input, setInput] = useState("");
    
    // Filters Subjects based by name
    const filteredSearch = subjects.filter((subject)=> {
        return subject.name.toString().toLowerCase().match(input.toLowerCase());
    });

    // Function that checks if there's any input in search bar, if there isn't then return currentPage to display otherwise get filterSearch and display filtered results
    const handleSubjectSearch = ()=> {
        if (input.length > 0) {
            return filteredSearch;
        } else {
            return currentPageSubjects;
        }
    }

    //Essentially allows us to type our results into search bar which is placed in the main component
    const handleChange = (e)=> {
        e.preventDefault();
        setInput(e.target.value);
    }


    return (
        <Main input={handleChange}>
            <div className="subject-container">
                <SubjectCard subjectsData={handleSubjectSearch}/> 
            </div>
            <Pagination subjectsPerPage={subjectsPerPage} totalSubjects={subjects.length} paginate={paginate}/>
           
        </Main>
    )
}
