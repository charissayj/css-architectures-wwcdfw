import React from 'react';
import './oocss.css';

const OocssExample = () => {
    return (
        <div className="media">
            <img className="media__image" src="https://cdn3-www.dogtime.com/assets/uploads/2016/09/rottweiler-puppy-1-e1553630142158.jpg" />
            <div className="media__video">
                <iframe width="600" height="400" src="https://www.youtube.com/embed/9o8qf7anq0g" frameborder="0" />
            </div>
        </div>
    );
};

export default OocssExample;
