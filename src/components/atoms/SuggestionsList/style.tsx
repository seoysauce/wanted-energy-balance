import styled from 'styled-components';

export const Container = styled.ul`
  max-height: 300px;
  overflow-y: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
  padding: 15px;
  gap: 15px;
  font-size: 16px;
  border-radius: 20px;
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
