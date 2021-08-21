import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.white};
`;

interface Props {
    children: React.ReactNode
}

const MainTemplate: React.FC<Props> = ({ children }) => {


    return (
        < Wrapper >
            < Navigation />
            {children}
            <Footer />
        </Wrapper>
    );
}

export default MainTemplate;