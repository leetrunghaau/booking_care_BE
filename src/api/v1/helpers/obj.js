const objAllNull = (obj) => {
    return Object.values(obj).every(v => v == undefined || v == null || v === "" || v == 0) ? null : obj;
}

const normalizeEmptyToNull = (obj) =>{
  const result = {};
  for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    const value = obj[key];
    result[key] = value === '' ? null : value;
  }
  return result;
}
module.exports = {
    objAllNull, 
    normalizeEmptyToNull
}