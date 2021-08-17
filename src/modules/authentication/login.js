import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import colors from '../../common/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(to bottom, #f1efef, #aba6a6)',
        float: 'left',
        width: '100%',
        padding: '21vh 0',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    inputBox: {
        margin: '0.5rem 0rem'
    },
    loginRoot: {
        width: 'fit-content',
        borderRadius: 5
    },
    imageRoot: {
        height: '29rem'
    },
    heading: {
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
    }
}));

const LoginForm = (props) => {
    // Css state
    const classes = useStyles();
    // component states
    const [checkedValue, setCheckedValue] = useState(false);
    
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
                    <Grid sm={12} xs={12} md={4} lg={4}>
                        <div className={classes.details}>
                            <Grid container="true" direction="row" alignItems="center" justifyContent="center">
                                <Typography variant="h5" className={classes.heading} >
                                    Login Now
                                </Typography>
                            </Grid>
                            <CardContent className={classes.content}>
                                <Typography variant="body1" >
                                    Username
                                </Typography>
                                <Grid className={classes.inputBox}>
                                    <TextField variant="outlined" fullWidth="true"/>
                                </Grid>
                                <Typography variant="body1" >
                                    Password
                                </Typography>
                                <Grid className={classes.inputBox}>
                                    <TextField variant="outlined" type="password" fullWidth="true" />
                                </Grid>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checkedValue}
                                            onChange={() => setCheckedValue(!checkedValue)}
                                            color="secondary"
                                        />
                                    }
                                    label="Remember Me"
                                />
                                <Grid>
                                    <Button variant="contained" className={classes.button}>
                                        Submit
                                    </Button>
                                </Grid>
                            </CardContent>
                        </div>
                    </Grid>
                    <Grid sm={12} xs={12} md={4} lg={4}>
                        <img
                            className={classes.imageRoot}
                            src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
                            alt=""
                        />
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
}

export default LoginForm;