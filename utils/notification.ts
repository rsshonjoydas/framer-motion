// * utility to generate && remove notifications
export const remove = (arr: any[], item: any) => {
  const newArr = [...arr];
  newArr.splice(
    newArr.findIndex((i) => i === item),
    1
  );
  return newArr;
};

let newIndex = 0;
export const add = (arr: any[], text: string, style: string) => {
  newIndex += 1;
  return [...arr, { id: newIndex, text, style }];
};
