import React from 'react';

import * as S from './style';

interface ISuggestionsListProps {
  filteredSuggestions: Array<string>;
  activeSuggestionIndex: number;
  setActiveSuggestionIndex: React.Dispatch<React.SetStateAction<number>>;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const SuggestionsList = ({
  filteredSuggestions,
  activeSuggestionIndex,
  setActiveSuggestionIndex,
  onClick,
}: ISuggestionsListProps) => {
  return (
    <S.Container>
      {filteredSuggestions.map((suggestion, index) => {
        return (
          <S.SuggestedItem
            key={suggestion}
            onMouseOver={() => {
              setActiveSuggestionIndex(index);
            }}
            isActive={index === activeSuggestionIndex}
          >
            <S.Div onClick={onClick} onKeyDown={() => {}} role="none">
              {suggestion}
            </S.Div>
          </S.SuggestedItem>
        );
      })}
    </S.Container>
  );
};
