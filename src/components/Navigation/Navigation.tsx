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
                        Atrakcje
                    </StyledLink>
                    <StyledLink to="/">
                        Wkrótce
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