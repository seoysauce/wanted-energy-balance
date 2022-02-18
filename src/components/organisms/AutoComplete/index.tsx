import React from 'react';
import { SuggestionsList } from 'components';
import { useAutoComplete } from 'hooks/useAutoComplete';
import { SearchData } from 'types/searchData';

import * as S from './style';

interface IAutoCompleteProps {
  suggestions: SearchData[];
}

export const AutoComplete = ({ suggestions }: IAutoCompleteProps) => {
  const [
    filteredSuggestions,
    activeSuggestionIndex,
    showSuggestions,
    inputTyped,
    onKeyDown,
    onClick,
    optimizedFn,
  ] = useAutoComplete(suggestions);

  return (
    <S.Container>
      <S.SearchInput type="text" onChange={(e) => optimizedFn(e)} onKeyDown={onKeyDown} />
      {showSuggestions && inputTyped && (
        <SuggestionsList
          filteredSuggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          onClick={onClick}
        />
      )}
    </S.Container>
  );
};
