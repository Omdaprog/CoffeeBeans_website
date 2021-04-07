import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
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

}))

function Item(props) {
    const stylesProps = {
        url1 : props.item.url1,
        url2 : props.item.url2,
    }
    const classes = useStyles(stylesProps)

    return (
        <Grid item>
            <Box height={580} mx={1} style={{cursor:"pointer"}}>
                <Paper style={{ height: "inherit" }} elevation={0} >
                    <Card 
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


function ProductList() {
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
    return (
        <>
        <div style={{marginTop:"40px"}}>
            <Grid 
                justify="center"
                alignItems="center"
                container>
                <Grid item lg={11}>
                    <Grid 
                        justify="space-evenly"
                        alignItems="center"
                        container>
                        {items.map((item, id) =>
                            <Grid item>
                                <Item key={id} item={item} />
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </div>
        </>
        
    )
}

export default ProductList
