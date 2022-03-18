import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Creepypasta from '../components/Creepypasta.js';

export default function FullCreepypastaPage({ creepypastas }) {
  const location = useLocation();
  const { id } = location.state;
  return (
    <>
      <Grid>
        {creepypastas
          .filter(creepypasta => creepypasta.id === id)
          .map(creepypasta => (
            <Creepypasta
              key={creepypasta.id}
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

const Grid = styled.section`
  display: grid;
  gap: 20px;
`;
