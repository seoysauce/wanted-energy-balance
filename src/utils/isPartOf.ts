interface IisPartOfParam {
  properties: {
    product: string;
    tags?: Array<string>;
    disassemble: Array<string>;
    brand?: string;
  };
  disassembledInput: Array<string>;
  value: string;
}

const isDrugNameInInput = (
  drugNameDisassembled: Array<string>,
  inputDisassembled: Array<string>,
) => {
  let drugNameIdx = 0;
  let inputIdx = 0;

  while (drugNameIdx < drugNameDisassembled.length && inputIdx < inputDisassembled.length) {
    if (drugNameDisassembled[drugNameIdx] === inputDisassembled[inputIdx]) inputIdx += 1;
    drugNameIdx += 1;
  }

  return inputIdx === inputDisassembled.length;
};

const isTagInInput = (value: string, tags: Array<string>) => {
  return tags.includes(value);
};

const isBrandInInput = (value: string, brand: string) => {
  return brand === value;
};

export const isPartOf = ({ properties, disassembledInput, value }: IisPartOfParam) => {
  if (isDrugNameInInput(properties.disassemble, disassembledInput)) return true;

  if (properties.tags && isTagInInput(value, properties.tags)) return true;

  if (properties.brand && isBrandInInput(value, properties.brand)) return true;

  return false;
};
