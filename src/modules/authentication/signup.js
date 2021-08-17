import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import colors from '../../common/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(to bottom, #f1efef, #aba6a6)',
        float: 'left',
        width: '100%',
        padding: '14vh 0',
    },
    inputBox: {
        margin: '0.5rem 0rem'
    },
    loginRoot: {
        width: 'fit-content',
        borderRadius: 5
    },
    heading: {
        marginTop: 20,
        marginBottom: 30,
        fontWeight: 800,
        fontSize: 30,
        color: '#DE6262',
    },
    button: {
        background: '#DE6262',
        color: colors.white,
        fontWeight: 'bold',
        padding: '9px 78px',
        marginTop: 12,
        marginBottom: 8
    },
}));

const Signup = (props) => {
    // Css state
    const classes = useStyles();

    return (
        <Grid
            container="true"
            direction="row"
            alignItems="center"
            justifyContent="center"
            className={classes.root}
        >
            <Card classes={{ root: classes.loginRoot }}>
                <Grid
                    container="true"
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid container="true" direction="row" alignItems="center" justifyContent="center">
                        <Typography variant="h5" className={classes.heading} >Create Account</Typography>
                    </Grid>
                    <CardContent>
                        <Typography variant="body1" >Your name</Typography>
                        <Grid className={classes.inputBox}>
                            <TextField variant="outlined" fullWidth="true" />
                        </Grid>
                        <Typography variant="body1" >Mobile number</Typography>
                        <Grid className={classes.inputBox}>
                            <TextField variant="outlined" fullWidth="true" />
                        </Grid>
                        <Typography variant="body1" >Email (optional)</Typography>
                        <Grid className={classes.inputBox}>
                            <TextField variant="outlined" fullWidth="true" />
                        </Grid>
                        <Typography variant="body1" >Password</Typography>
                        <Grid className={classes.inputBox}>
                            <TextField
                                variant="outlined"
                                type="password"
                                placeholder="At least 6 characters"
                                fullWidth="true"
                            />
                        </Grid>
                        <Typography variant="body1">
                            We will send you a text to verify your phone.
                            Message and Data rates may apply.
                        </Typography>
                        <Grid>
                            <Button variant="contained" fullWidth="true" className={classes.button}>
                                Submit
                            </Button>
                        </Grid>
                    </CardContent>
                </Grid>
            </Card >
        </Grid >
    );
}
export default Signup;