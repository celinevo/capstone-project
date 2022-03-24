import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomCard from '../components/CustomCard.js';
import sparkles from '../Images/sparkles.svg';
import editPen from '../Images/pen_darkgray.svg';
import addIcon from '../Images/add.svg';

export default function ProfilePage({
  writtenCreepypastas,
  handleBookmarkClick,
  handleDeleteCreepypasta,
  handleRedirectEdit,
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
            <div>
              <PictureCropper>
                <ProfilePicture
                  alt="Person that created this profile"
                  height="150px"
                  src={image}
                />
              </PictureCropper>
            </div>
            <Input
              type="text"
              aria-label="Field name"
              onChange={onNameChange}
              onKeyDown={onKeyDown}
              value={nameEditingValue}
              onBlur={onNameBlur}
              maxLength="10"
            />
            <img
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
            <ActiveLink to="/profile">My Stories</ActiveLink>
            <InactiveLink to="/profile/spookmarked">Spookmarked</InactiveLink>
          </PageDirection>
          <Format>
            {writtenCreepypastas.length > 0 ? (
              writtenCreepypastas.map(creepypasta => (
                <CustomCard
                  key={creepypasta.id}
                  id={creepypasta.id}
                  title={creepypasta.title}
                  image={creepypasta.image}
                  wordcount={creepypasta.wordcount}
                  onBookmarkClick={() => handleBookmarkClick(creepypasta.id)}
                  isBookmarked={creepypasta.isBookmarked}
                  isWritten={creepypasta.isWritten}
                  handleDeleteCreepypasta={() =>
                    handleDeleteCreepypasta(creepypasta.id)
                  }
                  handleRedirectEdit={handleRedirectEdit}
                />
              ))
            ) : (
              <>
                <h3>It's ghostly quiet in here...</h3>
                <p>You need to create a story to see it here!</p>
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
  margin-left: -40%;
  height: 100%;
  width: auto;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: 0;
  margin-left: 15px;
  width: 50%;
  font-size: 35px;
  font-family: 'Creepster';
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 600px) {
    height: 100%;
    width: 50%;
  }
`;

const Textarea = styled.textarea`
  width: 330px;
  border: none;
  margin: 15px 0px 5px 0px;
  font-size: 16px;
  &:focus {
    outline: 5px auto Highlight;
  }
`;

const AddImage = styled.div`
  position: absolute;
  left: 30%;
  top: 16%;
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
