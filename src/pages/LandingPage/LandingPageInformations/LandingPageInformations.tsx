import React, { useEffect } from 'react';
import { StyledSubtitle, StyledTitle, Wrapper } from './LandingPageInformations.style';
import { AiOutlineCustomerService, AiOutlineHeart } from 'react-icons/ai';
import { Item } from 'components/ListComponent/ListComponent';
import { GiChurch } from 'react-icons/gi';
import { IoBeerOutline } from 'react-icons/io5';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ListComponent from '../../../components/ListComponent/ListComponent';

const informationItems: Array<Item> = [
    {
        icon: <AiOutlineCustomerService />,
        description: 'Ogromne wydarzenia'
    },
    {
        icon: <AiOutlineHeart />,
        description: 'Mocne przyjaźnie'
    },
    {
        icon: <GiChurch />,
        description: 'Mnóstwo zabytków'
    },
    {
        icon: <IoBeerOutline />,
        description: 'Najlepsze browary'
    }
]

const LandingPageInformations: React.FC = () => {

    useEffect(() => {
        let info: null | Element | HTMLDivElement = document.querySelector(".information");

        gsap.registerPlugin(ScrollTrigger);

        if (!info) {
            info = new HTMLDivElement()
        }

        gsap.set(info.children, { opacity: 0, y: 150, });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: info,
                start: 'top 25%',
            }
        });

        tl.to(
            info.children,
            { opacity: 1, y: 0, stagger: .2, }
        )
    }, [])

    return (
        <>
            <Wrapper className="information">
                <StyledTitle>
                    Poczuj więcej
                </StyledTitle>
                <StyledSubtitle>
                    Kraków słynie z bogatej oferty kulturalnej i rozrywkwej!
                </StyledSubtitle>
                <ListComponent items={informationItems} />
            </Wrapper>
        </>
    )
}

export default LandingPageInformations;