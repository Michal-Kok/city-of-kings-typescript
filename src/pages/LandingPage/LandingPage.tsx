import Header from '../../components/Header/Header';
import React from 'react';
import LandingPageInformations from './LandingPageInformations/LandingPageInformations';
import img from '../../assets/images/headerIMG.jpg';

const headerProps = {
    title: 'Poznaj bliżej Kraków',
    headerText: 'Wspaniałe dni w mieście królow polski',
    headerButtonText: 'Atrakcje'
}

const LandingPage: React.FC = () => {

    return (
        <>
            <Header
                title={headerProps.title}
                headerText={headerProps.headerText}
                headerButtonText={headerProps.headerButtonText}
                background={img}
            />
            <LandingPageInformations />
        </>
    )
}

export default LandingPage;