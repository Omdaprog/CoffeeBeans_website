import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Fragment, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import logo from "./images/cofique_logo.svg"
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';


const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        alignItems: "center",
    },
    next_to_title: {
        flexGrow: 0.05,
    },
    navbarPadding: {
        position: "relative",
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 10 , 
            paddingRight: 10 ,
            paddingTop: 10,    
        },
        [theme.breakpoints.between('sm','xs')]: {
            paddingLeft: 50 , 
            paddingRight: 50 ,
            paddingTop: 20,    
        },
        [theme.breakpoints.between('sm','md')]: {
            paddingLeft: 110 , 
            paddingRight: 110 ,   
            paddingTop:16,
            paddingBottom: 10, 
        },
        paddingLeft: 220 , 
        paddingRight: 220 ,
        paddingTop:16, 
        paddingBottom: 10, 
    },
    navbarButton: {
        fontSize: 20,   
        letterSpacing: 0.05+"em", 
        color: "#010101",
        transition: "0.5s ease",
        borderRadius: 15,
        "&:hover" :{
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
            opacity: 0.6,
            
        }
    },
    NavLogo: {
        backgroundImage:`url("${logo}")`,
        backgroundSize: "8em 8em",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        width: 8+"em",
        height: 8+"em",
        top: -30,
        left: props => `${(props.logoWidth / 2) - 82 }px`,
        [theme.breakpoints.down('xs')]: {
            backgroundSize: "7em 7em",  
            width: 7+"em",
            height: 7+"em",
            top: -25,
        }
    }
}));

export default function MenuDrawer({ open }) {
    // change navbar background
    const [navBar, setNavbar] = useState(true ? window.innerWidth <=570 : false)
    const changeBackground = () => {
        if((window.scrollY >= 80) || (Width <= 568)){
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);
    const [state, setState] = useState({
        left: false,
    });


    // change logo position
    const [Width, setWith] = useState(window.innerWidth)
    const currnetWith = () => {
        setWith(window.innerWidth)
    }
    window.addEventListener('resize', currnetWith);

    // material Ui classes 
    const stylesProps = {
        logoWidth : Width,
    }
    const classes = useStyles(stylesProps);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <div>
            {['left'].map((anchor) => (
                <Fragment key={anchor}>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </Fragment>
            ))}
            <AppBar elevation={navBar ? 10 : 0} color={navBar ? "white" :"transparent"} style={{transition:0.5+"s"}} position="fixed">
                <Toolbar className={classes.navbarPadding} >
                    <Hidden mdUp>
                        <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton && classes.navbarButton} color="inherit" aria-label="menu">
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Hidden>
                    <Hidden smDown>
                        <Typography  className={classes.next_to_title}>

                            <Button  className={classes.navbarButton} size="large" variant="text">HOME</Button>
                        </Typography>
                    </Hidden>
                    <Hidden smDown>
                        <Typography  variant="h6" className={classes.next_to_title}>
                            <Button className={classes.navbarButton} size="large" variant="text">SHOP</Button>
                        </Typography>
                    </Hidden>
                    <Typography variant="h6" className={classes.title}>
                        <Box  className={classes.NavLogo} textAlign={"center"}>
                        </Box>
                    </Typography>
                    <Typography  variant="h6" className={classes.next_to_title}>
                        
                        <IconButton className={classes.navbarButton} aria-label="Shopping_cart" component="span">
                            <LocalMallOutlinedIcon fontSize="large" />
                        </IconButton>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}