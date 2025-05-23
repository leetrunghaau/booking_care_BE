const createError = require('http-errors');
const { resOk } = require('../helpers/utils');
class Home {
    static async doctors(req, res, next) {
        try {
            const rs = [
                {
                    id: 1,
                    name: "Nguyễn Văn A",
                    img: "/placeholder.svg",
                    slug: "Nguyen-Van-A-00004",
                    specialty: "Chuyên khoa Tim mạch",
                    rating: 3.7,
                    sumRating: 120
                },
                {
                    id: 2,
                    name: "Nguyễn Văn A",
                    img: "/placeholder.svg",
                    slug: "Nguyen-Van-A-00004",
                    specialty: "Chuyên khoa Tim mạch",
                    rating: 3.7,
                    sumRating: 120
                },
                {
                    id: 3,
                    name: "Nguyễn Văn A",
                    img: "/placeholder.svg",
                    slug: "Nguyen-Van-A-00004",
                    specialty: "Chuyên khoa Tim mạch",
                    rating: 3.7,
                    sumRating: 120
                },
                {
                    id: 4,
                    name: "Nguyễn Văn A",
                    img: "/placeholder.svg",
                    slug: "Nguyen-Van-A-00004",
                    specialty: "Chuyên khoa Tim mạch",
                    rating: 3.7,
                    sumRating: 120
                }
            ]
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async specialties(req, res, next) {
        try {
            const rs = [
                { icon: "Brain", name: "Thần kinh", slug: "than-kinh" },
                { icon: "Heart", name: "Tim mạch", slug: "tim-mach" },
                { icon: "Eye", name: "Mắt", slug: "mat" },
                { icon: "Bone", name: "Cơ xương khớp", slug: "co-xuong-khop" },
                { icon: "Baby", name: "Nhi khoa", slug: "nhi-khoa" },
                { icon: "Stethoscope", name: "Tai mũi họng", slug: "tai-mui-hong" },
            ]
            resOk(res, rs);
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }


}
module.exports = Home;
