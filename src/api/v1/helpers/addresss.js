const stringSimilarity = require('string-similarity');


const provincesWithWeight = [
    { name: "Hồ Chí Minh", weight: 1 },
    { name: "Hà Nội", weight: 2 },
    { name: "Đà Nẵng", weight: 3 },
    { name: "Bình Dương", weight: 4 },
    { name: "Đồng Nai", weight: 5 },
    { name: "Cần Thơ", weight: 6 },
    { name: "Hải Phòng", weight: 7 },
    { name: "Quảng Ninh", weight: 8 },
    { name: "Bà Rịa - Vũng Tàu", weight: 9 },
    { name: "Thừa Thiên Huế", weight: 10 },

    { name: "Long An", weight: 11 },
    { name: "Kiên Giang", weight: 12 },
    { name: "Bắc Ninh", weight: 13 },
    { name: "Nam Định", weight: 14 },
    { name: "Thanh Hóa", weight: 15 },
    { name: "Nghệ An", weight: 16 },
    { name: "Lâm Đồng", weight: 17 },
    { name: "Quảng Nam", weight: 18 },
    { name: "An Giang", weight: 19 },
    { name: "Tiền Giang", weight: 20 },
    { name: "Vĩnh Long", weight: 21 },
    { name: "Bình Định", weight: 22 },
    { name: "Thái Nguyên", weight: 23 },
    { name: "Phú Thọ", weight: 24 },
    { name: "Tây Ninh", weight: 25 },
    { name: "Bến Tre", weight: 26 },
    { name: "Sóc Trăng", weight: 27 },
    { name: "Hậu Giang", weight: 28 },
    { name: "Trà Vinh", weight: 29 },
    { name: "Quảng Ngãi", weight: 30 },

    { name: "Hòa Bình", weight: 31 },
    { name: "Bình Thuận", weight: 32 },
    { name: "Tuyên Quang", weight: 33 },
    { name: "Bắc Giang", weight: 34 },
    { name: "Yên Bái", weight: 35 },
    { name: "Lào Cai", weight: 36 },
    { name: "Lạng Sơn", weight: 37 },
    { name: "Cao Bằng", weight: 38 },
    { name: "Điện Biên", weight: 39 },
    { name: "Sơn La", weight: 40 },
    { name: "Lai Châu", weight: 41 },
    { name: "Kon Tum", weight: 42 },
    { name: "Gia Lai", weight: 43 },
    { name: "Đắk Lắk", weight: 44 },
    { name: "Đắk Nông", weight: 45 },
    { name: "Ninh Thuận", weight: 46 },
    { name: "Phú Yên", weight: 47 },
    { name: "Bạc Liêu", weight: 48 },
    { name: "Cà Mau", weight: 49 },
    { name: "Hà Nam", weight: 50 },
    { name: "Ninh Bình", weight: 51 },
    { name: "Quảng Trị", weight: 52 },
    { name: "Hà Tĩnh", weight: 53 },
    { name: "Bắc Kạn", weight: 54 },
    { name: "Hưng Yên", weight: 55 },
    { name: "Hải Dương", weight: 56 },
    { name: "Thái Bình", weight: 57 },
    { name: "Vĩnh Phúc", weight: 58 },
    { name: "Quảng Bình", weight: 59 },
    { name: "Hà Giang", weight: 60 },
    { name: "Bình Phước", weight: 61 },
    { name: "Tuyên Quang", weight: 62 },
    { name: "Nam Định", weight: 63 }
];


