import React from 'react';
import * as S from './style';

export const ResultBox = ({ name }: { name: string }) => {
  return (
    <S.Container>
      <S.Image src="https://picsum.photos/200" />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit</S.Desc>
      </S.Info>
    </S.Container>
  );
};
