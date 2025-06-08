const createError = require("http-errors");
const { resOk } = require("../helpers/utils");
const DoctorSV = require("../services/doctor");
const HospitalSV = require("../services/hospital");
const SpecialtiesSV = require("../services/specialties");
const { formatPhoneNumber } = require("../helpers/num");

class AdminDoctors {
  static async getAvailableDoctors(req, res, next) {
    try {
      const rs = [
        {
          id: "1",
          name: "TS. BS. Nguyễn Văn A",
          specialty: "Tim mạch",
          hospital: "Bệnh viện Đa khoa Trung ương",
          experience: "15 năm",
          appointments: 245,
          rating: 4.9,
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "2",
          name: "PGS. TS. Trần Thị B",
          specialty: "Nhi khoa",
          hospital: "Bệnh viện Nhi Trung ương",
          experience: "12 năm",
          appointments: 198,
          rating: 4.8,
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "3",
          name: "BS. CKI. Lê Văn C",
          specialty: "Da liễu",
          hospital: "Bệnh viện Da liễu Trung ương",
          experience: "8 năm",
          appointments: 156,
          rating: 4.7,
          status: "inactive",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "4",
          name: "BS. CKII. Phạm Thị D",
          specialty: "Thần kinh",
          hospital: "Bệnh viện Bạch Mai",
          experience: "10 năm",
          appointments: 187,
          rating: 4.6,
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        {
          id: "5",
          name: "TS. BS. Hoàng Văn E",
          specialty: "Nội tiết",
          hospital: "Bệnh viện Việt Đức",
          experience: "14 năm",
          appointments: 210,
          rating: 4.5,
          status: "active",
          avatar: "/placeholder.svg?height=40&width=40",
        },
      ];
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async getDoctors(req, res, next) {
    try {
      let { page, hospital, specialty, search } = req.query
      page = page ? page - 1 : 0
      const data = await DoctorSV.allInPage(page, search, hospital, specialty)
      const doctors = data.data.map(i => ({
        id: i.id,
        slug: i.slug,
        name: i.name,
        code: i.code,
        email: i.user?.email ?? i.email ?? "không có thông tin",
        img: i.img,
        phone: formatPhoneNumber(i.phone),
        specialty: i.specialty?.name ?? "Không có thông tin",
        specialtyIcon: i.specialty?.icon ?? "",
        hospital: i.hospital?.name ?? "không có thông tin"
      }))
      resOk(res, {
        doctos: doctors,
        page: page + 1,
        totalPages: Math.ceil(data.total / 5),
        total: data.total,
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async getBase(req, res, next) {
    try {
      const hospitals = await HospitalSV.all()
      const specialties = await SpecialtiesSV.all()


      resOk(res, {
        hospitals: hospitals,
        specialties: specialties,
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

}
module.exports = AdminDoctors;
