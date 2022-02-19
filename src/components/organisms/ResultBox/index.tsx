import { defaultImage } from 'assets';
import React from 'react';
import * as S from './style';

interface IResultBoxProps {
  name: string;
  imgUrl: string;
  brand: string;
}

export const ResultBox = ({ name, imgUrl, brand }: IResultBoxProps) => {
  return (
    <S.Container>
      <S.Image
        src={imgUrl}
        alt={name}
        onError={(e) => {
          const target = e.target as HTMLImageElement;

          target.onerror = null;
          target.src = defaultImage;
        }}
      />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Brand>{brand}</S.Brand>
        <S.Desc>Lorem ipsum dolor sit amet, consectetur adipisicing</S.Desc>
      </S.Info>
    </S.Container>
  );
};
