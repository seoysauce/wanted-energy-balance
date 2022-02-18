import React, { useState, useCallback } from 'react';
import { SearchData } from 'types/searchData';
import { disassembleSentence, isPartOf } from 'utils';

export const useAutoComplete = (
  suggestions: SearchData[],
): [
  Array<string>,
  number,
  boolean,
  string,
  string,
  (e: React.KeyboardEvent<HTMLInputElement>) => void,
  (e: React.MouseEvent<HTMLDivElement>) => void,
  (value: string) => void,
] => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<Array<string>>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputTyped, setInputTyped] = useState('');
  const [inputAutoCompleted, setInputAutoCompleted] = useState('');

  const filterLogic = (disassembledUserInput: string[], suggestion: SearchData) => {
    return isPartOf(suggestion.properties.disassemble, disassembledUserInput);
  };

  const resetSuggestionList = () => {
    setFilteredSuggestions([]);
    setActiveSuggestionIndex(-1);
    setShowSuggestions(false);
  };

  const focusSuggestion = (focusTarget: number) => {
    setActiveSuggestionIndex(focusTarget);
    setInputAutoCompleted(filteredSuggestions[focusTarget]);
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
      .filter((suggestion) => filterLogic(disassembleSentence(value), suggestion))
      .map((suggestion) => suggestion.properties.product);

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
      if (activeSuggestionIndex === filteredSuggestions.length - 1) {
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
    }
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setBothInputs(target.innerText);
    resetSuggestionList();
  };

  return [
    filteredSuggestions,
    activeSuggestionIndex,
    showSuggestions,
    inputTyped,
    inputAutoCompleted,
    onKeyDown,
    onClick,
    optimizedFn,
  ];
};
