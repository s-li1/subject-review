import React from 'react'
import Main from '../Components/MainView/Main';

export default function FirstPage({match}) {
    console.log(match);
    return (
        <Main>
            <div>
                This is the First Page!
            </div>
        </Main>
    )
}
