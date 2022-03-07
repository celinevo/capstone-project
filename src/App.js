import styled from 'styled-components';
import Creepypasta from './components/Creepypasta.js';

function App() {
  return (
    <Grid>
      <Creepypasta />
    </Grid>
  );
}

const Grid = styled.section`
  display: grid;
  gap: 20px;
  padding: 20px;
`;

export default App;
