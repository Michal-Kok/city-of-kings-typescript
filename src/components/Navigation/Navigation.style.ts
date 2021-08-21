import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    height: 100px;
    width: 100%;
    background-color: transparent;    
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid white;
`;

export const StyledMediaList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-right: 80px;
    height: 100%;
    width: 20%;
    border-left: 1px solid white;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    svg {
        color: ${({ theme }) => theme.colors.grey};
    }

`;

export const StyledNavigationList = styled.ul`
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 40%;
`;

export const StyledLink = styled(NavLink)`
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.grey};
    }
`;

export const StyledTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.xl};
    
`;