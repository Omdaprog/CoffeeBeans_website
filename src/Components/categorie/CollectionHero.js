import { makeStyles } from '@material-ui/core/styles';
import heroImage from "../images/collection-hero.jpg"

const useStyles = makeStyles((theme) => ({
    hero:{
        backgroundImage: `url('${heroImage}')`,
        paddingTop: "30%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat" ,
        [theme.breakpoints.down('xs')]: {
            paddingTop: "90%",    
        },
        [theme.breakpoints.between('sm','md')]: {
            paddingTop: "60%", 
        },
        
    }
}))


function CollectionHero() {
    const classes = useStyles()
    return (
        <div className={classes.hero}>
            
        </div>
    )
}

export default CollectionHero
