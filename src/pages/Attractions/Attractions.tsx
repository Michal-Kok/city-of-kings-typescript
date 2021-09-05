import Header from '../../components/Header/Header';
import React from 'react';
import img from '../../assets/images/placesIMG.jpg';
import MonumentsSection from './MonumentsSection/MonumentsSection';


const attractionsHeaderContent = {
    headerText: 'Zobacz miejsca warte odwiedzenia',
    title: 'Zanurz się głębiej'
}

const Attractions: React.FC = () => {

    return (
        <>
        <Header
            headerText={attractionsHeaderContent.headerText}
            title={attractionsHeaderContent.title}
            background={img}
        />
        <MonumentsSection />
        </>
    );

}

export default Attractions;