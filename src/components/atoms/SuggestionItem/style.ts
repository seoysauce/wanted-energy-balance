import styled from 'styled-components';

export const Container = styled.li<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? '#fc9700' : 'black')};
  background: ${(props) => (props.isActive ? '#808080' : '#d3d3d3')};
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  max-height: 100px;
  background-color: white;
`;

export const Description = styled.div`
  -webkit-text-size-adjust: 100%;
  list-style: none;
  word-break: break-word;
  cursor: pointer;
  white-space: normal;
  color: rgba(0, 0, 0, 0.8);
  box-sizing: inherit;
  overflow: hidden;
  height: 100%;
`;

export const Image = styled.img`
  -webkit-text-size-adjust: 100%;
  list-style: none;
  word-break: break-word;
  cursor: pointer;
  white-space: normal;
  color: rgba(0, 0, 0, 0.8);
  box-sizing: inherit;
  border: 0;
  display: block;
  margin: 0;
  max-width: 100%;
  height: auto;
  width: 40px;
  vertical-align: top;
  float: left;
  background: #ffffff;
`;

export const DrugName = styled.span`
  -webkit-text-size-adjust: 100%;
  list-style: none;
  word-break: break-word;
  box-sizing: inherit;
  position: relative;
  border: 2px solid transparent;
  outline: 0;
  display: block;
  cursor: pointer;
  padding: 0 0 0 10px;
  background: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.8);
`;

export const Brand = styled.span`
  -webkit-text-size-adjust: 100%;
  font-weight: 300;
  list-style: none;
  word-break: break-word;
  box-sizing: inherit;
  position: relative;
  border: 2px solid transparent;
  outline: 0;
  display: block;
  cursor: pointer;
  padding: 0 0 0 10px;
  background: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.8);
`;
