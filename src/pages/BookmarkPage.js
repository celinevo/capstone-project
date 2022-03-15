import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card.js';

export default function BookmarkPage({
  handleBookmarkClick,
  bookmarkedCreepypastas,
}) {
  return (
    <>
      <Navigation>
        <Link to="/">All</Link>
        <Link to="/profilepage">Profile</Link>
      </Navigation>
      <Grid>
        <Header>Spookmarked</Header>
        {bookmarkedCreepypastas.length > 0 ? (
          bookmarkedCreepypastas.map(creepypasta => (
            <Card
              key={creepypasta.id}
              id={creepypasta.id}
              title={creepypasta.title}
              image={creepypasta.image}
              wordcount={creepypasta.wordcount}
              onBookmarkClick={() => handleBookmarkClick(creepypasta.id)}
              isBookmarked={creepypasta.isBookmarked}
            />
          ))
        ) : (
          <>
            <h3>It's ghostly quiet in here...</h3>
            <p>You need to spookmark a story to see it here!</p>
          </>
        )}
      </Grid>
    </>
  );
}

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #e6e6e6;
  margin: 10px;
`;

const Grid = styled.main`
  display: grid;
  gap: 20px;
  padding: 0px 20px 20px 20px;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 30px;
  margin: 0px;
`;
