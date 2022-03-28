import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card.js';
import sparkles from '../Images/sparkles.svg';
import editPen from '../Images/pen_darkgray.svg';
import addIcon from '../Images/add.svg';

export default function ProfileBookmarkPage({
  handleBookmarkClick,
  bookmarkedCreepypastas,
  onNameBlur,
  onInfoBlur,
  onNameChange,
  onInfoChange,
  onKeyDown,
  nameEditingValue,
  infoEditingValue,
  image,
  upload,
}) {
  return (
    <>
      <Flex>
        <Wrapper>
          <Position>
            <PictureCropper>
              <ProfilePicture
                alt="Person that created this profile"
                height="150px"
                src={image}
              />
            </PictureCropper>
            <Input
              type="text"
              aria-label="Field name"
              onChange={onNameChange}
              onKeyDown={onKeyDown}
              value={nameEditingValue}
              onBlur={onNameBlur}
              maxLength="10"
            />
            <PenIcon
              src={editPen}
              alt="You can edit the name next to the pen"
              height="25px"
            />
          </Position>
          <AddImage>
            <label htmlFor="file-upload">
              <img
                src={addIcon}
                alt="Press here to add a profilepicture"
                height="30px"
              />
            </label>
            <input
              id="file-upload"
              type="file"
              name="file"
              onChange={upload}
              hidden
            />
          </AddImage>
          <ProfileInfo>
            About me
            <NavLink to="/feelgood">
              <img
                width="45px"
                src={sparkles}
                alt="Icon of sprakles that lead, if pressed, to feel good page."
              />
            </NavLink>
          </ProfileInfo>
          <Textarea
            rows={3}
            aria-label="Field name"
            value={infoEditingValue}
            onBlur={onInfoBlur}
            onChange={onInfoChange}
            onKeyDown={onKeyDown}
            maxLength="80"
          />
          <PageDirection>
            <InactiveLink to="/profile">My Stories</InactiveLink>
            <ActiveLink to="/profile-spookmarked">Spookmarked</ActiveLink>
          </PageDirection>
          <Format>
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
          </Format>
        </Wrapper>
      </Flex>
    </>
  );
}

const Position = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: 0;
  margin-left: 15px;
  width: 60%;
  font-size: 35px;
  font-family: 'Creepster';
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 600px) {
    height: 100%;
    width: 50%;
  }
`;

const PenIcon = styled.img`
  position: absolute;
  right: 5px;
`;

const Textarea = styled.textarea`
  width: 330px;
  border: none;
  margin: 15px 0px 5px 0px;
  font-size: 16px;
  &:focus {
    outline: 5px auto Highlight;
  }
  @media (min-width: 500px) {
    width: 480px;
  }
`;

const AddImage = styled.div`
  position: absolute;
  left: 98px;
  top: 90px;
`;

const PictureCropper = styled.div`
  width: 125px;
  height: 125px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background-color: var(--passive);
  color: transparent;
  margin-left: -8px;
`;

const ProfilePicture = styled.img`
  display: inline;
  margin: 0 auto;
  margin-left: -40%;
  height: 100%;
  width: auto;
`;

const ProfileInfo = styled.h2`
  margin: 15px 0px -20px 0px;
  font-family: 'Special Elite';
  letter-spacing: 1px;
  font-size: 23px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const PageDirection = styled.h3`
  display: flex;
  justify-content: space-evenly;
  font-size: 18px;
  padding-top: 2px;
  margin: 0px -20px 10px -20px;
  border: 1px solid var(--passive);
  border-left: 0px;
  border-right: 0px;
`;

const ActiveLink = styled(Link)`
  text-decoration: none;
  color: var(--active-main);
`;

const InactiveLink = styled(Link)`
  text-decoration: none;
  color: var(--text-main);
`;

const Format = styled.div`
  display: grid;
  gap: 2px;
`;

const Wrapper = styled.section`
  position: relative;
  margin-bottom: 50px;
  @media (min-width: 500px) {
    height: 100%;
    width: 500px;
  }
`;

const Flex = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 20px 20px 20px;
`;
