import React from 'react';
import './Modal.css';
export default function Modal(props) {
    return (
        <div>
            <div className={ props.show ? "rules-modal active" : "rules-modal" } id="rules-modal">
                <div className="modal-header">
                    <div className="title">
                        General Guidelines
                    </div>
                    <button className="modal-close" onClick={props.close}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                   Writing a review should be informative and helpful to students interested in the subject at hand.
                   <br/>
                   <br/>
                   Share your experiences and opinions in regards to a particular subject! We understand that students won't always agree but we expect that everyone using this platform treats one another with respect.
                   <ul>
                       <li><strong>Personal Experience: </strong> Share your firsthand experience, not what you have heard from someone else. </li>
                       <li><strong>Accuracy: </strong>Feel free to express your opinions but refrain from making any exaggerations that might misrepresent your experience. </li>
                       <li><strong>Inappropriate content: </strong>There are no exceptions for harassment, threats or hate speech. Please refrain from colorful language where possible.</li>
                       <li><strong>Relevance: </strong> Ensure that comments are appropriate and relevant to the specific subject. This is not a place for rants about any matter that doesn't relate to the student experience.  </li>
                   </ul>
                </div>
            </div>
        </div>
    )
}
