import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProductCard from './productCard';
import { makeStyles } from '@material-ui/core/styles';
import { productList } from './productData';

const ProductList = (props) => {
    // css class states
    const classes = useStyles();
    return (
        <Grid container="true" alignItems="center" justifyContent="center" className={classes.root}>
            <Typography variant="h4" className={classes.heading}>LATEST PRODUCTS</Typography>
            <Grid container="true" alignItems="center" spacing={7} className={classes.listRoot}>
                {
                    productList.map((item) => (
                        <Grid item="true" xs={4} key={item.title}>
                            <ProductCard data={item} />
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    );
};
export default ProductList;

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '4rem 6rem'
    },
    heading: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        marginBottom: '3rem'
    },
    listRoot: {
        background: '#e8d8d8'
    }
}));