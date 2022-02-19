import styled from 'styled-components';
import { STYLE } from 'commons';

export const Container = styled.div`
  margin: 0 auto;
  position: fixed;
  top: 20%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media ${STYLE.PHONE} {
    width: 100%;
  }
`;
