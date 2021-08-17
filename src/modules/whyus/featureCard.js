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
                        src="data:image/png;base64,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"
                        alt=""
                        style={{ height: 35 }}
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
        backgroundColor: 'rgb(224 223 222 / 91%)',
        padding: 25,
        borderRadius: 5,
        minHeight: '14rem'
    },
    titleMargin: {
        marginTop: 10,
        marginBottom: 4
    }
}));