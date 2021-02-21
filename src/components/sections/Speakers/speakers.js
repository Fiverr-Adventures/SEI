import React from 'react'

import SpeakersCarousel from '../../carousels/speakers-carousel'
import SectionDescription from '../../utils/sectionDescription'
import Container from '../../container/container'
import Nav from '../../nav/nav'
import Footer from '../footer'
import Lines from '../../images/LinesSpeakers.svg'

function Speakers(params) {
    let styling = {
        paddingLeft: '0',
        paddingRight: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    }
    const background = {
        backgroundImage: `url(${Lines})`,
        backgroundSize: '100%',
        backgroundPosition: '0 -200px',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(14,29, 42)'
    }
    return (
        <div style={background}>
            <div style={styling}>
                <Container style={{ backgroundColor: 'transparent' }}>
                    <Nav />
                    <SectionDescription
                        middleTitle='Speakers'
                        title='A crazy cool selection of speakers.'
                        style={{ maxWidth: '70%', marginBottom: '150px', marginTop: '10px' }}>
                    </SectionDescription>
                    <SpeakersCarousel style={{ paddingLef: '0px' }}></SpeakersCarousel>
                </Container>
            </div>
            <Footer>Yep. That’s the end of it.Bye now. 👋</Footer>
        </div>
    )
}

export default Speakers