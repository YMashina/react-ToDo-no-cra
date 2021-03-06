const generateHexString = (length = 5) => {
  let ret = "";
  while (ret.length < length) {
    ret += Math.random().toString(16).substring(2);
  }
  return ret.substring(0, length);
};

export default generateHexString;
