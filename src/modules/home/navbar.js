import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import colors from '../../common/colors';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MoreIcon from '@material-ui/icons/MoreVert';

const NAVBAR_HEADING_TABS = ['HOME', 'PRODUCTS', 'WHY US', 'LOGIN', 'SIGN UP'];

const NavbarMenu = (props) => {

    // css class states
    const classes = useStyles();
    // component props
    const { resendTabIndex } = props;
    // component states start here
    const [
        mobileMoreAnchorEl,
        setMobileMoreAnchorEl,
    ] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [tabValue, setTabValue] = useState(0);
    // component states ends here

    useEffect(() => {
        resendTabIndex(tabValue);
    }, [tabValue]);

    /**
     * handle change for tabs
     * @param {*} event 
     * @param {*} tabIndex 
     */
    const handleTabChange = (event, tabIndex) => {
        if (tabValue !== tabIndex) {
            setTabValue(tabIndex);
        }
        handleMobileMenuClose();
    };

    /**
     * close mobile menu options
     */
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    /**
     * open mobile menu options
     * @param {*} event 
     */
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted={true}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            style={{ height: '50%' }}
        >
            {NAVBAR_HEADING_TABS.map((item, index) => (
                <MenuItem
                    key={index}
                    selected={
                        index === tabValue
                    }
                    onClick={(event) => handleTabChange(event, index)}
                >
                    {item}
                </MenuItem>
            ))}
        </Menu>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classes.appBar)}>
                <Toolbar>
                    <Grid
                        container={true}
                        spacing={1}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item={true} xs={1}/>
                        <Grid item={true} xs={1} className={classes.projectNameText}>
                            GiftMagazine
                        </Grid>
                        <Grid item={true} xs={10} className={classes.headingTabsContainer}>
                            <div className={classes.sectionDesktop}>
                                <Tabs
                                    value={tabValue}
                                    onChange={handleTabChange}
                                    variant="standard"
                                    TabIndicatorProps={{
                                        style: {
                                            backgroundColor: '#7a819024',
                                        },
                                    }}
                                    aria-label="scrollable force tabs example"

                                >
                                    {NAVBAR_HEADING_TABS.map((item, index) => (
                                        <Tab
                                            key={String(index)}
                                            label={item}
                                            className={
                                                tabValue === index
                                                    ? classes.active_tabStyle
                                                    : classes.tabstyle
                                            }
                                            classes={{
                                                root: classes.headingTabsRoot
                                            }}
                                        />
                                    ))}
                                </Tabs>
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div >
    );
}
export default NavbarMenu;

const useStyles = makeStyles((theme) => ({
    projectNameText: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        fontSize: 30,
        color: colors.black,
        letterSpacing: 0
    },
    root: {
        display: 'flex',
        height: '7vh'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    tabstyle: {
        fontSize: '14px',
        alignItems: 'right',
        color: colors.black,
        textTransform: 'capitalize',
        opacity: 1,
        // width: 6,
        fontFamily: 'Montserrat',
        letterSpacing: '0.5px'
    },
    active_tabStyle: {
        fontSize: '14px',
        color: colors.black,
        backgroundColor: '#7a819085',
        fontWeight: 'bold',
        height: '4rem',
        textTransform: 'capitalize',
        opacity: 0.2,
        fontFamily: 'Roboto',
        letterSpacing: '0.5px'
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up(1201)]: {
            display: 'none',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up(1201)]: {
            display: 'flex',
        },
    },
    headingTabsContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    headingTabsRoot: {
        maxWidth: '160px !important',
        padding: '6px 10px !important',
        minWidth: '160px !important',
        [theme.breakpoints.down(1662)]: {
            maxWidth: '135px !important',
            padding: '6px 10px !important',
            minWidth: '135px !important',
        },
        [theme.breakpoints.down(1400)]: {
            maxWidth: '135px !important',
            padding: '6px 10px !important',
            minWidth: '100px !important',
        },
    },
}));