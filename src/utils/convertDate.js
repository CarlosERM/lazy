export const convertDate = (finalDate) => {
  const date = `${finalDate.slice(8, 10)}/${finalDate.slice(
    5,
    7
  )}/${finalDate.slice(0, 4)}`;
  return date;
};
