import { SearchDataWithPrio } from 'types/serachDataWIthPrio';

interface ICalcPrioParam {
  properties: {
    product: string;
    tags?: Array<string>;
    disassemble: Array<string>;
    index: number;
    brand?: string;
  };
  disassembledInput: Array<string>;
  value: string;
}

const drugNamePrio = (drugNameDisassembled: Array<string>, inputDisassembled: Array<string>) => {
  let drugNameIdx = 0;
  let inputIdx = 0;

  while (drugNameIdx < drugNameDisassembled.length && inputIdx < inputDisassembled.length) {
    if (drugNameDisassembled[drugNameIdx] === inputDisassembled[inputIdx]) inputIdx += 1;
    drugNameIdx += 1;
  }

  if (inputIdx === inputDisassembled.length) return drugNameIdx;
  return 100000;
};

const tagPrio = (value: string, tags: Array<string>) => {
  return tags.includes(value);
};

const brandPrio = (value: string, brand: string) => {
  return brand === value;
};

export const calcPrio = ({
  properties,
  disassembledInput,
  value,
}: ICalcPrioParam): SearchDataWithPrio => {
  let priority = drugNamePrio(properties.disassemble, disassembledInput);

  if (priority === 100000) {
    if (properties.brand && brandPrio(value, properties.brand)) priority = 10000;
    if (properties.tags && tagPrio(value, properties.tags)) priority = 1000;
  }
  return {
    properties: {
      ...properties,
      priority,
    },
  };
};
