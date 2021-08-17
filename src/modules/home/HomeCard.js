import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import colors from '../../common/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#f9a5b3ba',
        float: 'left',
        width: '100%',
    },
    imageRoot: {
        height: '29rem'
    },
    heading: {
        marginBottom: 10,
        color: colors.white,
        fontWeight: 'bold',
    },
    box: {
        textAlign: 'center',
        margin: '0 auto',
    },
}));

const HomeCard = (props) => {
    // Css state
    const classes = useStyles();
    return (
        <Grid
            container="true"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className={classes.root}
        >
            <Grid className={classes.box}>
                <Typography variant="h3" className={classes.heading}>
                    Welcome To <br/>Gift Magazine
                </Typography>
                <Typography variant="h5">
                    Buy your favourite product from here...
                </Typography>
            </Grid>
            <img
                className={classes.imageRoot}
                src="https://dbv47yu57n5vf.cloudfront.net/s3fs-public/editorial/my/2017/December/22/shutterstock_641814016.jpg"
                alt=""
            />
        </Grid>
    );
}
export default HomeCard;