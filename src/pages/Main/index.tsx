import React, { useState, useEffect } from 'react';
import { SearchData } from 'types/searchData';
import { AutoComplete, ResultBox } from 'components';
import { Logo } from 'assets';
import { disassembleHangul } from 'utils';

import * as S from './style';

export const Main = () => {
  const [drugData, setDrugData] = useState<SearchData[]>([
    { properties: { product: '로드 중...', disassemble: [''], index: 0 } },
  ]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://gist.githubusercontent.com/Yummy-sk/ae3c3edc46d39827ff329eabf13824a5/raw/a7012e88e2eaa9aa30404109c146638fef4414ee/wanted_energy_balance.json',
        );
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
      <Logo />
      <AutoComplete suggestions={drugData} setSelectedIndex={setSelectedIndex} />
      {selectedIndex !== null && (
        <ResultBox
          name={drugData[selectedIndex].properties.product}
          imgUrl={`https://picsum.photos/id/${selectedIndex + 50}/200/200`}
          brand={drugData[selectedIndex].properties.brand || '티라노 제약'}
        />
      )}
    </S.Container>
  );
};
