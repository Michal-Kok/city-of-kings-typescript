import React from 'react';
import { StyledTitle, Wrapper, StyledMediaList } from './Footer.style';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {

    return (
        <Wrapper>
            <StyledTitle>
                Skontaktuj się z nami!
            </StyledTitle>
            <StyledMediaList>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
            </StyledMediaList>
        </Wrapper>
    );

}

export default Footer;