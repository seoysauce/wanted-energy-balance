import styled from 'styled-components';

export const Container = styled.ul`
  position: absolute;
`;

export const SuggestedItem = styled.li<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? 'red' : 'black')};
  background: ${(props) => (props.isActive ? '#808080' : '#d3d3d3')};
  cursor: pointer;
  width: 400px;
  font-weight: 700;
`;
