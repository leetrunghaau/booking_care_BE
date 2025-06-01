const { DataTypes } = require('sequelize');
const db = require('../../config/Database');

const Specialty = db.define("specialty", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    slug: {
        type: DataTypes.STRING(255),
        comment: "name + id (6 dg)"
    },
    img: DataTypes.STRING(255),
    icon: DataTypes.STRING(128), //tên incon trong thư viện lucide
    name: DataTypes.STRING(255),
    title: {
        type: DataTypes.TEXT,
        comment: "mô tả gọn và chủ yếu vói về chửa bệnh gì"
    },
    about: {
        type: DataTypes.TEXT,
        comment: "giới thiệu về chuyên khoa",
    },


    advantages: {
        type: DataTypes.JSON,
        comment: "string[]"

    },
    faqs: {
       type:DataTypes.JSON,
       comment:"{ question: string; answer: string; }[];" 
    },
}, {
    tableName: "specialty",
    timestamps: false
})

module.exports = Specialty