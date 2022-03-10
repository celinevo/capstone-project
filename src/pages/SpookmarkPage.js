import styled from 'styled-components';
import Card from '../components/Card.js';

export default function SpookmarkPage({ creepypastas }) {
  return (
    <Grid>
      <h2>Spookmarked</h2>
      {creepypastas.length > 0 ? (
        creepypastas.map(creepypasta => (
          <Card
            key={creepypasta.id}
            id={creepypasta.id}
            title={creepypasta.title}
            image={creepypasta.image}
            wordcount={creepypasta.wordcount}
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
