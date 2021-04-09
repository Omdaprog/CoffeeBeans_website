import Grid from '@material-ui/core/Grid';


function ImageGrid({images, onSelect, selectedImage}) {  
    return (
        <Grid container direction="column">
            {images.map((image,index) => (
                <img 
                    onClick={() => onSelect(index)} 
                    src={image}
                    style={{
                        height:75,
                        border: index === selectedImage ? "solid 2px black" : "none",
                        justifyContent: "space-between",
                        marginBottom: 5,
                        cursor: "pointer"}} 
                    alt=""/>
            ))}
        </Grid>
    )
}

export default ImageGrid
