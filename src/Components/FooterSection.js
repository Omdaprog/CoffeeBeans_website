import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import CopyrightIcon from '@material-ui/icons/Copyright';
import logo from "./images/cofique_logo.svg"
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    BackgroundColor: {
        backgroundColor: "#ebc39f",
    },
    root: {
        padding: '5px 7px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        margin: "auto",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    customShape: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 100+"%",
        overflow: "hidden",
        lineHeight: 0,
        backgroundColor: "transparent",
        "& svg": {
            position: "relative",
            display: "block",
            width: "calc(137% + 1.3px)",
            height: "112px",
        },
        
    },
    shapeFill: {
        fill: "#FFFFFF",
    }
}))

function FooterSection() {
    const classes = useStyles()

    return (
        <>
            <Paper  style={{position:"relative"}} >
                <Paper elevation={0} className={classes.customShape}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={classes.shapeFill}></path>
                    </svg>
                </Paper>
                <Box 
                className={classes.BackgroundColor} 
                height={"100%"}
                width={"100%"}
                mt={20}
                pt={7}
                >
                    <Grid 
                    container
                    justify={"center"}
                    alignItems={"center"}
                    
                    >
                        <Grid item lg={3} md={5} sm={10} xs={11}>
                            <Typography
                                className={"MuiTypography--heading"}
                                variant={"h5"}
                                gutterBottom
                                align={"center"}
                                style={{ color: "#4e342e" }}
                                fontWeight={500}
                                
                            >
                                <Box mt={6} letterSpacing={3} >
                                    About us
                                </Box>
                            </Typography>
                            <Typography
                                className={"MuiTypography--heading"}
                                variant={"h6"}
                                gutterBottom
                                align={"center"}
                                style={{ color: "#424242" }}
                            >
                                <Box letterSpacing={3} lineHeight={2} >
                                    Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit. Quisquemos sodales suscipit tortor ditaemcos condimentum lacus meleifend.
                                </Box>
                            </Typography>
                            
                        </Grid>

                        <Grid item lg={3} md={5} sm={10} xs={11}>
                            <Box textAlign={"center"}>
                                <img height={300} width={400} src={logo} alt=""/>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={5} sm={10} xs={11}>
                            <Typography
                                className={"MuiTypography--heading"}
                                variant={"h5"}
                                gutterBottom
                                align={"center"}
                                style={{ color: "#4e342e" }}
                                fontWeight={500}
                            >
                                <Box mt={6} letterSpacing={3}>
                                Contact us
                                </Box>
                            </Typography>
                            <Typography
                                className={"MuiTypography--heading"}
                                variant={"h6"}
                                gutterBottom
                                align={"center"}
                            >
                                <Box style={{ color: "#424242" }} letterSpacing={1} lineHeight={2}>
                                    No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                                </Box>
                                <Box  mb={2} letterSpacing={3}>
                                    support@example.com
                                </Box>
                                <Box style={{ color: "#424242" }} mb={2} letterSpacing={3}>
                                    +91 1234567890
                                </Box>
                            </Typography>
                            <Typography
                                className={"MuiTypography--heading"}
                                variant={"h5"}
                                gutterBottom
                                align={"center"}
                                style={{ color: "#4e342e" }}
                                fontWeight={500}
                            >
                                <Box>
                                    Newsletter
                                </Box>
                            </Typography>
                            
                            <Paper component="form" className={classes.root}>
                                <InputBase
                                className={classes.input}
                                placeholder="Your Email"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                                    Subscribe
                                </Button>
                            </Paper>
                            
                            <Box height={70} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                                <Box ml={2}><TwitterIcon style={{ color: "#e85e5e" }} fontSize="large"/></Box>
                                <Box ml={2}><InstagramIcon style={{ color: "#e85e5e" }} fontSize="large"/></Box>
                                <Box ml={2}><FacebookIcon style={{ color: "#e85e5e" }} fontSize="large"/></Box>
                            </Box>
                        </Grid>
                        
                    </Grid>
                    <Divider />
                    <Typography align="center" >
                        <Box style={{color:"#4e4a4a", fontFamily: "'Courgette', cursive",}} height={50} display="flex" justifyContent="center" alignItems="center" width={"100wv"} >
                            <Box m={0.3}>
                                Copyright
                            </Box>
                            <CopyrightIcon/>
                            <Box m={0.3}>
                                2021 By <a href="/" style={{color:"#4e4a4a",}}> Imed Ben Kalia</a>
                            </Box>
                        </Box>
                    </Typography>
                    
                </Box>
            </Paper>
        </>
    )
}

export default FooterSection
