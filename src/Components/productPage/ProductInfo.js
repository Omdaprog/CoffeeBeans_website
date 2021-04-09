import React from 'react'
import {Grid, Typography, Button, Box} from '@material-ui/core';

function ProductInfo({title,price,discription1,discription2,}) {
    return (
        <Grid container direction="column" >
            <Box mt={2}>
                <Typography variant="h4"> {title} </Typography>
                <Typography variant="h6"> {discription1} </Typography>
                <Typography variant="h5"> {price} </Typography>
                {discription2.map(info => (
                    <ul style={{marginLeft: -20}}>
                        <li><Typography variant="subtitle1"> {info} </Typography></li>
                    </ul>
                    
                ))}
            </Box>
            <Button variant="contained" color="primary" style={{ marginTop: "auto" }}>
                Purchase
            </Button>
        </Grid>
    )
}

export default ProductInfo
