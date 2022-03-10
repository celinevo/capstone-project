import styled from 'styled-components';
import Card from '../components/Card.js';

export default function SpookmarkPage({
  creepypastas,
  handleSpookmarkClick,
  spookmarkedCreepypastas,
}) {
  return (
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
  );
}

const Grid = styled.main`
  display: grid;
  gap: 20px;
  padding: 20px;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 30px;
`;
