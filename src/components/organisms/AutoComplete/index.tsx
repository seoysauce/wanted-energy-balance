import React from 'react';
import { SuggestionsList } from 'components';
import { useAutoComplete } from 'hooks/useAutoComplete';
import { SearchData } from 'types/searchData';
import { Magnifier } from 'assets';

import * as S from './style';

interface IAutoCompleteProps {
  suggestions: SearchData[];
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const AutoComplete = ({ suggestions, setSelectedIndex }: IAutoCompleteProps) => {
  const [
    filteredSuggestions,
    activeSuggestionIndex,
    setActiveSuggestionIndex,
    showSuggestions,
    inputTyped,
    inputAutoCompleted,
    onKeyDown,
    onClick,
    optimizedFn,
  ] = useAutoComplete(suggestions, setSelectedIndex);

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
            placeholder="찾고 싶은 영양제를 검색해 보세요!"
          />
        </S.InputBox>
        {showSuggestions && inputTyped && (
          <>
            <S.Line />
            <SuggestionsList
              filteredSuggestions={filteredSuggestions}
              activeSuggestionIndex={activeSuggestionIndex}
              setActiveSuggestionIndex={setActiveSuggestionIndex}
              onClick={onClick}
            />
          </>
        )}
      </S.Wrap>
    </S.Container>
  );
};
