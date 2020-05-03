import React from 'react';
import './App.css';
import BemExample from './BEM/Bem';
import SMACSSexample from './SMACSS/smacss';
import OocssExample from './OOCSS/oocss';

function App() {
  return (
    <div className="App">
        <p>
          CSS Architectures
        </p>
        {/* <BemExample /> */}
        <SMACSSexample />
        {/* <OocssExample /> */}
    </div>
  );
}

export default App;
