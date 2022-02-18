import { CHO, JUNG, JONG } from 'commons/hangul';
import { SearchData } from 'types/searchData';

const toHangulUniCode = (word: string) => {
  return word.charCodeAt(0) - 0xac00;
};

const isHangul = (word: string) => {
  return (
    toHangulUniCode('가') <= toHangulUniCode(word) && toHangulUniCode(word) <= toHangulUniCode('힣')
  );
};

const disassembleWord = (word: string) => {
  const wordCode = toHangulUniCode(word);
  const jongCode = wordCode % 28;
  const jungCode = ((wordCode - jongCode) / 28) % 21;
  const choCode = ((wordCode - jongCode) / 28 - jungCode) / 21;

  return [CHO[choCode], JUNG[jungCode], JONG[jongCode]].filter((sung) => sung !== '');
};

export const disassembleSentence = (sentence: string) => {
  return sentence.split('').reduce((prev: string[], curr) => {
    if (isHangul(curr)) return [...prev, ...disassembleWord(curr)];
    return [...prev, curr.toLowerCase()];
  }, []);
};

export const disassembleHangul = (drugData: SearchData[]) => {
  return drugData.map((drug, idx) => ({
    properties: {
      ...drug.properties,
      disassemble: disassembleSentence(drug.properties.product),
      index: idx,
    },
  }));
};
