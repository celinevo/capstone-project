import styled from 'styled-components';

export default function Creepypasta({ title, image, text, wordcount }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Image alt="" src={image} height="150" />
      <Text>{text}</Text>
      <Wordcount>{wordcount}</Wordcount>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #261b1b;
  border: 2px solid #4d4d4d;
  padding: 12px;
  padding-top: 5px;
  border-radius: 6px;
  overflow: hidden;
`;

const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 8px;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
`;

const Text = styled.p`
  margin: 0;
`;

const Wordcount = styled.div`
  text-align: right;
`;
