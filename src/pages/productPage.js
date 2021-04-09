import { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import ImageGrid from '../Components/productPage/ImageGrid';
import MainImage from '../Components/productPage/MainImage';
import ProductInfo from '../Components/productPage/ProductInfo';




const ProductImages = [
    "https://images-na.ssl-images-amazon.com/images/I/81jTVrfO5uL._AC_SX679_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81zLqNiOZdL._AC_SX679_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81f8slDvJ1L._AC_SX569_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61GD50L0fgL._AC_SY679_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61%2B0Ix%2BETRL._AC_SY679_.jpg",
]

const Info = {
    title : "Cofique Iced Coffee Original",
    price : "350",
    discription1: "10 Sachets x 24 gm (Pack of 1)",
    discription2: [
                    "Needs to mix with Milk only",
                    "Can be mixed with milk of your choice (Coconut, Soy Milk etc.)",
                    "No Fat",
                ]
}

function ProductPage() {

    const [selectImage, setSelectImage] = useState(0)

    return (
        <div style={{marginTop:"10%"}}>
            <Grid container justify="center" spacing={5}>
                <Grid item sm={1} xs={11}>
                    <ImageGrid 
                        images={ProductImages} 
                        onSelect={setSelectImage} 
                        selectedImage={selectImage} />
                </Grid>
                <Grid item sm={4} xs={11}>
                    <MainImage src={ProductImages[selectImage]} />
                </Grid>
                <Grid item sm={4} xs={11}>
                    <ProductInfo {...Info}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductPage
