import React from "react";
import HomeCard from '../../components/card/HomeCard'
import CarouselSection from "../../components/carousel/Carousel";
import Footer from '../../components/Footer/Footer'

function Home(){
    return(
        <div>
            <HomeCard/>
            <CarouselSection/>
            <Footer/>
        </div>
    )
}
export default Home