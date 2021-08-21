import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 800px;
    width: 100vw;
    padding: 190px 0;
    background-color: ${({ theme }) => theme.colors.grey};
    
`;

export const StyledTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.l};
    text-align: center;
    text-transform: uppercase;
`;

export const StyledSubtitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: center;
    width: 600px;
    margin: 25px auto;
`;

export const StyledParagraph = styled.p`
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: center;
`;