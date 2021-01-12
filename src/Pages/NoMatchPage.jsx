import React from 'react';
import Main from '../Components/MainView/MainView';
import { useHistory } from 'react-router-dom';
export default function NoMatchPage() {

    const history = useHistory();
    return (
        <Main>
            <div className="error-container">
                <div className="error"><span>4</span>0<span>4</span></div>
                <h1>Ooops!!</h1>
                <p>THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE</p>
                <button className="blue button" onClick={()=> history.push('/')}>Go Back Home</button>
            </div>
        </Main>
    )
}
