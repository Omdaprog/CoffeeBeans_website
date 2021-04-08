import React from 'react'
import { useState } from 'react'
import {Grid, Typography, Divider, Button, Box} from '@material-ui/core';

function ProductInfo({title,price,discription1,discription2,}) {
    return (
        <Grid container direction="column">
            <Box mt={2}>
                <Typography variant="h4"> {title} </Typography>
                <Typography variant="h6"> {discription1} </Typography>
                <Typography variant="h5"> {price} </Typography>
            </Box>
            <Button variant="contained" color="primary" style={{ marginTop: "auto" }}>
                Purchase
            </Button>
        </Grid>
    )
}

export default ProductInfo
