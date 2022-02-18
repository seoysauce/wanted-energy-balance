import React from 'react';
import * as S from './style';

interface IResultBoxProps {
  name: string;
  imgUrl: string;
}

export const ResultBox = ({ name, imgUrl }: IResultBoxProps) => {
  return (
    <S.Container>
      <S.Image src={imgUrl} alt={name} />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit</S.Desc>
      </S.Info>
    </S.Container>
  );
};
