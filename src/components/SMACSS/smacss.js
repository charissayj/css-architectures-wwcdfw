import React from 'react';
import './smacss.css';

const SMACSSexample = () => {
    return (
        <div className="block-container">
            <div className="block">
                <h3 className="block-header">heading</h3>
                <ul className="block-list">
                    <li className="block-list-item"><a class="block-item-link" href="#">Click me</a></li>
                    <li className="block--list-item"><a class="block-item-link" href="#">Click me</a></li>
                </ul>
            </div>
        </div>
    );
};

export default SMACSSexample;