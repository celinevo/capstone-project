import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import menuGray from '../Images/menu_gray.svg';
import penGray from '../Images/pen_gray.svg';
import personGray from '../Images/person_gray.svg';

export default function Navigation() {
  return (
    <Footer>
      <Nav>
        <StyledLink to="/">
          <img
            height="32px"
            alt="Clickable icon that directs to main page"
            src={menuGray}
          />
        </StyledLink>
        <StyledLinkBorder to="/create">
          <img
            height="35px"
            alt="Clickable icon that directs to create page"
            src={penGray}
          />
        </StyledLinkBorder>
        <StyledLink to="/profile">
          <img
            height="35px"
            alt="Clickable icon that directs to profile page"
            src={personGray}
          />
        </StyledLink>
      </Nav>
    </Footer>
  );
}

const Footer = styled.footer`
  z-index: 100;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #261b1b;
  border-top: 2px solid #4d4d4d;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
`;

const StyledLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  padding: 15px 0px 5px 0px;
  &.active {
    opacity: 40%;
  }
`;

const StyledLinkBorder = styled(NavLink)`
  width: 100%;
  text-align: center;
  padding: 15px 0px 5px 0px;
  border-left: 1px solid #4d4d4d;
  border-right: 1px solid #4d4d4d;
  &.active {
    opacity: 40%;
  }
`;
