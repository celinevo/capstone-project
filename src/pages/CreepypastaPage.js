import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card.js';
import headerPicture from '../Images/Header.png';

export default function CreepypastaPage({
  handleSpookmarkClick,
  creepypastas,
}) {
  return (
    <>
      <Link to="/spookmarked">Spookmarked</Link>
      <Header>
        <img alt="CREEPY(pen)NE" src={headerPicture} width="300" />
      </Header>
      <Grid>
        {creepypastas.map(creepypasta => (
          <Card
            key={creepypasta.id}
            id={creepypasta.id}
            title={creepypasta.title}
            image={creepypasta.image}
            wordcount={creepypasta.wordcount}
            onSpookmarkClick={() => handleSpookmarkClick(creepypasta.id)}
            isSpookmarked={creepypasta.isSpookmarked}
          />
        ))}
      </Grid>
    </>
  );
}

const Link = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: #e6e6e6;
  margin: 10px;
`;

const Header = styled.h1`
  text-align: center;
  margin: 0;
  margin-top: -25px;
`;

const Grid = styled.main`
  display: grid;
  gap: 20px;
  padding: 20px;
`;
