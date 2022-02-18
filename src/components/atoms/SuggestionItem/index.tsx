import React from 'react';
import { SearchData } from 'types/searchData';

import * as S from './style';

interface ISuggestionItemProps {
  suggestion: SearchData;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const SuggestionItem = ({ suggestion, isActive, onClick }: ISuggestionItemProps) => {
  return (
    <S.Container isActive={isActive}>
      <div onClick={onClick} onKeyDown={() => {}} role="none">
        {suggestion.properties.product}
      </div>
    </S.Container>
  );
};
