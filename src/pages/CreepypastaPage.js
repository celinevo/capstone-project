import styled from 'styled-components';
import Card from '../components/Card.js';
import Searchbar from '../components/Searchbar.js';
import headerPicture from '../Images/Header.png';

export default function CreepypastaPage({
  handleBookmarkClick,
  creepypastas,
  handleChange,
  searchValue,
}) {
  return (
    <>
      <Header>
        <img alt="CREEPY(pen)NE" src={headerPicture} width="300" />
      </Header>
      <Grid>
        <Searchbar handleChange={handleChange} searchValue={searchValue} />
        {creepypastas &&
          creepypastas
            .filter(creepypasta =>
              creepypasta.title.trim().toLowerCase().includes(searchValue)
            )
            .map(creepypasta => (
              <Card
                key={creepypasta.id}
                id={creepypasta.id}
                title={creepypasta.title}
                image={creepypasta.image}
                wordcount={creepypasta.wordcount}
                onBookmarkClick={() => handleBookmarkClick(creepypasta.id)}
                isBookmarked={creepypasta.isBookmarked}
              />
            ))}
        {creepypastas &&
          creepypastas.filter(creepypasta =>
            creepypasta.title.trim().toLowerCase().includes(searchValue)
          ).length < 1 && (
            <p>ERROR: Couldn't find the story you were looking for.</p>
          )}
      </Grid>
    </>
  );
}

const Header = styled.h1`
  text-align: center;
  margin: 0;
  margin-top: -10px;
`;

const Grid = styled.section`
  display: grid;
  padding: 0 20px 70px 20px;
`;
