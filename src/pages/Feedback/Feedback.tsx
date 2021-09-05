import Header from 'components/Header/Header';
import React from 'react';
import img from '../../assets/images/feedbackIMG.jpg'
import FormSection from './FormSection/FormSection';

const feedbackHeaderContent = {
    headerText: 'Leave opinion about favourite places',
    title: 'Share with others'
}

const Feedback: React.FC = () => {
    return (
        <>
            <Header
                headerText={feedbackHeaderContent.headerText}
                title={feedbackHeaderContent.title}
                background={img}
            />
            <FormSection />
        </>
    )
}

export default Feedback;
