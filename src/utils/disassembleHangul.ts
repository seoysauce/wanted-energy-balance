import { Cho, Jung, Jong } from 'commons/hangul';
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

  return [Cho[choCode], Jung[jungCode], Jong[jongCode]].filter((sung) => sung !== '');
};

const disassembleSentence = (sentence: string) => {
  return sentence.split('').reduce((prev: string[], curr) => {
    if (isHangul(curr)) return [...prev, ...disassembleWord(curr)];
    return [...prev, curr];
  }, []);
};

export const disassembleHangul = (drugData: SearchData[]) => {
  return drugData.map((drug) => ({
    properties: {
      ...drug.properties,
      disassemble: disassembleSentence(drug.properties.product),
    },
  }));
};
