import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import FeatureCard from './featureCard';
import { makeStyles } from '@material-ui/core/styles';

const WhyUsHome = (props) => {
    // css class states
    const classes = useStyles();
    const featureList = [
        {
            icon: <LocalShippingIcon fontSize="large"/>,
            title: 'Fast Delivery',
            message: 'We provide fast and free delivery on millions of items.',
            type: 'icon'
        },
        {
            icon: 'Free-delivery-vector-royalty-free-PNG.png',
            title: 'Free Shiping',
            message: 'We provide discounts on a variety of additional shipping options.'
        },
        {
            icon: <LocalGroceryStoreIcon fontSize="large"/>,
            title: 'Best Quality',
            message: 'We provide best quality products at low price',
            type: 'icon'
        }
    ];
    return (
        <Grid container="true" alignItems="center" justifyContent="center" className={classes.root}>
            <Typography variant="h4" className={classes.heading}>WHY SHOP WITH US</Typography>
            <Grid container="true" alignItems="center" justifyContent="space-between">
                {
                    featureList.map((item) => (
                        <Grid item="true" xs={4} key={item.title}>
                            <FeatureCard data={item} />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    );
};
export default WhyUsHome;

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '3rem 0rem'
    },
    heading: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
    }
}));