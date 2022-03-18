import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../components/Form.js';
import Arrow from '../Images/Arrow.svg';

export default function CreatePage({ onEditCreepypasta, creepypastaEdit }) {
  const navigate = useNavigate();

  return (
    <>
      <Flex>
        <Wrapper>
          <GoBackButton onClick={() => navigate(-1)}>
            <img src={Arrow} alt="Go back" width="60" />
          </GoBackButton>
          <Header>Edit your story!</Header>
          <Form
            handleCreateCreepypasta={onEditCreepypasta}
            creepypastaEdit={creepypastaEdit}
          />
        </Wrapper>
      </Flex>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0px 15px 80px 15px;
  @media (min-width: 500px) {
    height: 200px;
    width: 500px;
  }
`;

const Flex = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GoBackButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px 0px 0px -20px;
`;

const Header = styled.h1`
  text-align: center;
  margin-top: 0px;
`;
