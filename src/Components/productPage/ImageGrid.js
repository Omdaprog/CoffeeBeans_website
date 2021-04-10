import Grid from '@material-ui/core/Grid';


function ImageGrid({images, onSelect, selectedImage}) {  
    return (
        <Grid style={{backgroundColor: "rgb(241, 234, 242)"}} container justify="space-around"  direction="row">
            {images.map((image,index) => (
                <div 
                    onClick={() => onSelect(index)} 
                    style={{
                        width:"18%",
                        paddingTop: "30%",
                        backgroundImage: `url('${image}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        border: index === selectedImage ? "solid 2px black" : "none",
                        justifyContent: "space-between",
                        cursor: "pointer"}} 
                    alt=""/>
            ))}
        </Grid>
    )
}

export default ImageGrid
