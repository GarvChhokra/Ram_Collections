import React from 'react'
import SaleOffer from './SaleOffer'
import Jeans from './Jeans'
import Information from './Information'
import WomenClothings from './WomenClothings'
import WomenClothingsProducts from './WomenClothingsProducts'
import NewCollection from './NewCollection'

const MainPage = () => {
  return (
    <div>
        <Jeans/>
        <SaleOffer/>
        <WomenClothings products={WomenClothingsProducts}/>
        <NewCollection />
        <Information/>
    </div>
  )
}

export default MainPage
