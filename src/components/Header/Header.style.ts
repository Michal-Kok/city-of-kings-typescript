import styled from 'styled-components';

export const Wrapper = styled.div<{ background: string }>`
    height: 100vh;
    width: 100vw;
    padding: 10%;
    padding-top: 15%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image:linear-gradient(to bottom, rgba(20, 20, 20, 0.6), rgba(20, 20, 20, 0.6)),
        url(${({ background }) => background});
    background-color: rgba(1, 1, 1, .4);
`;

export const StyledHeaderText = styled.p`
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom: 20px;
`;

export const StyledTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.header};
    color: ${({ theme }) => theme.colors.white};
`;

export const StyledHeaderButton = styled.button`
    background-color: ${({ theme }) => theme.colors.pink};
    padding: 15px 30px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-radius: 40px;
    margin-top: 40px;
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: #2F0C49;
    }
`;