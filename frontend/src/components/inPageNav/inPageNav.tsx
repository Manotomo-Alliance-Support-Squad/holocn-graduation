import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import React, {Component} from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './inPageNav.css'
import '../../shared/globalStyles/global.css'


interface InPageNavState{
}

interface InPageNavProps{
    navButtons: Array<Object>;
}

const NavButton = withStyles({
      containedPrimary: {
        color: "#ffffff",
        backgroundColor: "#908d8d",
        '&:hover': {
          backgroundColor: "#bbbbbb",
        },
      },
})(Button);


export default class InPageNav extends Component<InPageNavProps, InPageNavState>{
    navButtons: Array<Object>;

    constructor(props: InPageNavProps)
    {
        super(props);
        this.navButtons = props.navButtons
    }

    // TODO: Uses similar style as navbar. Potentially refactor that with the common code here.
    buildNavRender() : JSX.Element {
        return (
                <CarouselProvider className="in-page-nav" naturalSlideWidth={200} naturalSlideHeight={300} visibleSlides={2} totalSlides={5} infinite>
                    <ButtonBack className="buttonBack">
                        <KeyboardArrowLeftIcon/>
                    </ButtonBack>
                    <ButtonNext className="buttonNext">
                        <KeyboardArrowRightIcon/>
                    </ButtonNext>
                    <Slider className="slider">
                        {this.navButtons.map((obj, idx) => {
                            return (
                                <Slide key={idx} index={idx} className="in-page-nav-button">
                                        <NavLink to={Object(obj)["link"]}>
                                            <NavButton variant="contained" startIcon={Object(obj)["startIcon"]} size="large" color="primary">
                                                {Object(obj)["buttonContent"]}
                                            </NavButton>
                                        </NavLink>
                                </Slide>
                            );
                        })}
                    </Slider>
                </CarouselProvider>
        );
    }

    render() {
        return this.buildNavRender();
    }

}
