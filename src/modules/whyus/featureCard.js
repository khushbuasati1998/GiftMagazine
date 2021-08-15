import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const FeatureCard = (props) => {
    // css class states
    const classes = useStyles();
    // Parent component props
    const { icon, title, message, type } = props.data;

    return (
        <Grid alignItems="center" className={classes.box}>
            {
                type === 'icon' ?
                    icon
                    :
                    <img
                        src={require('../../assests/freeIcon.svg')}
                        alt={''}
                    />
            }
            <Typography variant="h6" className={classes.titleMargin}>{title}</Typography>
            <Typography variant="body1">{message}</Typography>
        </Grid>
    );
};
export default FeatureCard;
const useStyles = makeStyles((theme) => ({
    box: {
        textAlign: 'center',
        margin: 50,
        backgroundColor: 'rgb(249, 248, 247)',
        padding: 25,
        borderRadius: 5,
    },
    titleMargin: {
        marginTop: 10,
        marginBottom: 4
    }
}));