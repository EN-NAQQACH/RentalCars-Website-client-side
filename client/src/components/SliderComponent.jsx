// SliderComponent.jsx
import React from 'react';

const SliderComponent = ({ className }) => {
    return (
        <div className={className}>
            <div className='slider h-[250px]'>
                <img src="./src/assets/carmain1.jpg" alt="" className='h-full w-full object-cover' />
            </div>
            <div className='slider h-[250px]'>
                <img src="./src/assets/carmain2.jpg" alt="" className='h-full w-full object-cover' />
            </div>
            <div className='slider h-[250px]'>
                <img src="./src/assets/carmain3.jpg" alt="" className='h-full w-full object-cover' />
            </div>
        </div>
    );
};

export default SliderComponent;
