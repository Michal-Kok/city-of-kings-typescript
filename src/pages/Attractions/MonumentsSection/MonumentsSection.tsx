import CardsContainer from 'components/CardsContainer/CardsContainer';
import { useFetch } from 'hooks/useFetch';
import React, { useEffect } from 'react';
import { MonumentsWrapper } from './MonumentsSection.style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const API = 'http://localhost:4000/monuments';

const MonumentsSection: React.FC = () => {

    const {data: monuments} = useFetch(API);

    useEffect(() => {
        let monuments: null | HTMLDivElement = document.querySelector(".monuments");

        gsap.registerPlugin(ScrollTrigger);

        gsap.set((monuments as HTMLDivElement).children, { opacity: 0, y: 150, });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: monuments,
                start: 'top 25%',
            }
        });

        tl.to(
            (monuments as HTMLDivElement).children,
            { opacity: 1, y: 0, stagger: .2, }
        )
    }, [])

    return (
        <MonumentsWrapper className="monuments">
            <CardsContainer
                items={monuments}
                title="title"
                content="content" />
        </MonumentsWrapper>
    )
}

export default MonumentsSection;
