import React from 'react';
import { SearchData } from 'types/searchData';

import * as S from './style';

interface ISuggestionItemProps {
  index: number;
  suggestion: SearchData;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const SuggestionItem = ({ index, suggestion, isActive, onClick }: ISuggestionItemProps) => {
  return (
    <S.Container isActive={isActive}>
      <div onClick={onClick} onKeyDown={() => {}} role="none">
        <S.Image src={`https://loremflickr.com/40/40?lock=${index}`} alt="영양제 사진" />
        <S.Description>
          <S.DrugName>{suggestion.properties.product}</S.DrugName>
          <S.Brand>{suggestion.properties.brand}</S.Brand>
        </S.Description>
      </div>
    </S.Container>
  );
};
