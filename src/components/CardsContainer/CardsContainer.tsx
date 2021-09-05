import Card from 'components/Card/Card';
import React from 'react'
import { CardsContainerWrapper } from './CardsContainer.style';

interface Props {
    items: Array<object>
    title: string
    content: string
}

const CardsContainer: React.FC<Props> = ({ 
    items = [{title: "", content: ""}],
    title = "title",
    content = "content",
}) => (
    <CardsContainerWrapper >
        {items.map((item: any) => (<Card title={item[title]} content={item[content]} key={item.id} />))}
    </CardsContainerWrapper>
)

export default CardsContainer
