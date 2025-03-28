import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';

export default function Error() {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className='Error-page my-5'>
                <h3>Page Not Found</h3>
                <p>It happens! Let’s get you back on track.</p>
            </div>
            <div className="back-to-homepage">
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </React.Fragment>
    );
}