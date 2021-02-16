import React from 'react'
import WomenClothes from '../../components/WomenClothes/WomenClothes'
import Photo from '../../components/photo/Photo'
import img7 from '../../photos/img7.jpg'

function WomenPage(){
    return(
        <div>
            <Photo title={"Women Clothing"} image={img7}/>
            <WomenClothes/>
            
        </div>
    )
}
export default WomenPage