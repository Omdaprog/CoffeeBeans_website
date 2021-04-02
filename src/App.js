import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/CategoryPage";
import MenuDrawer from "./Components/MenuDrawer";
import FooterSection from "./Components/FooterSection";
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ProductPage from "./pages/productPage";

const useStyles = makeStyles((theme) => ({
    main_overflow: {
      overflowX: "hidden",
      
    }
  }))
function App() {
  const Classes = useStyles()

  return (
    
    <Router>
      <div className={Classes.main_overflow}>
        <MenuDrawer open={true} />
        
        <Switch >
          <Route 
            exact
            path="/"
            
          >
            <Homepage />
          </Route>
          <Route 
            exact
            path="/categorie"
          >
            <CategoryPage />
          </Route>
          <Route 
            exact
            path="/product"
          >
            <ProductPage />
          </Route>

        </Switch>
        
        <FooterSection />
      </div>
    </Router>


  );
}

export default App;
