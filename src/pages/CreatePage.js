import styled from 'styled-components';
import Form from '../components/Form.js';
import PageSwitchAnimation from '../components/PageSwitchAnimation.js';

export default function CreatePage({ handleCreateCreepypasta }) {
  return (
    <PageSwitchAnimation>
      <Flex>
        <Wrapper>
          <Header>Write your story!</Header>
          <Form handleCreateCreepypasta={handleCreateCreepypasta} />
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
  margin: 0px 15px 0px 15px;
  @media (min-width: 500px) {
    height: 200px;
    width: 500px;
  }
`;

const Header = styled.h1`
  text-align: center;
`;
