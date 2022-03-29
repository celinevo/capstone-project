import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RedButton } from './Button';

export default function Delete({ onConfirmDelete, onCancelDelete }) {
  return (
    <Background>
      <Dialog
        animate={{ y: 300 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        Are you sure you want to delete your creepypasta?
        <Wrapper>
          <RedButton onClick={onConfirmDelete}>Yes</RedButton>
          <RedButton onClick={onCancelDelete}>No</RedButton>
        </Wrapper>
      </Dialog>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-picture);
  z-index: 10;
`;

const Dialog = styled(motion.div)`
  width: 250px;
  height: 185px;
  position: fixed;
  top: 0%;
  left: 56.5%;
  margin-top: -80px;
  margin-left: -150px;
  padding: 20px;
  background-color: var(--bg-main);
  border-radius: 6px;
  border: 2px solid var(--passive);
  text-align: center;
  z-index: 20;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
`;
