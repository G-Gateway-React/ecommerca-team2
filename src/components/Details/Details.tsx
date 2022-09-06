import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {DetailsStyled} from './styledetails';

const DetailsPlus: React.FC= () => {
  return (
    <DetailsStyled>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>PRODUCT DESCRIPTION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across 
            the hips, bow shape legs, with knee darts 
            and tapered leg. Back pockets dropped slightly for slouch feel. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>COLORS DESCRIPTION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across 
            the hips, bow shape legs, with knee darts 
            and tapered leg. Back pockets dropped slightly for slouch feel. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>OTHERS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Saints are a low-waist, drop crotch relaxed boyfriend jean. Straight fit across 
            the hips, bow shape legs, with knee darts 
            and tapered leg. Back pockets dropped slightly for slouch feel. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </DetailsStyled>
  )
}

export default DetailsPlus;
