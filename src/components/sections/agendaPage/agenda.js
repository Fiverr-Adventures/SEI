import React from 'react';

import Container from '../../container/container'
import SectionDescription from '../../utils/sectionDescription'
import Carousel from '../../carousels/carousel-agenda-page'
import Nav from '../../nav/nav'
import Footer from '../footer'
import Lines from '../../images/lines.svg'

function Agenda(props) {
    let styling = {
        backgroundColor:'#142a3e',
        paddingLeft:'0',
        paddingRight:'0',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${Lines})`,
        backgroundSize: '100%',
        backgroundPositionx: '0',
        backgroundPositiony: '0',
        backgroundRepeat: 'no-repeat'
    }
    return(
        <>
        <div style={styling}>
        <Container >
            <Nav/>
            <SectionDescription middleTitle='Agenda'></SectionDescription>
            <Carousel />
        </Container>
        </div>
         <Footer>Yep. That’s the end of it.Bye now. 👋</Footer>
</>
    )

}

export default Agenda;