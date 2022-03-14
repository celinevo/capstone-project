import { NavLink } from 'react-router-dom';
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
      <Link to="/spookmarked">Spookmarked</Link>
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

const Link = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: #e6e6e6;
  margin: 10px;
`;

const Header = styled.h1`
  text-align: center;
  margin: 0;
  margin-top: -30px;
`;

const Grid = styled.main`
  display: grid;
  gap: 20px;
  padding: 20px;
  padding-top: 0px;
`;
