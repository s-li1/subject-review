import React from 'react'
import SubjectCard from '../Components/Card/SubjectCard';
import Main from '../Components/MainView/Main';
import subjects from '../Data/engineering.json';

export default function SecondPage() {

    return (
        <Main>
            <div>
                This is the Second Page!
            </div>
            {subjects.map((subject) => {
                 return <SubjectCard name={subject.name} description={subject.description}/>
            }    
            )}
        </Main>
    )
}
