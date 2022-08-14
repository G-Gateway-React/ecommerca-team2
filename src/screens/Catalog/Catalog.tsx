import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Footer from "../../components/Footer";
import LeftCatalog from "./LeftCatalog";
import RightCatalog from "./RightCatalog";


const Catalog: React.FC= () => {
    return(
         <Container>
         <Grid container spacing={2}>
     <Grid item xs={4}>
    <LeftCatalog/>
       
</Grid>

       <Grid item xs={8}><RightCatalog/></Grid></Grid>
    <Footer/>
        </Container>

        
    )
}
export default Catalog;