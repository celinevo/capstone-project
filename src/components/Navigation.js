import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import menuGray from '../Images/menu_gray.svg';
import penGray from '../Images/pen_gray.svg';
import personGray from '../Images/person_gray.svg';

export default function Navigation() {
  return (
    <Footer>
      <Nav>
        <StyledLink to="/">
          <motion.img
            height="32px"
            width="32px"
            alt="Clickable icon that directs to main page"
            src={menuGray}
            whileTap={{ scale: 1.2 }}
          />
        </StyledLink>
        <StyledLink to="/create">
          <motion.img
            height="35px"
            width="35px"
            alt="Clickable icon that directs to create page"
            src={penGray}
            whileTap={{ scale: 1.2 }}
          />
        </StyledLink>
        <StyledLink to="/profile">
          <motion.img
            height="35px"
            width="35px"
            alt="Clickable icon that directs to profile page"
            src={personGray}
            whileTap={{ scale: 1.2 }}
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
  background-color: var(--bg-main);
  border-top: 1px solid var(--passive);
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
`;

const StyledLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  padding: 15px 0px 5px;
  &.active {
    filter: grayscale(20%) brightness(12%) sepia(200%) hue-rotate(-55deg)
      saturate(1500%) contrast(1);
  }
`;
