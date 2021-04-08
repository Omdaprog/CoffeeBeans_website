import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image : {
        height: 100,
        border: "solid #eee gray", cursor: "pointer",
    }
}))


function ImageGrid({images}) {
    const classes = useStyles()
    return (
        <Grid container direction="column">
            {images.map(image => (
                <img className={classes.image} src={image} alt=""/>
            ))}
        </Grid>
    )
}

export default ImageGrid
