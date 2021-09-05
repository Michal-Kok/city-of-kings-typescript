import styled from "styled-components";

export const CardWrapper = styled.div`
    min-height: 420px;
    width: 20%;
    max-width: 320px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 30px;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    border-radius: 10px;    
    padding: 25px;
    color: ${({ theme }) => theme.colors.darkGrey};
    transform: translateY(+22%);
    transition: .4s;

    &:nth-child(even) {
        transform: translateY(-22%);

        &:hover {
            transform: translateY(-22%) scale(1.1);
            z-index: 5;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
        }
    }

    &:hover {
        transform: scale(1.1) translateY(+22%);
        z-index: 5;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
    }

`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Title = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Content = styled.p`
    font-size: ${({ theme }) => theme.fontSize.m};
`; 
