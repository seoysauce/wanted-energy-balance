export const isPartOf = (array1: string[], array2: string[]) => {
  // array1에 array2 내용물이 순서대로 존재하는 지 검사.
  // array1 = ['a', 'b', 'c', 'd'], array2 = ['a','c'] 면 true

  let array1Idx = 0;
  let array2Idx = 0;

  while (array1Idx < array1.length && array2Idx < array2.length) {
    if (array1[array1Idx] === array2[array2Idx]) array2Idx += 1;
    array1Idx += 1;
  }

  if (array2Idx === array2.length) return true;
  return false;

  /*
  for (let i = 0; i < array1.length - array2.length; i += 1) {
    if (JSON.stringify(array1.slice(i, i + array2.length)) === JSON.stringify(array2)) return true;
  }
  return false;
  */
};
