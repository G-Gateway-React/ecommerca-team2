import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const LeftCatalog: React.FC= () => {
    const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

    
    return(
         <>
      
          <h1>CATEGORIES</h1>
          <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="TOPS" />
        </FormGroup>
        <FormGroup>
        <FormControlLabel control={<Checkbox  />} label="TEES AND TANKS" />
        </FormGroup>
        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="SHIRTS" />
        </FormGroup>
        <FormGroup>
        <FormControlLabel control={<Checkbox />} label="SHOES" />
        </FormGroup><FormGroup>
        <FormControlLabel control={<Checkbox  />} label="JACKETS" />
        </FormGroup>
        <FormGroup>
        <FormControlLabel control={<Checkbox />} label="KNITWEAR" />
        </FormGroup>
        <FormGroup>
        <FormControlLabel control={<Checkbox />} label="JUMPSUITS" />
        </FormGroup>
        <FormGroup>
        <FormControlLabel control={<Checkbox />} label="BOTTOMS" />
        </FormGroup>
        <FormGroup>
        <FormControlLabel control={<Checkbox />} label="INTIMATES" />
        </FormGroup>
            <h3>FILTER</h3>
            <Box sx={{ width: 100 }}>
        <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
        />
        </Box>
         <AddIcon/> COLOR <br/>
         <RemoveIcon/>FABRIC
         SORT:
        </>
    )
}

export default LeftCatalog;