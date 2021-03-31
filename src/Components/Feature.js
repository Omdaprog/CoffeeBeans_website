import { useEffect } from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Box} from '@material-ui/core';
import product from "./images/cofique_Product.svg"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundImage: "url(//cdn.shopify.com/s/files/1/0436/7482/8957/files/bg-icon-4_1920X.png?v=1595319648)",
        marginTop: -0,
        marginBottom: 80,
        backgroundPosition: "bottom 200px right",
        backgroundRepeat: "no-repeat",
        backgroundColor: "transparent",
        "& .MuiPaper-root": {
            backgroundColor: "transparent"
          }
    },

    card: {
        maxWidth: 400,
        margin: "auto",
        paddingTop: 30,
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
        backgroundSize: "35rem 35rem",
        [theme.breakpoints.down(415)]: {
            backgroundSize: "27rem 27rem",
        }
    },
    content: {
        textAlign: "left",
        padding: theme.spacing.unit * 3
    },
    divider: {
        margin: `${theme.spacing.unit * 3}px 0`
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
    backImage: {
        position: "relative",
        height: 540,
        zIndex: 0,
        right: 100,
        borderRadius: 30,
    },
    imageContainer: {
        position: "relative",
        zIndex: 10,
        top: -440,
    },
    
    margin5: {
        marginBottom: 5,
    },
    margin15: {
        marginBottom: 15,
    },
    margin20: {
        marginBottom: 20,
    },
    margin30: {
        marginBottom: 30,
    },
}))

