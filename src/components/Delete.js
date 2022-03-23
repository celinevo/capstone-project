import styled from 'styled-components';
import { RedButton } from './Button';

export default function Delete({ onConfirmDelete, onCancelDelete }) {
  return (
    <Dialog>
      Are you sure you want to delete your creepypasta?
      <Wrapper>
        <RedButton onClick={onConfirmDelete}>Yes</RedButton>
        <RedButton onClick={onCancelDelete}>No</RedButton>
      </Wrapper>
    </Dialog>
  );
}

const Dialog = styled.div`
  width: 250px;
  height: 185px;
  position: fixed;
  top: 50%;
  left: 56%;
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
