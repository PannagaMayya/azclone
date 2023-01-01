export const priceconvertInd = (val) => {
  let str = val.toString();
  let strdec = str.split(".")[1] || "00";
  strdec = strdec + "00";
  str = str.split(".")[0];
  if (str <= 999) {
    return str + "." + strdec.slice(0, 2);
  }

  let strlast = str.slice(-3);
  str = str.slice(0, -3);
  let strfin = "," + strlast + "." + strdec.slice(0, 2);
  const recurse = (str1, str2) => {
    if (str1.length > 2) {
      str2 = "," + str1.slice(-2) + str2;
      str1 = str1.slice(0, -2);
      [str1, str2] = recurse(str1, str2);
      return [str1, str2];
    } else {
      return [str1, str1 + str2];
    }
  };
  [str, strfin] = recurse(str, strfin);
  return strfin;
};
