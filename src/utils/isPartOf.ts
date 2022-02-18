interface IisPartOfParam {
  properties: {
    product: string;
    tags?: Array<string>;
    disassemble: Array<string>;
  };
  disassembledInput: Array<string>;
  value: string;
}

export const isPartOf = ({ properties, disassembledInput, value }: IisPartOfParam) => {
  let array1Idx = 0;
  let array2Idx = 0;
  const isTagExist = 'tags' in properties;

  while (array1Idx < properties.disassemble.length && array2Idx < disassembledInput.length) {
    if (properties.disassemble[array1Idx] === disassembledInput[array2Idx]) array2Idx += 1;
    array1Idx += 1;
  }

  if (array2Idx === disassembledInput.length || (isTagExist && properties.tags?.includes(value)))
    return true;
  return false;
};
