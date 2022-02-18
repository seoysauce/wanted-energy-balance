import React from 'react';
import { SuggestionItem } from 'components';
import { SearchData } from 'types/searchData';

import * as S from './style';

interface ISuggestionsListProps {
  filteredSuggestions: SearchData[];
  activeSuggestionIndex: number;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const SuggestionsList = ({
  filteredSuggestions,
  activeSuggestionIndex,
  onClick,
}: ISuggestionsListProps) => {
  return (
    <S.Container>
      {filteredSuggestions.slice(0, 8).map((suggestion, index) => {
        return (
          <SuggestionItem
            key={suggestion.properties.product}
            index={index}
            suggestion={suggestion}
            isActive={index === activeSuggestionIndex}
            onClick={onClick}
          />
        );
      })}
    </S.Container>
  );
};
