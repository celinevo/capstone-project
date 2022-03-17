import styled from 'styled-components';

export default function Delete({ onConfirmDelete, onCancelDelete }) {
  return (
    <Dialog>
      Are you sure you want to delete your creepypasta?
      <Wrapper>
        <Button onClick={onConfirmDelete}>Yes</Button>
        <Button onClick={onCancelDelete}>No</Button>
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
  background-color: #261b1b;
  border-radius: 6px;
  border: 2px solid #4d4d4d;
  text-align: center;
  z-index: 20;
`;

const Button = styled.button`
  background-color: #990000;
  border: none;
  border-radius: 6px;
  color: #e6e6e6;
  font-family: 'Special Elite';
  font-size: 18px;
  padding: 12px 10px 10px 10px;
  width: 80px;
  justify-self: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
`;
