import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  position: relative;
  top: 100px;
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 20px;
  /* border: 2px solid black; */
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Brand = styled.span`
  font-weight: 500;
  color: #c1c1c1;
  font-size: 14px;
`;

export const Name = styled.span`
  font-weight: 700;
`;

export const Desc = styled.span``;
