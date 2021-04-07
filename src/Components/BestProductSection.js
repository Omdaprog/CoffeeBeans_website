import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const useStyles = makeStyles((theme) => ({
    background: {
        backgroundImage: "url('//cdn.shopify.com/s/files/1/0436/7482/8957/files/bg-icon-1.png?v=1595321414')",
        "& .MuiPaper-root": {
            backgroundColor: "transparent"
        },
        paddingBottom: 40,
        float: "left",
        width: 100+"%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        backgroundColor: "#fff",
    },
    contentIcon: {
        content: "",
        backgroundImage: "url(//cdn.shopify.com/s/files/1/0436/7482/8957/t/2/assets/heading_image.png?v=13311807403672058966)",
        backgroundRepeat: "no-repeat",
        margin: "0 auto 10",
        display: "inline-block",
        width: 81,
        height: 86,
        marginBottom: 10,
    },
    card: {
        position: "relative", 
        maxWidth: 330,
        margin: "auto",
        borderRadius: 30,
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
        backgroundColor: "#fff !important"
    },
    media: {
        paddingTop: "100%",
        backgroundImage:  props => `url(${props.url1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "0.8s ease",
        "&:hover": {
            backgroundImage: props => `url(${props.url2})`,
        },
    },
    content: {
        textAlign: "left",
        padding: theme.spacing(3)
    },
    divider: {
        margin: `${theme.spacing(3)}px 0`
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    
    featurecontent: {
        height: 400,
        width: 820,
        backgroundColor: "#101010",
    },
    itemMargin: {
        margin: "0 12px",
        [theme.breakpoints.down(650)]: {
            margin: 0 ,  
        },
        
    }
}))

function Item(props) {
    const stylesProps = {
        url1 : props.item.url1,
        url2 : props.item.url2,
    }
    const classes = useStyles(stylesProps)

    // Make framer motion animation work when the dom element in-view
    const containerVarientsOne = {
        visible: { y:0 },
        hidden: { y: 200 }
    }
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }     
    }, [controls, inView])

    return (
        <Grid item>
            <Box height={580} className={classes.itemMargin}>
                <Paper style={{ height: "inherit" }} elevation={0} >
                    <Card
                        ref={ref}
                        component={motion.div}
                        variants={containerVarientsOne}
                        initial="hidden" 
                        animate={controls}
                        transition={{duration: 0.2, ease: [0.6, 0.01, -0.05, 0.9], delay:`0.${props.key}` }} 
                        className={classes.card}>
                        <CardMedia
                            className={classes.media}
                        />
                        <CardContent className={classes.content}>
                            <Typography
                                className={"MuiTypography--heading"}
                                variant={"h5"}
                                gutterBottom
                                align={"center"}
                            >
                                <Box>
                                    {props.item.name}
                                </Box>
                            </Typography>
                            <Typography
                                className={"MuiTypography--subheading"}
                                variant={"body1"}
                                align={"center"}
                            >
                                <Box width={"80%"} mb={2.5} mx={"auto"}>
                                    {props.item.description}
                                </Box>
                            </Typography>
                            <Typography
                                className={"MuiTypography--subheading"}
                                variant={"h6"}
                                align={"center"}
                            >
                                <Box width={"80%"} mx={"auto"}>
                                    Rs.{props.item.price}
                            </Box>
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Box>
        </Grid>
    )
}

function BestProductSection(props) {

    const classes = useStyles();
    
    var items = [
        {
            name: "Special Strong Coffee",
            description: "Brew tempus turpis at metus scelerisque placera...",
            price: "250",
            url1 : "//cdn.shopify.com/s/files/1/0436/7482/8957/products/p1_large.jpg?v=1597924393",
            url2 : "//cdn.shopify.com/s/files/1/0436/7482/8957/products/p3_1415dff1-c937-4300-9eaf-38d1e12a0581_large.jpg?v=1597924399",
        },
        {
            name: "Dried Pure Instant Coffee",
            description: "Brew tempus turpis at metus scelerisque placera...",
            price: "350",
            url1 : "//cdn.shopify.com/s/files/1/0436/7482/8957/products/p1_large.jpg?v=1597924393",
            url2 : "//cdn.shopify.com/s/files/1/0436/7482/8957/products/p3_1415dff1-c937-4300-9eaf-38d1e12a0581_large.jpg?v=1597924399",

        },
        {
            name: "Lemon Flavor Coffee",
            description: "Brew tempus turpis at metus scelerisque placera...",
            price: "550",
            url1 : "//cdn.shopify.com/s/files/1/0436/7482/8957/products/p4_large.jpg?v=1597924396",
            url2 : "//cdn.shopify.com/s/files/1/0436/7482/8957/products/p2_large.jpg?v=1597924396",

        },
        {
            name: "Decaffeinated Coffee",
            description: "Brew tempus turpis at metus scelerisque placera...",
            price: "150",
            url1 : "//cdn.shopify.com/s/files/1/0436/7482/8957/products/p4_large.jpg?v=1597924396",
            url2 : "//cdn.shopify.com/s/files/1/0436/7482/8957/products/p2_large.jpg?v=1597924396",

        },
    ]

    // Make framer motion animation work when the dom element in-view
    const containerVarientsOne = {
        visible: { opacity:1 ,scale:1},
        hidden: { opacity:0 ,scale:0}
    }
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
          
        console.log()      
    }, [controls, inView])
    

    return (
        <>
            <Paper elevation={0} className={classes.background}>
                <Box>
                    <Grid 
                    container
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                    >
                        <Grid item>
                            <Paper elevation={0}>
                                <Box 
                                    ref={ref}
                                    component={motion.div}
                                    variants={containerVarientsOne}
                                    initial="hidden" 
                                    animate={controls}
                                    transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9], delay:0.1}}
                                    mb={2.5} className={classes.contentIcon}></Box>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Typography variant={"h3"}>
                                <Box
                                    component={motion.div}
                                    ref={ref}
                                    variants={containerVarientsOne}
                                    initial="hidden" 
                                    animate={controls}
                                    transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9], delay:0.1}}
                                    style={{fontFamily:"Almarai, sans-serif"}}
                                    mb={4} >القهوة الأكثر شراءً</Box>
                                
                            </Typography>
                        </Grid>
                        
                        <Grid item>
                            <Grid
                                direction={"row"}
                                justify={'center'}
                                alignItems={'center'}
                                container>
                                {items.map((item, id) =>
                                    <Item key={id} item={item} />
                                )}

                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}

export default BestProductSection
