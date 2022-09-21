import styled from '@emotion/styled'
import { Link } from 'react-router-dom';


export const FooterStyle = styled.div`
    padding: 20px;
    margin-top: 50px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

   @media screen and(max-width: 600px){
    font-size: 5px;
   }
`

export const ParentFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color:red; */


`
export const AnchorLink = styled(Link)`
    text-decoration: none;
    color: black;
`

export const Parent = styled.div`
h1{
    color: #000;
    font-size: 20px;
    font-weight: 600;
} 
span{
    display: flex;
    gap:10px;
}

`

export const List = styled.ul`
padding: 0;
list-style: none;
display: flex;
flex-direction: column;
gap: 10px;
`


export const InboxInput  =styled.input`
    width: 42%;
    height: 42px;
    border:none;
    outline: none;
    border-bottom: 1px solid #d8d8d8;`

    
// `