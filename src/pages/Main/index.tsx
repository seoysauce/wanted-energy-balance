import React, { useState, useEffect } from 'react';
import { SearchData } from 'types/searchData';
import { AutoComplete } from 'components';
import { disassembleHangul } from 'utils';
import { API_ROOT } from 'commons';
import * as S from './style';

export const Main = () => {
  const [drugData, setDrugData] = useState<SearchData[]>([
    { properties: { product: '로드 중...', disassemble: [''] } },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ROOT);
        if (response.status > 400) {
          throw new Error('서버 요청에 실패했습니다');
        }
        const json = await response.json();
        setDrugData(disassembleHangul(json.features));
      } catch (error) {
        console.log('서버가 응답하지 않습니다');
      }
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      <AutoComplete suggestions={drugData} />
    </S.Container>
  );
};
