import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import colors from '../../common/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'rgb(25 57 109)',
        color: colors.white,
        display: 'inline-flex'
    },
    imageRoot: {
        height: '26rem'
    },
    subheading: {
        color: '#ffbe00',
        fontWeight: 'bold'
    },
    heading: {
        fontWeight: 'bold'
    },
    box: {
        textAlign: 'center',
        margin: '0 auto',
    },
    button: {
        background: '#DE6262',
        color: colors.white,
        fontWeight: 'bold',
        padding: '9px 56px',
        marginTop: 8
    }
}));

const SaleOfferCard = (props) => {
    const classes = useStyles();
    return (
        <Grid
            container="true"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className={classes.root}
        >
            <img
                className={classes.imageRoot}
                src="https://image.4meee.com/article/230399/fb9eb03e3117d70290cd8af3581f22dd.jpg"
                alt=""
            />
            <Grid className={classes.box}>
                <Typography variant="h6" className={classes.subheading}>
                    70% SALE OFF
                    </Typography>
                <Typography variant="h3" className={classes.heading}>
                    Collect Your
                    </Typography>
                <Typography variant="h3" className={classes.heading}>
                    Kids Collection
                </Typography>
                <Button variant="contained" className={classes.button}>
                    SHOP NOW
                </Button>
            </Grid>
        </Grid>
    );
}

export default SaleOfferCard;