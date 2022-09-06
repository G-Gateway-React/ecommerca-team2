import styled from "@emotion/styled";
import { width } from "@mui/system";



const CustomDiv = styled('div')<{
    selected:boolean
}>(({selected})=>(
    {
        border: selected? "1px solid green" : "none"    
    }
))


export const ColorContainer = styled.div`
display: flex;
flex-wrap: wrap;

`

export const ColorStyle = styled.div`
margin-right: 10px;
width: 40px;
height: 40px;
border: 2px solid #FFFFFF;
border-radius: 4px;
margin-bottom: 10px;
`

