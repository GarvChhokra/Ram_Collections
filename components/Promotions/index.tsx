import React from 'react'
import PromotionsCarousel from './PromotionsCorousel';
import promotionsData from './PromotionsData';

const Promotions = () => {
  const customColorStyle = {
    backgroundColor: 'rgb(100, 4, 5, 0.6)',
  };
  return (
    <div className='p-4 text-white' style={customColorStyle}>
      <PromotionsCarousel promotions={promotionsData}/>
    </div>
  )
}

export default Promotions
