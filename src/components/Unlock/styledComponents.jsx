import styled from 'styled-components';

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #161617;
`;

export const LockText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #ffffff;
  margin-top: 20px;
`;

export const LockButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background-color: #06b6d4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #3c2940;
  }
`;

export const LockImage = styled.img`
  width: 150px;
  height: 150px;
`;
