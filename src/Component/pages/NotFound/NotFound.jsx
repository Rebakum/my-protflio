import React from 'react';
import { Rotate } from 'react-reveal';
import { Link } from 'react-router-dom';
import error from '../../../assets/images/error.png';

const NotFound = () => {
    return (
        <Rotate>
            <div className='flex flex-col items-center justify-center h-[500px] relative'>
                <Link to='/'>
                    <button className='absolute top-0 text-red-500 left-100'>Go Back to Home</button>

                    <img className='z-10' src={error} alt="" />
                </Link>

            </div>
        </Rotate>

    );
};

export default NotFound;