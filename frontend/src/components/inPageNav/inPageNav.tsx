import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import React, {Component} from 'react'

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
            <div className="in-page-nav">
                {this.navButtons.map((obj, idx) => {
                    return (
                        <div key={idx} className="in-page-nav-button">
                            <NavLink to={Object(obj)["link"]}>
                                <NavButton variant="contained" startIcon={Object(obj)["startIcon"]} size="large" color="primary">
                                    {Object(obj)["buttonContent"]}
                                </NavButton>
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return this.buildNavRender();
    }

}