function normalizeVietnamese(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

const provinceAdjacency = {
    "Hà Giang": ["Cao Bằng", "Tuyên Quang", "Lào Cai", "Yên Bái", "Lai Châu"],
    "Cao Bằng": ["Hà Giang", "Tuyên Quang", "Bắc Kạn", "Lạng Sơn", "Quảng Ninh", "Trung Quốc"],
    "Bắc Kạn": ["Cao Bằng", "Tuyên Quang", "Thái Nguyên", "Bắc Giang", "Lạng Sơn"],
    "Tuyên Quang": ["Hà Giang", "Cao Bằng", "Bắc Kạn", "Thái Nguyên", "Vĩnh Phúc", "Phú Thọ"],
    "Lào Cai": ["Hà Giang", "Yên Bái", "Phú Thọ", "Điện Biên", "Lai Châu", "Trung Quốc"],
    "Yên Bái": ["Hà Giang", "Lào Cai", "Phú Thọ", "Thái Nguyên", "Tuyên Quang", "Hòa Bình", "Sơn La"],
    "Điện Biên": ["Lào Cai", "Sơn La", "Hòa Bình", "Lai Châu", "Trung Quốc"],
    "Hòa Bình": ["Yên Bái", "Sơn La", "Thanh Hóa", "Ninh Bình", "Phú Thọ", "Thái Nguyên"],
    "Lai Châu": ["Hà Giang", "Lào Cai", "Điện Biên", "Sơn La"],
    "Sơn La": ["Hòa Bình", "Yên Bái", "Lai Châu", "Điện Biên", "Hà Nội", "Phú Thọ"],
    "Thanh Hóa": ["Hòa Bình", "Ninh Bình", "Hà Tĩnh", "Nghệ An", "Cao Bằng"],
    "Nghệ An": ["Thanh Hóa", "Hà Tĩnh", "Quảng Bình", "Lào", "Hà Nội"],
    "Hà Tĩnh": ["Thanh Hóa", "Nghệ An", "Quảng Bình", "Quảng Trị"],
    "Quảng Bình": ["Hà Tĩnh", "Nghệ An", "Quảng Trị"],
    "Quảng Trị": ["Quảng Bình", "Thừa Thiên Huế", "Lào"],
    "Thừa Thiên Huế": ["Quảng Trị", "Quảng Nam", "Đà Nẵng", "Lào"],
    "Đà Nẵng": ["Quảng Nam", "Thừa Thiên Huế", "Quảng Ngãi"],
    "Quảng Nam": ["Đà Nẵng", "Thừa Thiên Huế", "Quảng Ngãi", "Quảng Trị", "Lào"],
    "Quảng Ngãi": ["Quảng Nam", "Bình Định", "Quảng Trị", "Lào"],
    "Bình Định": ["Quảng Ngãi", "Phú Yên", "Gia Lai", "Kon Tum"],
    "Phú Yên": ["Bình Định", "Khánh Hòa", "Gia Lai", "Kon Tum"],
    "Khánh Hòa": ["Phú Yên", "Ninh Thuận", "Lâm Đồng", "Gia Lai", "Kon Tum"],
    "Ninh Thuận": ["Khánh Hòa", "Bình Thuận", "Lâm Đồng"],
    "Bình Thuận": ["Ninh Thuận", "Khánh Hòa", "Lâm Đồng", "Bà Rịa - Vũng Tàu"],
    "Lâm Đồng": ["Bình Thuận", "Khánh Hòa", "Ninh Thuận", "Bà Rịa - Vũng Tàu", "Đắk Lắk", "Đắk Nông"],
    "Bà Rịa - Vũng Tàu": ["Bình Thuận", "Lâm Đồng", "Đồng Nai", "Hồ Chí Minh", "Tây Ninh"],
    "Đắk Lắk": ["Lâm Đồng", "Đắk Nông", "Gia Lai", "Phú Yên", "Khánh Hòa"],
    "Đắk Nông": ["Lâm Đồng", "Đắk Lắk", "Gia Lai", "Kon Tum"],
    "Gia Lai": ["Đắk Lắk", "Đắk Nông", "Phú Yên", "Khánh Hòa", "Kon Tum"],
    "Kon Tum": ["Đắk Lắk", "Đắk Nông", "Gia Lai", "Khánh Hòa", "Lâm Đồng"],
    "Hồ Chí Minh": ["Bà Rịa - Vũng Tàu", "Đồng Nai", "Bình Dương", "Tây Ninh", "Long An"],
    "Bình Dương": ["Hồ Chí Minh", "Đồng Nai", "Bình Phước", "Tây Ninh"],
    "Bình Phước": ["Bình Dương", "Đồng Nai", "Tây Ninh", "Long An"],
    "Đồng Nai": ["Hồ Chí Minh", "Bà Rịa - Vũng Tàu", "Bình Dương", "Bình Phước", "Lâm Đồng"],
    "Tây Ninh": ["Hồ Chí Minh", "Bình Dương", "Bình Phước", "Long An", "Bà Rịa - Vũng Tàu"],
    "Long An": ["Hồ Chí Minh", "Bình Dương", "Bình Phước", "Tây Ninh", "Bà Rịa - Vũng Tàu", "Tiền Giang"],
    "Tiền Giang": ["Long An", "Bến Tre", "Trà Vinh", "Vĩnh Long", "Đồng Tháp"],
    "Bến Tre": ["Tiền Giang", "Trà Vinh", "Vĩnh Long", "Sóc Trăng"],
    "Trà Vinh": ["Bến Tre", "Tiền Giang", "Vĩnh Long", "Sóc Trăng"],
    "Vĩnh Long": ["Tiền Giang", "Bến Tre", "Trà Vinh", "Đồng Tháp", "Cần Thơ"],
    "Sóc Trăng": ["Bến Tre", "Trà Vinh", "Vĩnh Long", "Hậu Giang", "Bạc Liêu"],
    "Hậu Giang": ["Sóc Trăng", "Bạc Liêu", "Kiên Giang", "Cần Thơ"],
    "Bạc Liêu": ["Sóc Trăng", "Hậu Giang", "Cà Mau"],
    "Cà Mau": ["Bạc Liêu", "Hậu Giang", "Kiên Giang"],
    "Kiên Giang": ["Hậu Giang", "Cà Mau", "An Giang", "Đồng Tháp", "Campuchia"],
    "An Giang": ["Kiên Giang", "Đồng Tháp", "Cần Thơ", "Campuchia"],
    "Cần Thơ": ["Vĩnh Long", "Hậu Giang", "An Giang", "Sóc Trăng"],
};


function assignWeightsFrom(provinceName, adjacencyMap) {
    const visited = new Set();
    const queue = [{ name: provinceName, weight: 0 }];
    const weights = {};

    while (queue.length) {
        const { name, weight } = queue.shift();
        if (visited.has(name)) continue;
        visited.add(name);
        weights[name] = weight;

        const neighbors = adjacencyMap[name] || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                queue.push({ name: neighbor, weight: weight + 1 });
            }
        }
    }

    return weights;
}

