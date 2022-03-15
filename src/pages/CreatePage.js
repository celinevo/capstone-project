import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CreepypastaForm from '../components/CreepypastaForm.js';

export default function CreatePage({ handleCreateCreepypasta }) {
  return (
    <>
      <Navigation>
        <Link to="/">All</Link>
        <Link to="/profile">Profile</Link>
      </Navigation>
      <Flex>
        <Wrapper>
          <Header>Write your story!</Header>
          <CreepypastaForm handleCreateCreepypasta={handleCreateCreepypasta} />
        </Wrapper>
      </Flex>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0px 15px 0px 15px;
  @media (min-width: 500px) {
    height: 200px;
    width: 500px;
  }
`;

const Flex = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #e6e6e6;
  margin: 10px;
`;

const Header = styled.h1`
  text-align: center;
  margin-top: 0px;
`;
