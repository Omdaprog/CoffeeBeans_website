import Feature from "../Components/Feature";
import ImagesCarousel from "../Components/ImagesCarousel";
import MenuDrawer from "../Components/MenuDrawer";
import BestProductSection from "../Components/BestProductSection";
import BlogSection from "../Components/BlogSection";
import FooterSection from "../Components/FooterSection";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    main_overflow: {
      overflowX: "hidden",
      
    }
  }))

function Homepage() {
    const Classes = useStyles()

    return (
      
      <div className={Classes.main_overflow} >
        <MenuDrawer open={true} />
        <ImagesCarousel  />
        <Feature />
        <BestProductSection />
        <BlogSection />
        <FooterSection />
  
      </div>
  
  
    );
}

export default Homepage
