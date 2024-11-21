import React from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

export const AboutSection = () => {
 
    return (
        // <div className='bg-gradient-to-b from-green-100 to-white'>
        //     <header className='text-center py-8'>
        //         <h1 className='text-2xl font-bold text-green-600'>
        //             FreshFoods
        //         </h1>
        //         <h2 className='text-4xl font-bold text-green-800'>
        //             VỀ CHÚNG TÔI
        //         </h2>
        //     </header>
        //     <main className='flex flex-col items-center justify-center space-y-8'>
        //         <div className='flex flex-col items-center'>
        //             <div className='text-6xl font-bold text-green-700'>20</div>
        //             <div className='text-xl font-semibold text-green-700'>
        //                 Hình thành &amp; PHÁT TRIỂN
        //             </div>
        //             <p className='text-center text-gray-600 max-w-2xl mt-4'>
        //                 Trải qua gần 20 năm hình thành và phát triển Công ty
        //                 TNHH Thực Phẩm Sạch Thương Mại T&P (FreshFoods) đã có
        //                 những bước phát triển không ngừng trong việc cung cấp
        //                 các sản phẩm thực phẩm sạch nhập khẩu đến tận tay người
        //                 tiêu dùng.
        //             </p>
        //         </div>
        //         <div className='relative'>
        //             <img
        //                 src='/placeholder.svg?height=400&width=600'
        //                 alt='Team celebrating'
        //                 width={600}
        //                 height={400}
        //                 className='rounded-lg'
        //             />
        //             <div className='absolute inset-0 flex items-center justify-center'>
        //                 <PlayCircleIcon className='w-16 h-16 text-white opacity-75' />
        //             </div>
        //         </div>
        //     </main>
        //     <footer className='mt-8'>
        //         <img
        //             src='/placeholder.svg?height=200&width=1440'
        //             alt='Scenic background'
        //             width={1440}
        //             height={200}
        //             className='w-full'
        //         />
        //     </footer>
        // </div>
        <section className='bg-gray-100 py-12'>
            <div className=' container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h1 className='text-4xl font-extrabold text-[#9AB73C] '>
                        Về chúng tôi
                    </h1>
                </div>

                <div className='mt-20 flex flex-col lg:flex-row items-center'>
                    <div className='lg:w-1/2 text-center lg:text-left'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <div className='flex items-center w-2/3 justify-center'>
                                <img
                                    src='	https://bizweb.dktcdn.net/100/522/252/themes/958280/assets/title_about.png?1730797879307'
                                    alt='img'
                                />
                            </div>
                            <p className='mt-4 text-gray-600 italic'>
                                Trải qua gần 20 năm hình thành và phát triển,
                                Công ty TNHH Thực Phẩm Sạch Thương Mại Foodeii
                                (FreshFoods) đã có những bước phát triển không
                                ngừng trong việc cung cấp các sản phẩm thực phẩm
                                sạch nhập khẩu đến tận tay người tiêu dùng.
                            </p>
                        </div>
                    </div>

                    <div className='lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative '>
                        <img
                            src='https://bizweb.dktcdn.net/100/522/252/themes/958280/assets/banner_about.png?1730797879307'
                            alt='About us'
                            className='w-full  rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
