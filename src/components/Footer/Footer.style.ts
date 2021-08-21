import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 30vh;
    width: 100%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.darkColor};
   `;

export const StyledTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.white};
   `;

export const StyledMediaList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
padding-right: 80px;
height: 100%;
width: 20%;
font-size: 25px;
margin-top: 30px;
color: ${({ theme }) => theme.colors.white};
cursor: pointer;

svg {
    color: ${({ theme }) => theme.colors.grey};
}
`;