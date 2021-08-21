import React from 'react';
import { useHistory } from 'react-router';
import img from '../../assets/images/headerIMG.jpg';
import { StyledHeaderText, StyledTitle, Wrapper, StyledHeaderButton } from './Header.style';

interface Props {
    headerText: string
    title?: string
    headerButtonText?: string | null
    background?: string
}

const Header: React.FC<Props> = ({
    headerText,
    title = "",
    headerButtonText = null,
    background = img
}) => {

    const history = useHistory();

    return (
        <Wrapper background={background}>
            <StyledHeaderText>
                {headerText}
            </StyledHeaderText>
            <StyledTitle>
                {title}
            </StyledTitle>
            {headerButtonText
                ? (
                    <StyledHeaderButton onClick={() => history.push('/forum')}>
                        {headerButtonText}
                    </StyledHeaderButton>
                ) : null}
        </Wrapper>
    );
}

export default Header;