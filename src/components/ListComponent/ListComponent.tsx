import React, { ReactComponentElement } from 'react';
import {
    StyledInformationList,
    StyledListElement,
    StyledSVGContainer,
    StyledParagraph
} from './ListComponent.style';

export interface Item {
    icon: JSX.Element
    description: string
}

interface Props {
    items: Array<Item>
}

const ListComponent: React.FC<Props> = ({ items }) => {

    return (
        <StyledInformationList>
            {items.map(item => (
                <StyledListElement>
                    <StyledSVGContainer>
                        {item.icon}
                    </StyledSVGContainer>
                    <StyledParagraph>
                        {item.description}
                    </StyledParagraph>
                </StyledListElement>
            ))}
        </StyledInformationList>
    )
}

export default ListComponent;