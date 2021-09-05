import CardsContainer from 'components/CardsContainer/CardsContainer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useFetch } from 'hooks/useFetch';
import React, { useEffect } from 'react';
import { CardsWrapper, OpinionsWrapper, Title } from './Opinions.style';

const API = 'http://localhost:4000/opinions';

const Opinions: React.FC = () => {

    const {data: opinions} = useFetch(API);

    const checkElementType = (items: Array<null | HTMLHtmlElement>) => {

    }

    useEffect(() => {
        let title: HTMLElement | null = document.querySelector(".title");
        let cardWrapper: HTMLDivElement | null = document.querySelector(".cardsWrapper");
        let opinions: null | HTMLDivElement = document.querySelector(".opinions");

        gsap.registerPlugin(ScrollTrigger);

        gsap.set((cardWrapper as HTMLDivElement).children, { opacity: 0, y: 150, });
        gsap.set(title, { opacity: 0, y: 150, });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: opinions,
                start: 'top 25%',
            }
        });

        tl.to(
            title,
            { opacity: 1, y: 0, duration: .2, }
        ).to(
            (cardWrapper as HTMLDivElement).children,
            {opacity: 1, y: 0, stagger: .2}
        )
    }, [])

    return (
        <OpinionsWrapper className="opinions">
            <Title className="title">
                From people who experienced.
            </Title>
            <CardsWrapper className="cardsWrapper">
                <CardsContainer
                    title="username"
                    content="content"
                    items={opinions}/>
            </CardsWrapper>
        </ OpinionsWrapper>
    )
}

export default Opinions;


