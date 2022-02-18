import styled from 'styled-components';

export const Container = styled.li<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? '#fc9700' : 'black')};
  background: ${(props) => (props.isActive ? '#d3d3d3' : '#white')};
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  max-height: 100px;
`;

export const Description = styled.div`
  list-style: none;
  word-break: break-word;
  cursor: pointer;
  white-space: normal;
  box-sizing: inherit;
  overflow: hidden;
  height: 100%;
`;

export const Image = styled.img`
  white-space: normal;
  box-sizing: inherit;
  border: 0;
  display: block;
  margin: 0;
  max-width: 100%;
  height: auto;
  width: 40px;
  vertical-align: top;
  float: left;
`;

export const DrugName = styled.span`
  box-sizing: inherit;
  position: relative;
  border: 2px solid transparent;
  outline: 0;
  display: block;
  padding: 0 0 0 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Brand = styled.span`
  -webkit-text-size-adjust: 100%;
  font-weight: 300;
  word-break: break-word;
  box-sizing: inherit;
  position: relative;
  border: 2px solid transparent;
  outline: 0;
  display: block;
  padding: 0 0 0 10px;
  background: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
