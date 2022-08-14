import SearchIcon from '@mui/icons-material/Search';

import { SearchStyle } from './StyleCatalog';


const SearchCom: React.FC= () => {
    return(
        <SearchStyle>
        <input type="text" placeholder="Search"/>
        <button>
            <SearchIcon style={{color:"#ABA7AF"}}/>
        </button>
        </SearchStyle>
    )
}

export default SearchCom;