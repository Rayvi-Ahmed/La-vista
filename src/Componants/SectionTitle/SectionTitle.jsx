import React from 'react';

export const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='w-4/12 mx-auto text-center my-5 '>
            <p className='text-center text-yellow-500 py-4'>{subHeading}</p>
            <h1 className='text-4xl font-bold text-gray-600 border-y-4 uppercase'>{heading}</h1>

        </div>
    );
};

export default SectionTitle; 