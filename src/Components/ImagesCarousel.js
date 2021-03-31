import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        position: "relative",
        width: 100 +"%",
        paddingTop: 48+"%", 
        // top: -20,
        backgroundImage: props => `url(${props.url})`,
        objectFit: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        "&:after": {
            content: '" "',
            backgroundImage: "url(https://cdn.shopify.com/s/files/1/0436/7482/8957/t/2/assets/shape-1.png?v=10036672874789815683)",
            width: 100+"%",
            height: 132,
            position: "absolute",
            left: 0,
            bottom: -1,
            transform: "rotate(180deg)",
        },
        [theme.breakpoints.between("xs",600)]: {
            paddingTop: 100+"%",
            marginTop: 80,  
        },
        [theme.breakpoints.between(600,700)]: {
            paddingTop: 80+"%",  
        },
        [theme.breakpoints.between(700,800)]: {
            paddingTop: 70+"%",  
        },
        [theme.breakpoints.between(800,900)]: {
            paddingTop: 60+"%",  
        },
        [theme.breakpoints.between(900,1100)]: {
            paddingTop: 50+"%",  
        },
        
        
    },
    content: {
        height: "100%",
        position: "relative",
        "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: "black",
            borderRadius: 30,
            opacity:0.8,
        },
        
    },
    gridContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        height: "120%",
    },
    discription: {
        position: 'relative',
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px",
        }
    },
    Button: {
        color: "white",
        border: "2.5px solid white",
        fontFamily: "'Courgette', cursive",
        fontSize: 1.5+"rem",
        transition: "0.3s",
        borderRadius: 30,
        marginTop: 10,
        "&:hover":{
            color: "#fbce70",
            border: "2.5px solid #fbce70",
        },
        [theme.breakpoints.down("sm")]: {
            border: "1px solid white",
            fontSize: 0.75+"rem",
        }
    }

    // customShape: {
    //     position: "absolute",
    //     bottom: 0,
    //     left: 0,
    //     width: 100+"%",
    //     overflow: "hidden",
    //     lineHeight: 0,
    //     transform: "rotate(180deg)",
    //     backgroundColor: "transparent",
        
    //     "& svg": {
    //         position: "relative",
    //         display: "block",
    //         width: "calc(137% + 1.3px)",
    //         height: "112px",
    //     },
        
    // },
    // shapeFill: {
    //     fill: "#FFFFFF",
    // }
    
}))




function ImagesCarousel(props) {
    
    var items = [
        {
            name: "Random Name #2",
            description: "أهدي نفسك القهوه اللي تحبيها من كوفيك",
            url : "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/124465996_4178801792136401_1070811573874873035_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_ohc=UnMCv7O_Pm0AX_RJgA4&_nc_ht=scontent.ftun2-1.fna&oh=86e150e2eee90e5aefe2f217a5dc0b28&oe=607A6891",

        },
        
        {
            name: "Random Name #1",
            description: "مهما كانت الظروف طلع الباريستا اللي بداخلك مع ظرف كوفيك",
            url : "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/81547608_3303284069688182_7245083407095431168_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=hA_fwWzHuWQAX8BC2KK&_nc_ht=scontent.ftun2-1.fna&oh=2632f00d67e1f09546cb2d8c0440efeb&oe=60798624",
        },
        
        {
            name: "Random Name #2",
            description: " مع كوفيك مافي لف ودوران قهوتك دايم معاك",
            url : "https://scontent.ftun2-1.fna.fbcdn.net/v/t31.0-8/12371068_1236605276356082_7860503480136095934_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=19026a&_nc_ohc=52Y49SL53O8AX8wfx80&_nc_ht=scontent.ftun2-1.fna&oh=ff4f87dff7b43c1760eeb19665e9880e&oe=607C41C0",

        },
    ]

    return (
        <Carousel
        IndicatorIcon={""}
        
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
function Item(props) {
    const stylesProps = {
        url : props.item.url,
    }
    const Classes = useStyles(stylesProps)
    return (
        <>
        
        
        <Paper 
            square
            className={Classes.paperContainer}
            elevation={0}
            >
            <Grid direction="column" className={Classes.gridContainer} container justify="center" alignItems="center" >
                <Slide direction="up" in="true" >
                    <Grid item>
                        <Paper elevation={0} style={{backgroundColor:"transparent"}} >
                            <Box p={2} className={Classes.content}>
                                <Typography
                                className={Classes.discription}
                                variant={"h4"}
                                gutterBottom
                                align={"center"}
                                style={{ color: "#fbce70" }}
                                fontWeight={500}>
                                    <Box style={{fontFamily:"Almarai, sans-serif"}}>
                                        {props.item.description}
                                    </Box>
                                </Typography>

                                <Typography
                                className={Classes.discription}
                                variant={"h4"}
                                gutterBottom
                                align={"center"}
                                >
                                    <Button disableElevation variant="outlined" className={Classes.Button}>
                                        Shop Now
                                    </Button>
                                </Typography>
                                
                            </Box>
                        </Paper>
                    </Grid>
                </Slide>
            </Grid>

            
        </Paper>
        
        {/* <Paper elevation={0} className={Classes.customShape}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={Classes.shapeFill}></path>
            </svg>
        </Paper> */}
        </>
    )
}



export default ImagesCarousel
