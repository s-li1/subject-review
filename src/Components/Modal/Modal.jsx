import React from 'react';
import './Modal.css';
export default function Modal(props) {
    return (
        <div>
            <div className={ props.show ? "rules-modal active" : "rules-modal" } id="rules-modal">
                <div className="modal-header">
                    <div className="title">
                        Example Modal
                    </div>
                    <button className="modal-close" onClick={props.close}>
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo sint maxime fuga dolor illum? Vel et earum harum in eveniet, odio, aperiam accusamus maiores illo laborum, ipsum obcaecati magnam hic.
                </div>
            </div>
        </div>
    )
}
