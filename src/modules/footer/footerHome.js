import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';
import colors from '../../common/colors';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

const FooterHome = (props) => {
    // css class states
    const classes = useStyles();
    // component state start here
    const [email, setEmail] = useState('');

    return (
        <Grid alignItems="center" className={classes.root}>
            <Grid
                container="true"
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.socialIcon}
            >
                <IconButton><FacebookIcon className={classes.iconColor} /></IconButton>
                <IconButton><TwitterIcon className={classes.iconColor} /></IconButton>
                <IconButton><InstagramIcon className={classes.iconColor} /></IconButton>
                <IconButton><YouTubeIcon className={classes.iconColor} /></IconButton>
            </Grid>
            <Grid
                container="true"
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                className={classes.socialIcon}
                spacing={3}
            >
                <Grid item={true} xs={12} sm={6} md={2} lg={2} className={classes.box}>
                    <Typography variant="h6" className={classes.title}>Extras</Typography>
                    <Button className={classes.buttonColor}>Brands</Button><br />
                    <Button className={classes.buttonColor}>Gift Certificates</Button><br />
                    <Button className={classes.buttonColor}>Site Map</Button>
                </Grid>
                <Grid item={true} xs={12} sm={6} md={2} lg={2} className={classes.box}>
                    <Typography variant="h6" className={classes.title}>Information</Typography>
                    <Button className={classes.buttonColor}>About Us</Button><br />
                    <Button className={classes.buttonColor}>Privacy Policy</Button><br />
                    <Button className={classes.buttonColor}>Terms & Conditions</Button>
                </Grid>
                <Grid item={true} xs={12} sm={6} md={2} lg={2} className={classes.box}>
                    <Typography variant="h6" className={classes.title}>Newsletter</Typography>
                    <OutlinedInput
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        classes={{ root: classes.inputRoot }}
                        placeholder="Enter your email"
                        labelWidth={0}
                    />
                    <br />
                    <Button variant="contained" onClick={() => setEmail('')} className={classes.button}>
                        SUBSCRIBE
                    </Button>
                </Grid>
                <Grid item={true} xs={12} sm={6} md={2} lg={2} className={classes.box}>
                    <Typography variant="h6" className={classes.title}>My Account</Typography>
                    <Button className={classes.buttonColor}>My Account</Button><br />
                    <Button className={classes.buttonColor}>Order History</Button><br />
                    <Button className={classes.buttonColor}>Wish List</Button><br />
                    <Button className={classes.buttonColor}>Returns</Button><br />
                </Grid>
                <Grid item={true} xs={12} sm={6} md={2} lg={2} className={classes.box}>
                    <Typography variant="h6" className={classes.title}>CONTACT US</Typography>
                    <Typography className={classes.signalLine}>
                        <LocationOnIcon className={classes.contactIcon} />
                        Gb road 123 london Uk
                    </Typography>
                    <br />
                    <Typography className={classes.signalLine}>
                        <PhoneIcon className={classes.contactIcon} /> +91 9876543210
                    </Typography>
                    <br />
                    <Typography className={classes.signalLine}>
                        <MailOutlineIcon className={classes.contactIcon} /> giftos@gmail.com
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default FooterHome;
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        backgroundColor: '#2d2d2d',
        color: '#ffffff',
        padding: '0rem 1rem 2rem 1rem'
    },
    socialIcon: {
        display: 'inline-flex',
        marginTop: '4rem'
    },
    iconColor: {
        color: colors.white
    },
    box: {
        padding: 15,
    },
    signalLine: {
        display: 'inline-flex',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 11,
        textTransform: 'uppercase'
    },
    contactIcon: {
        marginRight: 8
    },
    inputRoot: {
        background: colors.white,
        color: colors.black,

    },
    button: {
        background: '#f89cab',
        color: colors.white,
        marginTop: 12,
        borderRadius: 0
    },
    buttonColor: {
        color: colors.white,
    }
}));