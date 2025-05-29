function normalizeText(str) {
    if (typeof str !== 'string') return '';
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // bỏ dấu tiếng Việt
        .toLowerCase()
        .trim();
}
module.exports = {
    normalizeText
}