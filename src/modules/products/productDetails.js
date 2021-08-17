import React from 'react';
import {
    Dialog, DialogTitle, DialogContent, Grid, Typography,
    IconButton, Slide, Divider, MenuItem, FormControl, Select,
    List, ListItem, ListItemIcon, ListItemText, Button
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import colors from '../../common/colors';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Transition = React.forwardRef(function Transition(props1, ref) {
    return <Slide direction="up" ref={ref} {...props1} />;
});

const ProductDetails = (props) => {

    // css states
    const classes = useStyles();
    // parent component props
    const { open, onClose, data } = props;
    const { url, name, company, price, colour, Size, instructions } = data;
    return (
        <Dialog
            onClose={onClose}
            open={open}
            TransitionComponent={Transition}
            classes={{ paper: classes.paper, scrollPaper: classes.scrollPaper }}
            disableBackdropClick={true}
        >
            <DialogTitle>
                <Grid
                    container={true}
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Typography variant="h4">Product Details</Typography>
                    <IconButton onClick={onClose}>
                        <CancelIcon fontSize="large" color="secondary" />
                    </IconButton>
                </Grid>
            </DialogTitle>
            <DialogContent classes={{ root: classes.hideScrollbar }}>
                <Grid
                    container={true}
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid xs={4}>
                        <img alt="" src={url} className={classes.image} />
                    </Grid>
                    <Grid xs={8}>
                        <Typography>Brand: {company}</Typography>
                        <Typography variant="h4">{name}</Typography>
                        <Divider className={classes.divider} />
                        <Typography className={classes.boldFont}>Price: <span className={classes.priceColor}>₹{price}</span></Typography>
                        <Typography>Inclusive of all taxes</Typography>
                        <Typography className={classes.boldFont}>Colour: <span className={classes.normalFont}>{colour}</span></Typography>
                        {
                            Size ?
                                <Typography className={classes.boldFont}>Size:
                                    <FormControl className={classes.switchMargin}>
                                        <Select>
                                            <MenuItem value={'S'}>S</MenuItem>
                                            <MenuItem value={'M'}>M</MenuItem>
                                            <MenuItem value={'L'}>L</MenuItem>
                                            <MenuItem value={'XL'}>XL</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Typography>
                                : null
                        }
                        {
                            instructions && instructions.length ?
                                instructions.map((item) => (
                                    <List classes={{ padding: classes.listPadding }}>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    </List>
                                ))
                                : null
                        }
                        <Button variant="contained" className={classes.button}>Buy Now</Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};
export default ProductDetails;
const useStyles = makeStyles((theme) => ({
    paper: {
        width: '100vw',
        maxHeight: '90vh',
        height: '83vh',
        minHeight: '70vh',
        borderRadius: 0,
        margin: 0,
        bottom: 0,
        maxWidth: '100vw',
        padding: '1rem 7rem 1rem 7rem'
    },
    scrollPaper: {
        alignItems: 'flex-end',
        marginLeft: '-50px',
        marginRight: '-50px',
        overflow: 'hidden'
    },
    image: {
        height: '31rem'
    },
    priceColor: {
        color: '#DE6262',
    },
    divider: {
        marginTop: 10,
        marginBottom: 10
    },
    boldFont: {
        fontWeight: 'bold',
        margin: '4px 0px'
    },
    normalFont: {
        fontWeight: 'normal'
    },
    switchMargin: {
        marginLeft: 8
    },
    listPadding: {
        padding: 0
    },
    hideScrollbar: {
        '-ms-overflow-style': 'none',  /* IE and Edge */
        'scrollbarWidth': 'none',  /* Firefox */
        '&::-webkit-scrollbar': {
            display: 'none'   /* Hide scrollbar for Chrome, Safari and Opera */
        }
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