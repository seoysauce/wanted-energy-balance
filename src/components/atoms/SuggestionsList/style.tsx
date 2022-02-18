import styled from 'styled-components';

export const Container = styled.ul`
  /* position: absolute; */
  max-height: 300px;
  top: 60px;
  overflow-y: auto;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
  font-size: 16px;
  border-radius: 20px;
  margin-top: 10px;
`;

export const SuggestedItem = styled.li<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? '#fc9700' : 'black')};
  background: ${(props) => (props.isActive ? '#808080' : '#d3d3d3')};
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  max-height: 100px;
  background-color: white;
`;
