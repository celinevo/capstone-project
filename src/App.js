import styled from 'styled-components';
import Creepypasta from './components/Creepypasta.js';
import creepypastas from './CreepypastaData.js';
import headerPicture from './Images/Header.png';

function App() {
  return (
    <>
      <Header>
        <img alt="CREEPY(pen)NE" src={headerPicture} width="300" />
      </Header>
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
`;

const Grid = styled.main`
  display: grid;
  gap: 20px;
  padding: 20px;
`;

export default App;
