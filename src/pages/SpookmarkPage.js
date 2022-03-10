import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card.js';

export default function SpookmarkPage({
  handleSpookmarkClick,
  spookmarkedCreepypastas,
}) {
  return (
    <>
      <Link to="/">All</Link>

      <Grid>
        <Header>Spookmarked</Header>
        {spookmarkedCreepypastas.length > 0 ? (
          spookmarkedCreepypastas.map(creepypasta => (
            <Card
              key={creepypasta.id}
              id={creepypasta.id}
              title={creepypasta.title}
              image={creepypasta.image}
              wordcount={creepypasta.wordcount}
              onSpookmarkClick={() => handleSpookmarkClick(creepypasta.id)}
              isSpookmarked={creepypasta.isSpookmarked}
            />
          ))
        ) : (
          <>
            <h3>It's ghostly quiet in here...</h3>
            <p>You need to spookmark a story to see it here!</p>
          </>
        )}
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

const Grid = styled.main`
  display: grid;
  gap: 20px;
  padding: 0px 20px 20px 20px;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 30px;
  margin: 0px;
`;
