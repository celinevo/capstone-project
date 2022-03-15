import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CreepypastaFrom from '../components/CreepypastaFrom.js';

export default function CreatePage({ handleCreateCreepypasta }) {
  return (
    <>
      <Navigation>
        <Link to="/">All</Link>
        <Link to="/profile">Profile</Link>
      </Navigation>
      <h1>Write your own story!</h1>
      <CreepypastaFrom handleCreateCreepypasta={handleCreateCreepypasta} />
    </>
  );
}

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #e6e6e6;
  margin: 10px;
`;
