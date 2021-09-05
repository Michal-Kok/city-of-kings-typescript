import styled from "styled-components";

export const OpinionsWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.grey};
`; 

export const Title = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.xll};
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;
`;

export const CardsWrapper = styled.div`
    width: 100%;
    padding: 200px 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grey};
`; 