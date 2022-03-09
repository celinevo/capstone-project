import styled from 'styled-components';

export default function Creepypasta({ title, image, text, wordcount }) {
  return (
    <>
      <Image alt="" src={image} height="160" />
      <Wrapper key={title}>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Wordcount>{wordcount} Words</Wordcount>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  padding: 20px;
  padding-top: 0px;
  border-radius: 6px;
`;

const Title = styled.h3`
  margin: 15px;
  margin-top: 0px;
  text-align: center;
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`;

const Text = styled.p`
  margin: 0;
`;

const Wordcount = styled.p`
  margin-top: 15px;
  margin-bottom: 0px;
`;
