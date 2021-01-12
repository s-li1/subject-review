import React from 'react';
import './MainLayout.css';
export default function Contents(props) {
    return (
       <div className= {props.open ? "main isPushed" : "main"}>
           {props.children}
       </div>
    )
}