function Feature() {

    var items = [
        {
            name: "قهوة كولومبية أحادية المصدر",
            description: "قهوة بريقيه محضرة من أجود أنواع حبوب قهوة أرابيكا المزروعة في كولومبيا",
            url : "//cdn.shopify.com/s/files/1/0436/7482/8957/files/icon-1_1920X.png?v=1595074421",
        },
        {
            name: "قهوة كولومبية أحادية المصدر",
            description: "قهوة بريقيه محضرة من أجود أنواع حبوب قهوة أرابيكا المزروعة في كولومبيا",
            url : "//cdn.shopify.com/s/files/1/0436/7482/8957/files/icon-3_1920X.png?v=1595074444",

        },
        {
            name: "قهوة كولومبية أحادية المصدر",
            description: "قهوة بريقيه محضرة من أجود أنواع حبوب قهوة أرابيكا المزروعة في كولومبيا",
            url : "//cdn.shopify.com/s/files/1/0436/7482/8957/files/icon-5_1920X.png?v=1595074459",

        },
        {
            name: "قهوة كولومبية أحادية المصدر",
            description: "قهوة بريقيه محضرة من أجود أنواع حبوب قهوة أرابيكا المزروعة في كولومبيا",
            url : "//cdn.shopify.com/s/files/1/0436/7482/8957/files/icon-2_1920X.png?v=1595074431",

        },
        {
            name: "قهوة كولومبية أحادية المصدر",
            description: "قهوة بريقيه محضرة من أجود أنواع حبوب قهوة أرابيكا المزروعة في كولومبيا",
            url : "//cdn.shopify.com/s/files/1/0436/7482/8957/files/icon-4_1920X.png?v=1595074451",

        },
        {
            name: "قهوة كولومبية أحادية المصدر",
            description: "قهوة بريقيه محضرة من أجود أنواع حبوب قهوة أرابيكا المزروعة في كولومبيا",
            url : "//cdn.shopify.com/s/files/1/0436/7482/8957/files/icon-6_1920X.png?v=1595074467",

        },
    ]

    const classes = useStyles()

    // Make framer motion animation work when the dom element in-view
    const containerVarientsOne = {
        visible: { x:0 },
        hidden: { x: -500 }
    }
    const containerVarientsTwo = {
        visible: { x:0 },
        hidden: { x: 700 }
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
        <Paper 
        elevation={0}
        className={classes.background} >
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                spacing={{lg:0 , sm: 8}}
                ref={ref}
                >
                <Grid item xs={11} lg={5}>
                    <Box  height={700} >
                        <Paper
                            component={motion.div}
                            variants={containerVarientsOne}
                            initial="hidden" 
                            animate={controls}
                            transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9], delay:0.1}} 
                            style={{ height: "inherit" }} elevation={0} 
                            
                            >

                            <img className={classes.backImage} src="//cdn.shopify.com/s/files/1/0436/7482/8957/files/img-4_1920X.jpg?v=1595319628" alt=""  />
                            <div className={classes.imageContainer}>
                                <Card 
                                    component={motion.div}
                                    
                                    variants={containerVarientsOne}
                                    transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9],delay:0.2}}
                                    raised 
                                    className={classes.card}>
                                        
                                    <CardMedia
                                        className={classes.media}
                                        image={product}
                                    />
                                    <CardContent className={classes.content}>
                                        <Typography
                                            // className={"MuiTypography--heading"}
                                            variant={"h5"}
                                            gutterBottom
                                            align={"center"}
                                        >
                                            <Box style={{fontFamily:"Almarai, sans-serif"}}>
                                                بن بريقيه يعطي أروما ساحرة           
                                            </Box>
                                        </Typography>
                                        <Typography
                                            className={"MuiTypography--subheading"}
                                            variant={"body1"}
                                            align={"center"}
                                        >
                                            <Box component={motion.div} style={{fontFamily:"Almarai, sans-serif"}} initial={{x:200}} animate={{x:0}}>
                                                قهوة بريقيه محضرة من أجود أنواع حبوب قهوة أرابيكا المزروعة في كولومبيا
                                            </Box>
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </div>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={11} lg={7} >
                    <Paper elevation={0}>
                        <Grid 
                            component={motion.div}
                            // ref={ref}
                            // variants={containerVarientsTwo}
                            // initial="hidden" 
                            // animate={controls}
                            // transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9], delay:0.5}}
                            container
                            justify= "flex-end"
                        >
                            
                            
                            <Grid
                                component={motion.div}
                                // ref={ref}
                                variants={containerVarientsTwo}
                                initial="hidden" 
                                animate={controls}
                                transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9], delay:0.2}}
                                item>
                                <Typography align={"right"} variant="h3">
                                <Box mr={5} mb={2.5} mt={8} style={{fontFamily:"Almarai, sans-serif"}}>
                                    ما الذي يجعل قهوتنا مميزة؟  
                                </Box>
                                </Typography>
                            </Grid>
                            <Grid 
                                component={motion.div}
                                // ref={ref}
                                variants={containerVarientsTwo}
                                initial="hidden" 
                                animate={controls}
                                transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9], delay:0.25}}
                                item  lg={8} xs={11} >
                                <Typography align={"right"} paragraph={true} >
                                    <Box mr={5} mb={2} style={{fontFamily:"Almarai, sans-serif"}} onClick={() => console.log("hello" + ref)}>
                                    قهوة بريقيه محضرة من أجود أنواع حبوب قهوة أرابيكا المزروعة في كولومبيا،كولومبية أحادية المصدر,
                                    </Box>
                                </Typography>
                            </Grid>
                            {items.map((item, i) =>
                                <Grid 
                                    component={motion.div}
                                    // ref={ref}
                                    variants={containerVarientsTwo}
                                    initial="hidden" 
                                    animate={controls}
                                    transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9], delay:`${ 0.3+(i/10)}` ,}}
                                    onClick={()=>alert(i)}
                                    className={classes.margin30} key={i} item xs={11} sm={6} >
                                    <Grid container justify="space-around">
                                        
                                        <Grid item xs={9}>
                                            <Grid
                                                container
                                                direction="column"
                                            >
                                                <Grid className={classes.margin5} item>
                                                    <Typography variant="h5" align={"right"}>
                                                        <Box style={{fontFamily:"Almarai, sans-serif"}}>
                                                            {item.name}
                                                        </Box>
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography align={"right"} paragraph={true}>
                                                        <Box style={{fontFamily:"Almarai, sans-serif"}}>
                                                            {item.description}
                                                        </Box>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item sm={2} xs={3}>
                                            <img src={item.url} alt="" />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Feature

