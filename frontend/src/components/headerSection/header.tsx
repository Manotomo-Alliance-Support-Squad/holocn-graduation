import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import InPageNav from '../inPageNav/inPageNav';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';

import yogiri from '../../assets/sprites/yogiri.webp'
import civia from '../../assets/sprites/civia.webp'
import spade_echo from '../../assets/sprites/spade_echo.webp'
import doris from '../../assets/sprites/doris.webp'
import artia from '../../assets/sprites/artia.webp'
import rosalyn from '../../assets/sprites/rosalyn.webp'

import YogiriPage from '../../pages/yogiri/yogiri';
import CiviaPage from '../../pages/civia/civia';
import ArtiaPage from '../../pages/artia/artia';
import DorisPage from '../../pages/doris/doris';
import RosalynPage from '../../pages/rosalyn/rosalyn';
import SpadeEchoPage from '../../pages/spade_echo/spade_echo';

import './header.css'

interface HeaderState {
}

interface HeaderProps {
}

// FIXME: Images below hard coded as 300px in inPageNav.css
const headerNav = [
    {
        link: "/yogiri",
        buttonContent: <img src={yogiri}/>,
        page: <YogiriPage/>,
        startIcon: ""
    },
    {
        link: "/civia",
        buttonContent: <img src={civia}/>,
        page: <CiviaPage/>,
        startIcon: ""
    },
    {
        link: "/spade_echo",
        buttonContent: <img src={spade_echo}/>,
        page: <SpadeEchoPage/>,
        startIcon: ""
    },
    {
        link: "/doris",
        buttonContent: <img src={doris}/>,
        page: <DorisPage/>,
        startIcon: ""
    },
    {
        link: "/artia",
        buttonContent: <img src={artia}/>,
        page: <ArtiaPage/>,
        startIcon: ""
    },
    {
        link: "/rosalyn",
        buttonContent: <img src={rosalyn}/>,
        page: <RosalynPage/>,
        startIcon: ""
    },
]

export default class HeaderSection extends Component<HeaderProps, HeaderState>
{
    renderDefaultSection(): JSX.Element {
        return (
            <>
                <header className="App-header">
                    <div style={{height: 100}}/>
                    <InPageNav navButtons={headerNav}/>
                </header>
            </>
        )
    }

    render() {
        return this.renderDefaultSection();
    }
}
