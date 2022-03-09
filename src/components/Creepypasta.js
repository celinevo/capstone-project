import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow from '../Images/Arrow.svg';

export default function Creepypasta({ title, image, text, wordcount }) {
  return (
    <Wrapper>
      <GoBackTop to="/">
        <img
          alt="Red Arrow, if clicked leads back to main page"
          src={arrow}
          width="60"
        />
      </GoBackTop>
      <Image alt={title} src={image} height="160" />
      <TextContent>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Wordcount>{wordcount} Words</Wordcount>
      </TextContent>
      <GoBackBottom to="/">
        <img
          alt="Red Arrow, if clicked leads back to main page"
          src={arrow}
          width="60"
        />
      </GoBackBottom>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
`;

const TextContent = styled.div`
  padding: 20px;
  border-radius: 6px;
`;

const GoBackTop = styled(Link)`
  margin: 10px;
  position: absolute;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

const Title = styled.h3`
  margin: 15px;
  margin-top: 0px;
  text-align: center;
`;

const Text = styled.p`
  margin: 0;
`;

const Wordcount = styled.p`
  margin-top: 15px;
  margin-bottom: 0px;
`;

const GoBackBottom = styled(Link)`
  margin: 10px;
  position: absolute;
  right: 5%;
  bottom: 0%;
`;
