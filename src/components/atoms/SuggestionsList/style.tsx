import styled from 'styled-components';

export const Container = styled.ul`
  max-height: 300px;
  overflow-y: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin: 15px;
`;

export const SuggestedItem = styled.li<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? 'black' : 'black')};
  background: ${(props) => (props.isActive ? '#F4F3F3' : 'white')};
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  &:hover {
    background: #f4f3f3;
  }
`;

export const Div = styled.div`
  /* height: 30px; */
  padding: 7px 10px;
  display: flex;
  align-items: center;
  /* padding: 0 10px; */
`;
