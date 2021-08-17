import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ProductDetails from './productDetails';

const ProductCard = (props) => {
    // css class states
    const classes = useStyles();
    // Parent component props
    const { url, name, company, price } = props.data;
    // component states start here
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    return (
        <Card>
            <CardActionArea onClick={() => setShowDetailsModal(true)}>
                <Grid container="true" justifyContent="center" className={classes.hoverImage}>
                    <img alt="" src={url} className={classes.image} />
                </Grid>
                <CardContent className={classes.alignCenter}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {company}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.alignCenter}>
                <Grid container="true" alignItems="center" justifyContent="space-between">
                    <Button size="small" gutterBottom >
                        Price: {price}
                    </Button>
                    <Button size="small" className={classes.button} onClick={() => setShowDetailsModal(true)}>
                        Buy Now
                </Button>
                </Grid>
            </CardActions>
            {
                showDetailsModal ?
                    <ProductDetails
                        open={showDetailsModal}
                        onClose={() => setShowDetailsModal(false)}
                        data={props.data}
                    />
                    : null
            }
        </Card>
    );
};
export default ProductCard;
const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: 'rgb(238, 238, 238)',
        position: 'relative',
        padding: 10,
        marginTop: 25,
    },
    titleMargin: {
        marginTop: 10,
        marginBottom: 4
    },
    image: {
        height: '12rem'
    },
    hoverImage: {
        '-webkit-transform': 'scale(1)',
        'transform': 'scale(1)',
        '-webkit-transition': '.3s ease-in-out',
        'transition': '.3s ease-in-out',
        '&:hover': {
            '-webkit-transform': 'scale(1.3)',
            'transform': 'scale(1.3)',
        },
    },
    button: {
        color: '#DE6262',
        fontWeight: 'bold',
        fontSize: 14
    },
    alignCenter: {
        textAlign: 'center'
    },

}));