const getProvince = (fullAddresses) => {
    return provincesWithWeight.find(rep =>
        normalizeVietnamese(fullAddresses).includes(normalizeVietnamese(rep.name))
    )?.name;
}

const createListAddress = (fullAddresses, userAddress = "") => {
    const normalizedUserAddress = normalizeVietnamese(userAddress);
    // console.log("✅ normalizedUserAddress:", normalizedUserAddress);

    // Xác định tỉnh người dùng từ fullAddresses
    const userProvince = getProvince(userAddress)

    // console.log("📍 User Province detected:", userProvince);

    // Gán trọng số địa lý (gần = nhỏ)
    const geoWeights = assignWeightsFrom(userProvince, provinceAdjacency);
    // console.log("📦 Geo Distance Weights:", geoWeights);

    const matchedRepresentatives = provincesWithWeight
        .filter(rep =>
            fullAddresses.some(addr =>
                normalizeVietnamese(addr).includes(normalizeVietnamese(rep.name))
            )
        )
        .map(rep => {
            const distanceWeight = geoWeights[rep.name] ?? 99;
            return {
                ...rep,
                geoWeight: distanceWeight
            };
        });

    // console.log("📋 Matched Representatives with Geo Weights:");
    // console.table(matchedRepresentatives);

    const sorted = matchedRepresentatives
        .sort((a, b) => a.geoWeight - b.geoWeight)
        .map(rep => rep.name);

    // console.log("✅ Sorted Representative Addresses (by proximity):", sorted);

    return sorted;



}

module.exports = {
    createListAddress,
    getProvince

}