const moment = require("moment");

function normalizeText(str) {
    if (typeof str !== 'string') return '';
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // bỏ dấu tiếng Việt
        .toLowerCase()
        .trim();
}
function getVNGender(gender) {
    if (!gender) return "Không xác định";

    switch (gender.toLowerCase()) {
        case "male":
            return "Nam";
        case "female":
            return "Nữ";
        case "other":
            return "Khác";
        default:
            return "Không xác định";
    }
}

function calculateAge(dateString = '') {
    if (!dateString || !moment(dateString, 'YYYY-MM-DD', true).isValid()) {
        return "Không xác định";
    }
    return moment().diff(moment(dateString, 'YYYY-MM-DD'), 'years');
}
module.exports = {
    normalizeText,
    getVNGender,
    calculateAge
}