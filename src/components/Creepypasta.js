import styled from 'styled-components';

export default function Creepypasta({ title, text, wordcount }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Wordcount>{wordcount}</Wordcount>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #261b1b;
  border: 2px solid #4d4d4d;
  padding: 12px;
  border-radius: 6px;
  overflow: hidden;
`;

const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Text = styled.p`
  margin: 0;
`;

const Wordcount = styled.div`
  text-align: right;
`;
