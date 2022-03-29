import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuData } from '../Data/MenuData';
import { css } from 'styled-components';
import { Button } from './Button';
import {GoThreeBars} from 'react-icons/go'

const Nav = styled.nav`
height: 60px;
/* background: #cda53f; */
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;
`;

const NavLink = css`
color:#fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`;

const Logo = styled(Link)`
${NavLink}
font-style: italic;

`;

const MenuBars = styled(GoThreeBars)`
display: none;

@media screen and (max-width: 760px){
  display: block;
  color: #fff;
  height: 40px;
  width: 40px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 25%);
  
}

`;
const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -40px;

@media screen and (max-width: 760px){
  display: none;
  
}


`;
const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 760px){
  display: none;
  
}

`;

const NavMenuLinks = styled(Link)`
${NavLink}
`;

const Navbar = ({toggle}) => {
  return (
    <Nav>
    
        <Logo to= '/'>Estate</Logo>
        <MenuBars onClick={toggle}/>
        <NavMenu>
            {MenuData.map((item, index) =>(
              <NavMenuLinks to={item.link} key={index}>
                {item.title}
              </NavMenuLinks>

                ))}
        </NavMenu> 
        <NavBtn> 
          <Button to = '/contact' primary= 'true'> Contact Us</Button>
        </NavBtn>
        </Nav>
  )
}

export default Navbar