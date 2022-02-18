import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  bottom: -200px;
  z-index: -10;
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.span`
  font-weight: 700;
`;

export const Desc = styled.span``;
