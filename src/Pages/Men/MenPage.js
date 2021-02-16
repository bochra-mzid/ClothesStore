import React,{useState} from 'react'
import MenClothes from '../../components/MenClothes/MenClothes'
import Photo from '../../components/photo/Photo'
import img5 from '../../photos/img5.jpeg'

function MenPage(){
    return(
        <div>
            <Photo title={"Men Clothing"} image={img5}/>
            <MenClothes/>
        </div> 
    )
}

export default MenPage