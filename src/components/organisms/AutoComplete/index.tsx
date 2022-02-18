import React from 'react';
import { SuggestionsList } from 'components';
import { useAutoComplete } from 'hooks/useAutoComplete';
import { SearchData } from 'types/searchData';
import { Magnifier } from 'assets';

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
    inputAutoCompleted,
    onKeyDown,
    onClick,
    optimizedFn,
  ] = useAutoComplete(suggestions);

  return (
    <S.Container>
      <S.Wrap>
        <S.InputBox>
          <Magnifier />
          <S.SearchInput
            type="text"
            onChange={(e) => optimizedFn(e.target.value)}
            onKeyDown={onKeyDown}
            value={inputAutoCompleted}
            spellCheck={false}
          />
        </S.InputBox>
        {showSuggestions && inputTyped && (
          <>
            <S.Line />
            <SuggestionsList
              filteredSuggestions={filteredSuggestions}
              activeSuggestionIndex={activeSuggestionIndex}
              onClick={onClick}
            />
          </>
        )}
      </S.Wrap>
    </S.Container>
  );
};
