import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Form from '../components/Form.js';
import PageSwitchAnimation from '../components/PageSwitchAnimation.js';
import arrow from '../Images/Arrow.svg';

export default function CreatePage({ onEditCreepypasta, creepypastaEdit }) {
  const navigate = useNavigate();

  return (
    <PageSwitchAnimation>
      <Flex>
        <Wrapper>
          <GoBackButton onClick={() => navigate(-1)}>
            <motion.img
              src={arrow}
              alt="Go back"
              width="60"
              whileTap={{ scale: 1.2 }}
            />
          </GoBackButton>
          <Header>Edit your story!</Header>
          <Form
            handleCreateCreepypasta={onEditCreepypasta}
            creepypastaEdit={creepypastaEdit}
          />
        </Wrapper>
      </Flex>
    </PageSwitchAnimation>
  );
}

const Flex = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 0px 15px 80px 15px;
  @media (min-width: 500px) {
    height: 200px;
    width: 500px;
  }
`;

const GoBackButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px 0px 0px -20px;
  cursor: pointer;
`;

const Header = styled.h1`
  text-align: center;
  margin-top: 0px;
`;
