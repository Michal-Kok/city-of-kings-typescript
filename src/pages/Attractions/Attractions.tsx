import Header from '../../components/Header/Header';
import React from 'react';
import img from '../../assets/images/placesIMG.jpg'


const attractionsHeaderContent = {
    headerText: 'Zobacz miejsca warte odwiedzenia',
    title: 'Zanurz się głębiej'
}

const Attractions = () => {

    return (
        <Header
            headerText={attractionsHeaderContent.headerText}
            title={attractionsHeaderContent.title}
            background={img}
        />
    );

}

export default Attractions;