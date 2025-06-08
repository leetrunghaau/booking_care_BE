function getActiveDays(binaryString) {
  if (binaryString.length !== 7 || /[^01]/.test(binaryString)) {
    return []
  }
  const daysOriginal = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const daysOrder = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  const dayToIndex = {
    "CN": 0,
    "T2": 1,
    "T3": 2,
    "T4": 3,
    "T5": 4,
    "T6": 5,
    "T7": 6,
  };
  const result = [];
  for (const day of daysOrder) {
    const idx = dayToIndex[day];
    if (binaryString[idx] === "1") {
      result.push(day);
    }
  }

  return result;
}
function getBinaryFromActiveDays(activeDays) {
  const dayToIndex = {
    "CN": 0,
    "T2": 1,
    "T3": 2,
    "T4": 3,
    "T5": 4,
    "T6": 5,
    "T7": 6,
  };

  // Khởi tạo chuỗi nhị phân với 7 số 0
  const binaryArray = Array(7).fill("0");

  for (const day of activeDays) {
    const index = dayToIndex[day];
    if (index !== undefined) {
      binaryArray[index] = "1";
    }
  }

  return binaryArray.join("");
}
module.exports = {
    getActiveDays,
    getBinaryFromActiveDays
}
