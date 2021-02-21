import React from 'react'
import Intro from './intro/intro'
import Carousel from './agenda/carousel-home'
import Footer from '../footer'
import Speakers from './speakers'
import useInView from "react-cool-inview"

function Home(params) {
    return (
        <div>
            <Intro style={{backgroundColor:'rgb(20, 42, 62)'}}/>
            <Carousel style={{background:'#181818'}}/>
            <Speakers style={{background:'rgb(20, 42, 62)'}}/>
            <Footer style={{background:'#0e1d2a'}} >Yep. That’s the end of it. Bye now. 👋</Footer>
        </div>
    )
}

export default Home


//#181818
//rgb(20, 42, 62)
//#0e1d2a
//#181818