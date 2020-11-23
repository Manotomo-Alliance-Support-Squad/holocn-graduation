import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import InPageNav from '../inPageNav/inPageNav';
import '../../shared/globalStyles/global.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import Manotomo1 from '../../assets/sprites/manotomo1.png'
import Manotomo2 from '../../assets/sprites/manotomo2.png'
import yogiri from '../../assets/sprites/yogiri.webp'
import civia from '../../assets/sprites/civia.webp'
import spade_echo from '../../assets/sprites/spade_echo.webp'
import doris from '../../assets/sprites/doris.webp'
import artia from '../../assets/sprites/artia.webp'
import rosalyn from '../../assets/sprites/rosalyn.webp'


import './header.css'

interface HeaderState {
}

interface HeaderProps {
}

const headerNav = [
    {
        link: "/home",
        buttonContent: <img src={yogiri}/>,
        startIcon: ""
    },
    {
        link: "/home",
        buttonContent: <img src={civia}/>,
        startIcon: ""
    },
    {
        link: "/home",
        buttonContent: <img src={spade_echo}/>,
        startIcon: ""
    },
    {
        link: "/home",
        buttonContent: <img src={doris}/>,
        startIcon: ""
    },
    {
        link: "/home",
        buttonContent: <img src={artia}/>,
        startIcon: ""
    },
    {
        link: "/home",
        buttonContent: <img src={rosalyn}/>,
        startIcon: ""
    },
]

const AltNav = () => {
    const location = useLocation();
    if (location.pathname === "/home") {
        return InPageNav(headerNav);
    }
    return <span />
};

export default class HeaderSection extends Component<HeaderProps, HeaderState>
{
    renderDefaultSection(): JSX.Element {
        return (
            <>
                <header className="App-header">
                    <div style={{height: 100}}/>
                    <AltNav />
                    <div style={{ height: 50 }} />
                </header>
                <div className="separator"/>
            </>
        )
    }

    render() {
        return this.renderDefaultSection();
    }
}
