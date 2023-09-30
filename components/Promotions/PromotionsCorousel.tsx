"use client"
import React, { useMemo, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PromotionsCarouselContents, { Promotion } from './PromotionsData';
import {BsPauseFill, BsPlay} from "react-icons/bs"

interface PromotionsCarouselProps {
    promotions: Promotion[];
}

const PromotionsCarousel: React.FC<PromotionsCarouselProps> = ({promotions}) => {
    const [isPause, setIsPause] = useState(false);
    const settings = {
      dots: true,
      infinite: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: !isPause,
      autoplaySpeed: 3000,
    };

    const pauseBtn = () => {
        if(isPause){
            setIsPause(false);
        }
        else{
            setIsPause(true);
        }
    }

  return (
    <div className="p-1 md:flex items-center justify-center">
      <div className="flex flex-col w-full sm:max-w-l md:max-w-2xl md:mx-10 text-center">
            <Slider {...settings}>
            {promotions.map((item, index) => (
                <div key={index}>
                    <p>{item.description}</p>
                </div>
                ))}
            </Slider>
        </div>
        <div className='md:flex'>
            <button onClick={pauseBtn}>
                {isPause? <BsPlay size={28} className="text-white opacity-80 cursor-pointer hover:opacity-100 transition"/> : <BsPauseFill size={28} className="text-white opacity-80 cursor-pointer hover:opacity-100 transition"/>}
            </button>
            
        </div>
    </div>
  );
};

export default PromotionsCarousel;
