import React from 'react'
import { Link } from 'react-router-dom'
import '../Mobileview/Navigation.scss'

import { makeStyles, withTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';



import Home from '@material-ui/icons/HomeRounded';
import AboutUs from '@material-ui/icons/FavoriteRounded';
import Login from '@material-ui/icons/PersonRounded';
import Wineries from '@material-ui/icons/LocationOnRounded';



const useStyles = makeStyles({
    root: {
        width: 490,
        paddingTop: 30,
        paddingBottom: 50,

    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            className={classes.navbar}
            value={value}
            onChange={(event, newValue, onChange) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            id="bottom-nav"
        >
            <BottomNavigationAction component={Link} to={'/'} value={'/'} label={'Home'} icon={<Home />} />
            <BottomNavigationAction component={Link} to={'/allwinerys'} value={'/allwinerys'} label={'Wineries'} icon={<Wineries />} />


            <BottomNavigationAction component={Link} to={'/aboutus'} value={'/aboutus'} label={'About Us'} icon={<AboutUs />} />

            <BottomNavigationAction component={Link} to={'/adminWinery'} value={'/adminWinery'} label={'Login'} icon={<Login />} />


        </BottomNavigation>
    );
}