import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

import './inPageNav.css'
import '../../shared/globalStyles/global.css'


const useStyles = makeStyles((theme) => ({
  containedPrimary: {
    color: "#ffffff",
    backgroundColor: "#908d8d",
    '&:hover': {
      backgroundColor: "#bbbbbb",
    },
  },
}));


// TODO: Uses similar style as navbar. Potentially refactor that with the common code here.
export default function InPageNav(navButtons: Array<Object>) {
    const classes = useStyles();
    return (
        <div className="in-page-nav">
            {navButtons.map((obj, idx) => {
                return (
                    <div className="in-page-nav-button">
                        <NavLink to={Object(obj)["link"]}>
                            <Button variant="contained" startIcon={Object(obj)["startIcon"]} size="large" color="primary" className={classes.containedPrimary}>
                                {Object(obj)["buttonContent"]}
                            </Button>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
}
