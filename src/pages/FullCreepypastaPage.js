import styled from 'styled-components';
import Creepypasta from '../components/Creepypasta.js';
import creepypastas from '../CreepypastaData.js';

export default function CreepypastaPage() {
  return (
    <>
      <Header>Full Story</Header>
      <Grid>
        {creepypastas.map((creepypasta, index) => (
          <Creepypasta
            key={index}
            title={creepypasta.title}
            image={creepypasta.image}
            text={creepypasta.text}
            wordcount={creepypasta.wordcount}
          />
        ))}
      </Grid>
    </>
  );
}

const Header = styled.h1`
  text-align: center;
  margin: 0;
  margin-top: 10px;
`;

const Grid = styled.main`
  display: grid;
  gap: 20px;
  padding: 20px;
`;
