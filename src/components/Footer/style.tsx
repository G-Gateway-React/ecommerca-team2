import styled from '@emotion/styled'
import { Link } from 'react-router-dom';


export const FooterStyle = styled.div`
    
    padding: 20px;
    bottom: 50px;
    z-index: 0;
    margin-top: 50px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
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
}`

export const List = styled.ul`
padding: 0;
list-style: none;
display: flex;
flex-direction: column;
gap: 10px;

`

export const SingFooter = styled.div`
display: flex;
justify-content:center;
flex-direction: column;
align-items: center;
`
export const InboxInput  =styled.input`
    width: 25%;
    height: 42px;
    box-sizing: border-box;
    padding: 0 25px;
    border-radius: 20px;
    outline: none;
    
`
