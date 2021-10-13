export const formatNumberCartTotal = (number: number) => {
  return Number(number).toFixed(2).replace('.', ',');
};

export const formatNumberCart = (number: number) => {
  return number.toString();
};

export const formatNumber = (number: number) => {
  if (number < 10) return '0' + number;
  return number;
};

export const formatPage = (number: number) => {
  let helper: any = [];
  while (number > 0) {
    number = number - 1;
    helper.push(1);
  }
  return helper;
};

export const formatDate = (date: string) => {
  const dd = date[8] + date[9];
  const mm = date[5] + date[6];
  const yy = date[0] + date[1] + date[2] + date[3];
  return `${dd}/${mm}/${yy}`;
};

export const formatLineBreak = (text: string) => {
  return text.replace(/\. /g, '.\n');
};

export const BASE_URL = 'http://192.168.56.1:3333';
