import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Creepypasta from '../components/Creepypasta.js';
import creepypastas from '../CreepypastaData.js';

export default function FullCreepypastaPage() {
  const location = useLocation();
  const { title } = location.state;
  return (
    <>
      <Grid>
        {creepypastas
          .filter(creepypasta => creepypasta.title === title)
          .map(creepypasta => (
            <Creepypasta
              key={creepypasta.title}
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

const Grid = styled.main`
  display: grid;
  gap: 20px;
`;
