import React from 'react'
import SaleOffer from './SaleOffer'
import Jeans from './Jeans'
import Information from './Information'
import WomenClothings from './WomenClothings'
import WomenClothingsProducts from './WomenClothingsProducts'

const MainPage = () => {
  return (
    <div>
        <Jeans/>
        <SaleOffer/>
        <WomenClothings products={WomenClothingsProducts}/>
        <Information/>
    </div>
  )
}

export default MainPage
