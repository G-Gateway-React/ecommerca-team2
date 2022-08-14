import { StyleParent } from "../style";
import CardCatalog from "./CardCatalog";
import SearchCom from "./Search";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RightCatalog: React.FC= () => {
    return(
        <>
           <SearchCom/>
           <h1>TOPS</h1>
            <StyleParent>
                <CardCatalog/>
                <CardCatalog/>
                <CardCatalog/>
                <CardCatalog/>
                <CardCatalog/>
                <CardCatalog/>
            </StyleParent>

            <h1>SHIRT</h1>
            <StyleParent>
                <CardCatalog/>
                <CardCatalog/>
                <CardCatalog/>
                <CardCatalog/>
                <CardCatalog/>
                <CardCatalog/>
            </StyleParent>

             <Stack spacing={2}>
      <Pagination
        count={10}
        size="small"
        sx={{  display:'flex', justifyContent:'center' ,padding:'50px'}}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>

        </>
    )
}
export default RightCatalog;