import React from 'react';

import * as S from './style';

interface ISuggestionItemProps {
  suggestion: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const SuggestionItem = ({ suggestion, isActive, onClick }: ISuggestionItemProps) => {
  return (
    <S.Container isActive={isActive}>
      <div onClick={onClick} onKeyDown={() => {}} role="none">
        {suggestion}
      </div>
    </S.Container>
  );
};
