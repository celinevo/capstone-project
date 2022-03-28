import { NavLink } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import sparkles from '../Images/sparkles.svg';
import editPen from '../Images/pen_darkgray.svg';
import addIcon from '../Images/add.svg';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function Profile() {
  const [profileImage, setProfileImage] = useLocalStorage('ProfileImage', '');
  const [nameValue, setNameValue] = useLocalStorage('NameKey', 'Your name');
  const [nameEditingValue, setNameEditingValue] = useState(nameValue);
  const [infoValue, setInfoValue] = useLocalStorage(
    'InfoKey',
    'Here you can write something about yourself!'
  );
  const [infoEditingValue, setInfoEditingValue] = useState(infoValue);

  const onNameChange = event => setNameEditingValue(event.target.value);
  const onInfoChange = event => setInfoEditingValue(event.target.value);

  const onNameBlur = event => {
    if (event.target.value.trim() === '') {
      setNameEditingValue(nameValue);
    } else {
      setNameValue(event.target.value);
    }
  };

  const onInfoBlur = event => {
    if (event.target.value.trim() === '') {
      setInfoEditingValue(infoValue);
    } else {
      setInfoValue(event.target.value);
    }
  };

  const onKeyDown = event => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      event.target.blur();
    }
  };

  return (
    <>
      <Position>
        <PictureCropper>
          <ProfilePicture
            alt="Person that created this profile"
            height="150px"
            src={profileImage}
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
          onChange={profileUpload}
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
    </>
  );

  function profileUpload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`;

    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onProfileImageSave)
      .catch(err => console.error(err));
  }

  function onProfileImageSave(response) {
    setProfileImage(response.data.url);
  }
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

const PenIcon = styled.img`
  position: absolute;
  right: 5px;
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

const ProfileInfo = styled.h2`
  margin: 15px 0px -20px 0px;
  font-family: 'Special Elite';
  letter-spacing: 1px;
  font-size: 23px;
  display: flex;
  align-items: center;
  gap: 15px;
`;
