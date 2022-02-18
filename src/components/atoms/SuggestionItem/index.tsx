import React from 'react';
import { SearchData } from 'types/searchData';

import * as S from './style';

interface ISuggestionItemProps {
  index: number;
  suggestion: SearchData;
  isActive: boolean;
  setActiveSuggestionIndex: React.Dispatch<React.SetStateAction<number>>;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const SuggestionItem = ({
  index,
  suggestion,
  isActive,
  setActiveSuggestionIndex,
  onClick,
}: ISuggestionItemProps) => {
  return (
    <S.Container isActive={isActive} onMouseOver={() => setActiveSuggestionIndex(index)}>
      <div
        onClick={onClick}
        data-index={suggestion.properties.index}
        onKeyDown={() => {}}
        role="none"
      >
        <S.Image
          src={`https://picsum.photos/id/${suggestion.properties.index + 50}/200/200`}
          alt="영양제 사진"
        />
        <S.Description>
          <S.DrugName>{suggestion.properties.product}</S.DrugName>
          <S.Brand>{suggestion.properties.brand || 'No Brand'}</S.Brand>
        </S.Description>
      </div>
    </S.Container>
  );
};
