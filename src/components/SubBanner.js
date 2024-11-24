import React from 'react';

const SubBanner = ({ title, subtitle }) => {
    return (
        <div
            className='w-full h-80 bg-cover bg-center relative flex justify-center items-center'
            style={{
                backgroundImage:
                    "url('https://bizweb.dktcdn.net/100/522/252/themes/958280/assets/breadcrumb.jpg?1726650282479')",
            }}
        >
            {/* Overlay màu đen với độ trong suốt */}
            <div className='absolute inset-0 bg-black/50'></div>

            <div className='relative flex flex-col items-center'>
                <h1 className='text-[#BFD730] text-4xl font-bold uppercase'>
                    {title}
                </h1>
                <p className='text-white font-semibold mt-4 uppercase'>
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default SubBanner;
