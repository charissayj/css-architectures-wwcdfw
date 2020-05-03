import React from 'react';
import './Bem.css';

const BemExample = () => {
    return (
        <div>
            <button className="btn btn__text">Standard button</button>

            <button className="btn btn--orange btn--big btn__text">Big Orange Button</button>

            <button className="btn btn--blue btn--big btn__text">Big Blue Button</button>

            <button className="btn btn--green btn--big btn__text">Big Green Button</button>
        </div>
    );
};

export default BemExample;
