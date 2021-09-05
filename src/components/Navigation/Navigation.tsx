import React from 'react';
import { StyledLink, StyledMediaList, StyledNavigationList, Wrapper } from './Navigation.style';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Navigation: React.FC = () => {

    return (
        <>
            <Wrapper>
                <StyledNavigationList>
                    <StyledLink to="/">
                        Home
                    </StyledLink>
                    <StyledLink to="/atrakcje">
                        Attractions
                    </StyledLink>
                    <StyledLink to="/feedback">
                        Feedback
                    </StyledLink>
                </StyledNavigationList>
                <StyledMediaList>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                </StyledMediaList>
            </Wrapper>
        </>
    )
}

export default Navigation;