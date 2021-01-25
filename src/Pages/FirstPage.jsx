import React from 'react'
import Main from '../Components/MainView/MainView';

export default function FirstPage() {
    return (
        <Main>
             <div>
                <br/>
                Welcome to UTS Subject Reviews! This is a place where you can find student reviews for subjects from the following course areas:
                <ul>
                    <li>
                        Information Technology
                    </li>
                    <li>
                        Business
                    </li>
                    <li>
                        Engineering
                    </li>
                </ul>
                Click on the side bar to get started! See what others have written and share your own experience! 
                <br/>
                If there are any courses you'd like to see added or if you have any feedback please reach out to steven.j.li@student.uts.edu.au.
            </div>
        </Main>
    )
}
