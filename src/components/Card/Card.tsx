import React from 'react';
import { CardWrapper,Content, Title, TitleWrapper,  } from './Card.style';

interface Props {
    title: string
    content: string
}

const Card: React.FC<Props> = ({
    title,
    content,
}) => {
    
    return (
        <CardWrapper>
            <TitleWrapper>
                <Title>
                    {title}
                </Title>
            </TitleWrapper>
            <Content>
                {content}
            </Content>
        </CardWrapper>    
    )
}

export default Card

