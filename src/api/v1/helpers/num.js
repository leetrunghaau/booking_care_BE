const moment = require("moment");



const formatPhoneNumber = (input) => {
  if (!input || typeof input !== "string") return "Không có thông tin";

  const digits = input.replace(/\D/g, "");

  // Kiểm tra nếu không đủ số hợp lệ (ví dụ < 4 ký tự) thì trả về
  if (digits.length < 4) return "Không có thông tin";

  const firstGroup = digits.slice(0, 4);
  const rest = digits.slice(4);
  const restGroups = rest.match(/.{1,3}/g) || [];

  return [firstGroup, ...restGroups].join(" ");
}


function formatVND(amount) {
  if (typeof amount !== 'number' || isNaN(amount)) return "Không có thông tin";

  return amount.toLocaleString('vi-VN', {
    maximumFractionDigits: 0
  }) + " VND";
}


function formatTime(timeString = null, display12 = false) {
  if (!timeString || !moment(timeString, 'HH:mm:ss', true).isValid()) {
    return "Không xác định";
  }
  const time = moment(timeString, 'HH:mm:ss');
  const hour = time.hour();
  const minute = time.minute();

  const period = hour < 12 ? 'AM' : 'PM';
  const hourDisplay = display12 ? (hour % 12 === 0 ? 12 : hour % 12) : hour
  return `${hourDisplay} giờ ${minute} phút ${period}`;
}

function calculateBMI(weightKg, heightCm) {
    if (typeof weightKg !== 'number' || typeof heightCm !== 'number' || !weightKg || !heightCm) {
        return 'Không có thông tin';
    }

    const heightM = heightCm / 100; // Chuyển từ cm sang mét

    if (heightM <= 0) {
        return 'Không có thông tin';
    }

    const bmi = weightKg / (heightM * heightM);
    return parseFloat(bmi.toFixed(2)); // Làm tròn đến 2 chữ số thập phân
}

module.exports = {
  formatPhoneNumber,
  formatVND,
  formatTime,
  calculateBMI
}