import React from 'react';

const Banner2 = () => {
    return (
        <div className='text-center mt-8'>
            <h2 className='text-3xl font-bold'>Our Service Step</h2>
            <ul className="steps steps-vertical">
                <li className="step step-primary">Register</li>
                <li className="step step-primary">Choose plan</li>
                <li className="step">Purchase</li>
                <li className="step">Receive Product</li>
            </ul>
        </div>
    );
};

export default Banner2;