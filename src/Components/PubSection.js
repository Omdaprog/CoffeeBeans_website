import React from 'react'
import { Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    SectionBackground: {
        backgroundImage: "url(//cdn.shopify.com/s/files/1/0436/7482/8957/files/bg-icon-3_1920X.png?v=1595321091)",
        float: "left",
        width: 100+"%",
        // height:500,
        marginTop: -80,
        marginBottom: 80,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top"+-120+"left",
        position: "relative",
        zIndex: 1,
    },
    Pub: {
        width: 585,
        height: 767,
        margin: 10,
        borderRadius: 30,
        backgroundImage: "url(//cdn.shopify.com/s/files/1/0436/7482/8957/files/img-1_1000X.jpg?v=1595318677)"
    },
    Pub1: {
        width: 580,
        height: 500,
        margin: 10,
        borderRadius: 30,
        backgroundImage: "url(//cdn.shopify.com/s/files/1/0436/7482/8957/files/img-2_1000X.jpg?v=1595318715)"
    },
    Pub2: {
        width: 580,
        height: 500,
        margin: 10,
        borderRadius: 30,
        backgroundImage: "url(//cdn.shopify.com/s/files/1/0436/7482/8957/files/img-2_1000X.jpg?v=1595318715)"
    },
}))

function PubSection() {
    const classes = useStyles()
    return (
        <div className={classes.SectionBackground}>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={0}
                >
                <Grid item xs={5}>
                    <Grid 
                        container 
                        justify="center"
                        alignItems="center"
                        >
                        <Paper className={classes.Pub}>

                        </Paper>
                    </Grid>

                </Grid>
                <Grid item xs={5}>
                    <Grid 
                        container 
                        justify="flex-start"
                        alignItems="center"
                        >
                        <Paper className={classes.Pub1}>

                        </Paper>
                    </Grid>
                    <Grid 
                        container 
                        justify="flex-start"
                        alignItems="center"
                        >
                        <Paper className={classes.Pub2}>

                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default PubSection
