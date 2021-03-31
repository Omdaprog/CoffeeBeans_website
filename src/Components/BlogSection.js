
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden';
import { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles((theme) => ({
    ContentImage: {
        backgroundImage: "url('https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/158798696_4520641144619129_4519217861407252068_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=gc_TrKsHlsEAX_5WH-_&_nc_ht=scontent.ftun2-1.fna&oh=696f152142f6a753893bd23015d64385&oe=607B69A2')",
        "& .MuiPaper-root": {
            backgroundColor: "transparent"
        },
        width: 100%+"%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        borderRadius: 30,
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
        marginBottom: 25,
        marginTop: 40,
    },
}))


function BlogSection() {
    const classes = useStyles()

    const containerVarientsOne = {
        visible: { opacity:1 ,scale:1},
        hidden: { opacity:0 ,scale:0}
    }
    const controls = useAnimation();
    const controlsTwo = useAnimation();
    const [ref, inView] = useInView();
    const [refTwo, inViewTwo] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
        if (inViewTwo) {
            controlsTwo.start("visible")
        } 
        console.log()      
    }, [controls,controlsTwo, inView, inViewTwo])

    return (
        <>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                
                    <Grid item sm={11}>

                        <Grid 
                        container
                        justify="center"
                        alignItems="center"

                        >
                            <Grid 
                                item sm={5} xs={10}
                                ref={ref}
                                component={motion.div}
                                variants={containerVarientsOne}
                                initial="hidden" 
                                animate={controls}
                                transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9], delay:0.1}}
                            >
                                <Box className={classes.ContentImage} pt={"100%"}>
                                </Box>    
                            </Grid>
                            <Grid 
                                item sm={6} xs={10}
                                component={motion.div}
                                variants={containerVarientsOne}
                                initial="hidden" 
                                animate={controls}
                                transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9], delay:0.2}}
                                >
                                <Typography
                                    className={"MuiTypography--heading"}
                                    variant={"h4"}
                                    gutterBottom
                                    align={"center"}

                                >
                                    <Box style={{fontFamily:"Almarai, sans-serif"}}>
                                        ما هي القهوة المختصة؟
                                        </Box>
                                </Typography>

                                <Typography
                                    className="MuiTypography--subheading"
                                    variant="subtitle1"
                                    align="center"
                                >
                                    <Box style={{fontFamily:"Almarai, sans-serif" , color:"rgba(0, 0, 0, 0.87)", lineHeight:"1.75rem"}} width={"80%"} mb={2.5} mx={"auto"}>
                                        لقهوة المختصة هي قهوة طازجة تتم معالجتها وشحنها بعناية، معروفة المصدر، والارتفاع الذي زرعت فيه وكذلك   تاريخ تحميصها، آيضا مُراعى فيها معايير وطرق التحضير الصحيحة. كل هذا يسهم في تقديم كوب غني بالنكهات     والمذاقات المميزه، وهذا يميزها عن غيرها من أنواع القهوة التجارية الاخرى
                                        </Box>
                                </Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid ref={refTwo} item sm={11}>
                        <Grid 
                        justify="center"
                        alignItems="center"
                        container>
                            <Hidden xsDown>
                                <Grid 
                                    item sm={6} xs={10}
                                    component={motion.div}
                                    
                                    variants={containerVarientsOne}
                                    initial="hidden" 
                                    animate={controlsTwo}
                                    transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9], delay:0.1}}
                                >
                                <Typography
                                    className={"MuiTypography--heading"}
                                    variant={"h4"}
                                    gutterBottom
                                    align={"center"}
                                >
                                    <Box style={{fontFamily:"Almarai, sans-serif"}}>
                                        ما هي القهوة المختصة؟
                                    </Box>
                                </Typography>

                                <Typography
                                    variant={"subtitle1"}
                                    align={"center"} 
                                >
                                    <Box style={{fontFamily:"Almarai, sans-serif", color:"rgba(0, 0, 0, 0.87)"}} width={"80%"} mb={2.5} mx={"auto"}>
                                        لقهوة المختصة هي قهوة طازجة تتم معالجتها وشحنها بعناية، معروفة المصدر، والارتفاع الذي زرعت فيه وكذلك   تاريخ تحميصها، آيضا مُراعى فيها معايير وطرق التحضير الصحيحة. كل هذا يسهم في تقديم كوب غني بالنكهات     والمذاقات المميزه، وهذا يميزها عن غيرها من أنواع القهوة التجارية الاخرى
                                    </Box>
                                </Typography>
                                </Grid>
                            </Hidden>

                            <Grid 
                                
                                item sm={5} xs={10}
                                component={motion.div}
                                variants={containerVarientsOne}
                                initial="hidden" 
                                animate={controlsTwo}
                                transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9], delay:0.2}}
                            >
                                <Box className={classes.ContentImage} pt={"100%"}>
                                </Box> 
                            </Grid>

                            <Hidden smUp>
                                <Grid 
                                    item sm={5} xs={10}
                                    component={motion.div}
                                    variants={containerVarientsOne}
                                    initial="hidden" 
                                    animate={controlsTwo}
                                    transition={{duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9], delay:0.2}}
                                >
                                <Typography
                                    className={"MuiTypography--heading"}
                                    variant={"h4"}
                                    gutterBottom
                                    align={"center"}
                                >
                                    <Box>
                                        ما هي القهوة المختصة؟
                                        </Box>
                                </Typography>

                                <Typography
                                    className={"MuiTypography--subheading"}
                                    variant={"body1"}
                                    align={"center"}
                                >
                                    <Box width={"80%"} mb={2.5} mx={"auto"}>
                                        لقهوة المختصة هي قهوة طازجة تتم معالجتها وشحنها بعناية، معروفة المصدر، والارتفاع الذي زرعت فيه وكذلك   تاريخ تحميصها، آيضا مُراعى فيها معايير وطرق التحضير الصحيحة. كل هذا يسهم في تقديم كوب غني بالنكهات     والمذاقات المميزه، وهذا يميزها عن غيرها من أنواع القهوة التجارية الاخرى
                                        </Box>
                                </Typography>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                
            </Grid>


        </>
    )
}

export default BlogSection
