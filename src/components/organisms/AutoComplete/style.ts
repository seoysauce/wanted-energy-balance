import styled from 'styled-components';
import { STYLE } from 'commons';

export const Container = styled.div`
  width: 400px;
  margin-bottom: 70px;
  position: absolute;
  top: 60px;
  z-index: 10;
  display: flex;
  justify-content: center;
  @media ${STYLE.PHONE} {
    width: 90%;
  }
`;

export const Wrap = styled.div`
  background-color: white;
  border: 2px solid black;
  width: 400px;
  border-radius: 20px;
  display: flex;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Line = styled.hr`
  width: 90%;
  border: none;
  border-top: 2px solid #e2e2e2;
  margin: 0 auto;
`;

export const InputBox = styled.div`
  border-radius: 20px;
  padding: 0 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 30px;
`;

export const SearchInput = styled.input`
  outline: none;
  border: transparent;
  height: 30px;
  width: 95%;
  font-size: 16px;
`;
