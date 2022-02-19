import React, { useState, useCallback } from 'react';
import { SearchData } from 'types/searchData';
import { SearchDataWithPrio } from 'types/serachDataWIthPrio';
import { disassembleSentence, calcPrio } from 'utils';
import { AUTO_COMPLETE } from 'commons';

export const useAutoComplete = (
  suggestions: SearchData[],
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>,
): [
  SearchData[],
  number,
  React.Dispatch<React.SetStateAction<number>>,
  boolean,
  string,
  string,
  (e: React.KeyboardEvent<HTMLInputElement>) => void,
  (e: React.MouseEvent<HTMLDivElement>) => void,
  (value: string) => void,
] => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchDataWithPrio[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputTyped, setInputTyped] = useState('');
  const [inputAutoCompleted, setInputAutoCompleted] = useState('');

  const filterLogic = (disassembledUserInput: string[], suggestion: SearchData, value: string) => {
    return calcPrio({
      properties: suggestion.properties,
      disassembledInput: disassembledUserInput,
      value,
    });
  };

  const resetSuggestionList = () => {
    setFilteredSuggestions([]);
    setActiveSuggestionIndex(-1);
    setShowSuggestions(false);
  };

  const focusSuggestion = (focusTarget: number) => {
    setActiveSuggestionIndex(focusTarget);
    setInputAutoCompleted(filteredSuggestions[focusTarget].properties.product);
  };

  const removeFocusSuggestion = () => {
    setShowSuggestions(false);
    setInputAutoCompleted(inputTyped);
  };

  const setBothInputs = (value: string) => {
    setInputTyped(value);
    setInputAutoCompleted(value);
  };

  const onChange = (value: string) => {
    const possibleSuggestions = suggestions
      .map((suggestion) => filterLogic(disassembleSentence(value), suggestion, value))
      .filter((suggestion) => suggestion.properties.priority !== 100000)
      .sort((a, b) => a.properties.priority - b.properties.priority)
      .slice(0, AUTO_COMPLETE.MAX_SHOW);

    setInputTyped(value);
    setFilteredSuggestions(possibleSuggestions);
    setActiveSuggestionIndex(-1);
    setShowSuggestions(possibleSuggestions.length > 0);
  };

  const debounce = (func: (value: string) => void) => {
    let timerId: ReturnType<typeof setTimeout> | null;
    return (value: string) => {
      setInputAutoCompleted(value);
      if (timerId) clearTimeout(timerId);

      timerId = setTimeout(() => {
        timerId = null;
        func(value);
      }, 500);
    };
  };

  const optimizedFn = useCallback(debounce(onChange), [onChange]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) {
      if (e.key === 'ArrowDown' && filteredSuggestions.length > 0) {
        setShowSuggestions(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      if (activeSuggestionIndex === AUTO_COMPLETE.MAX_SHOW - 1) {
        focusSuggestion(0);
      } else {
        focusSuggestion(activeSuggestionIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      if (activeSuggestionIndex <= 0) {
        removeFocusSuggestion();
      } else {
        focusSuggestion(activeSuggestionIndex - 1);
      }
    } else if (e.key === 'Enter' && activeSuggestionIndex >= 0) {
      setBothInputs('');
      const target = document.querySelector(`#id-${activeSuggestionIndex}`) as HTMLDivElement;
      setSelectedIndex(Number(target?.dataset.index));
      resetSuggestionList();
    }
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement;
    setBothInputs('');
    setSelectedIndex(Number(target.dataset.index));
    resetSuggestionList();
  };

  return [
    filteredSuggestions,
    activeSuggestionIndex,
    setActiveSuggestionIndex,
    showSuggestions,
    inputTyped,
    inputAutoCompleted,
    onKeyDown,
    onClick,
    optimizedFn,
  ];
};
