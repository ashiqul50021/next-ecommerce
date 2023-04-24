import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { BannerItem } from './BannerItem';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoPlay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='bg-[#F2F0FF] custom-slider-container'>
            <Slider {...settings}>
                {
                    BannerItem.map((item, index) => {
                        const backgroundImages = item?.background;
                        // console.log(backgroundImages.src);
                        return (
                            <div key={index}>
                                <div className='maximum_width mx-auto'>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <h1 className='text-6xl font-semibold'>{item.name}</h1>
                                            <p className='text-gray-500 my-3 w-fit'>{item.short_description}</p>
                                            <Link type='button' className='primary-btn' href={''}>Shot Now</Link>
                                        </div>
                                        <div>
                                            <div className='my-5' style={{ backgroundImage: `url(${backgroundImages.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

                                                <Image src={item.image} className='w-fit h-fit z-50' alt='image' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }

            </Slider>
        </div>
    )
}

export default Banner