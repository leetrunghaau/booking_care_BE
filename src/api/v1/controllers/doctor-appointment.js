const createError = require("http-errors");
const { resOk } = require("../helpers/utils");

class DoctorAppointment {
  static async getAllAppointments(req, res, next) {
    try {
      const rs = [
        {
          id: "1",
          patientName: "Nguyễn Văn A",
          patientPhone: "0987654321",
          date: "2025-05-22T09:00:00.000Z", // Today
          time: "09:00",
          duration: 30,
          price: 300000,
          status: "confirmed",
          symptoms: "Đau đầu, sốt nhẹ, mệt mỏi kéo dài 2 ngày",
          address: "Phòng khám số 3, Tầng 2, Tòa nhà Y",
        },
        {
          id: "2",
          patientName: "Trần Thị B",
          patientPhone: "0912345678",
          date: "2025-05-22T10:30:00.000Z", // Today
          time: "10:30",
          duration: 45,
          price: 450000,
          status: "pending",
          symptoms: "Đau bụng, buồn nôn",
          isOnline: true,
        },
        {
          id: "3",
          patientName: "Lê Văn C",
          patientAvatar: "/placeholder.svg?height=48&width=48&text=LVC",
          patientPhone: "0909123456",
          date: "2025-05-24T14:00:00.000Z", // 2 days in the future
          time: "14:00",
          duration: 30,
          price: 300000,
          status: "confirmed",
          address: "Phòng khám số 3, Tầng 2, Tòa nhà Y",
        },
        {
          id: "4",
          patientName: "Phạm Thị D",
          patientPhone: "0978123456",
          date: "2025-05-19T15:30:00.000Z", // 3 days in the past
          time: "15:30",
          duration: 60,
          price: 500000,
          status: "completed",
          symptoms: "Khám sức khỏe định kỳ",
          address: "Phòng khám số 3, Tầng 2, Tòa nhà Y",
        },
        {
          id: "5",
          patientName: "Hoàng Văn E",
          patientPhone: "0918765432",
          date: "2025-05-21T08:00:00.000Z", // Yesterday
          time: "08:00",
          duration: 30,
          price: 300000,
          status: "cancelled",
          symptoms: "Ho, sốt cao",
          isOnline: true,
        },
        {
          id: "6",
          patientName: "Vũ Thị F",
          patientPhone: "0965432109",
          date: "2025-05-27T11:00:00.000Z", // 5 days in the future
          time: "11:00",
          duration: 45,
          price: 450000,
          status: "confirmed",
          address: "Phòng khám số 3, Tầng 2, Tòa nhà Y",
        },
        {
          id: "7",
          patientName: "Ngô Văn G",
          patientPhone: "0934567890",
          date: "2025-05-17T16:00:00.000Z", // 5 days in the past
          time: "16:00",
          duration: 60,
          price: 600000,
          status: "pending",
          symptoms: "Đau họng, khó thở",
          address: "Phòng khám số 5, Tầng 1, Tòa nhà Z",
        },
        {
          id: "8",
          patientName: "Phạm Thị H",
          patientPhone: "0923456789",
          date: "2025-05-15T10:00:00.000Z", // 7 days in the past
          time: "10:00",
          duration: 30,
          price: 300000,
          status: "completed",
          symptoms: "Khám sức khỏe định kỳ",
          isOnline: true,
        },
      ];
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async getAppointmentById(req, res, next) {
    try {
      const { id } = req.params;
      const rs = {
        id: "1",
        patientName: "Nguyễn Văn A",
        patientAvatar: "/placeholder.svg?height=80&width=80",
        patientAge: 45,
        patientGender: "Nam",
        patientPhone: "0987654321",
        patientEmail: "nguyenvana@example.com",
        patientAddress: "123 Đường Lê Lợi, Quận 1, TP.HCM",
        date: new Date().toISOString(),
        time: "09:00",
        duration: 30,
        price: 300000,
        status: "confirmed",
        symptoms:
          "Đau đầu, sốt nhẹ, mệt mỏi kéo dài 2 ngày. Bệnh nhân cho biết có tiếp xúc với người bị cúm trong tuần trước.",
        medicalHistory: [
          {
            date: "15/03/2023",
            diagnosis: "Viêm họng",
            doctor: "BS. Trần Văn B",
          },
          {
            date: "10/12/2022",
            diagnosis: "Đau lưng",
            doctor: "BS. Lê Thị C",
          },
        ],
        vitalSigns: {
          bloodPressure: "120/80 mmHg",
          heartRate: "75 bpm",
          temperature: "37.2°C",
          respiratoryRate: "16 bpm",
          weight: "68 kg",
          height: "170 cm",
        },
        address: "Phòng khám số 3, Tầng 2, Tòa nhà Y",
      };
      resOk(res, rs);
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
}
module.exports = DoctorAppointment;
