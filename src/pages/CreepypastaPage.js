import styled from 'styled-components';
import Card from '../components/Card.js';
import creepypastas from '../CreepypastaData.js';
import headerPicture from '../Images/Header.png';

export default function CreepypastaPage() {
  return (
    <>
      <Header>
        <img alt="CREEPY(pen)NE" src={headerPicture} width="300" />
      </Header>
      <Grid>
        {creepypastas.map((creepypasta, index) => (
          <Card
            key={index}
            title={creepypasta.title}
            image={creepypasta.image}
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
