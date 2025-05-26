const notificationPatientsFakeData = [
  {
    id: 1,
    patientId: 1,
    type: 'appointment',
    title: 'Nhắc lịch khám',
    message: 'Bạn có lịch khám tại Bệnh viện Đa khoa Hà Nội vào ngày 2025-06-01 lúc 08:00.',
    isRead: false,
    createdAt: new Date('2025-05-20T09:00:00')
  },
  {
    id: 2,
    patientId: 2,
    type: 'reminder',
    title: 'Nhắc tiêm phòng',
    message: 'Bạn cần tiêm mũi nhắc lại vắc xin phòng cúm vào tháng 6 này.',
    isRead: true,
    createdAt: new Date('2025-05-18T15:30:00')
  },
  {
    id: 3,
    patientId: 3,
    type: 'promotion',
    title: 'Ưu đãi khám sức khỏe tổng quát',
    message: 'Giảm giá 20% khi đăng ký khám sức khỏe tổng quát tại Bệnh viện Đa khoa Hà Nội.',
    isRead: false,
    createdAt: new Date('2025-05-25T12:00:00')
  },
  {
    id: 4,
    patientId: 4,
    type: 'general',
    title: 'Thông báo bảo trì hệ thống',
    message: 'Hệ thống đặt lịch sẽ tạm ngưng hoạt động từ 00:00 đến 04:00 ngày 2025-05-28 để bảo trì.',
    isRead: true,
    createdAt: new Date('2025-05-24T18:45:00')
  },
  {
    id: 5,
    patientId: 1,
    type: 'reminder',
    title: 'Nhắc uống thuốc',
    message: 'Bạn nhớ uống thuốc theo đúng liều lượng được bác sĩ kê đơn nhé.',
    isRead: false,
    createdAt: new Date('2025-05-26T08:00:00')
  },
  {
    id: 6,
    patientId: 5,
    type: 'appointment',
    title: 'Xác nhận lịch khám',
    message: 'Lịch khám của bạn tại Phòng khám Đa khoa Trung tâm đã được xác nhận.',
    isRead: false,
    createdAt: new Date('2025-05-22T10:30:00')
  },
   {
    id: 7,
    patientId: 6,
    type: 'promotion',
    title: 'Khuyến mãi dịch vụ xét nghiệm',
    message: 'Giảm 15% cho tất cả dịch vụ xét nghiệm trong tháng 5.',
    isRead: false,
    createdAt: new Date('2025-05-19T14:20:00')
  },
  {
    id: 8,
    patientId: 7,
    type: 'general',
    title: 'Thông báo giờ làm việc',
    message: 'Bệnh viện sẽ mở cửa từ 7:00 đến 18:00 từ thứ 2 đến thứ 7.',
    isRead: true,
    createdAt: new Date('2025-05-21T09:15:00')
  },
  {
    id: 9,
    patientId: 8,
    type: 'reminder',
    title: 'Nhắc tái khám',
    message: 'Bạn cần tái khám sau 2 tuần kể từ lần khám trước.',
    isRead: false,
    createdAt: new Date('2025-05-23T16:00:00')
  },
  {
    id: 10,
    patientId: 9,
    type: 'appointment',
    title: 'Lịch khám hôm nay',
    message: 'Bạn có lịch khám với bác sĩ Nguyễn Văn A lúc 14:00 ngày hôm nay.',
    isRead: true,
    createdAt: new Date('2025-05-26T07:30:00')
  },
  {
    id: 11,
    patientId: 10,
    type: 'promotion',
    title: 'Ưu đãi cho khách hàng mới',
    message: 'Giảm 30% dịch vụ khám tổng quát cho khách hàng đăng ký lần đầu.',
    isRead: false,
    createdAt: new Date('2025-05-20T11:45:00')
  },
  {
    id: 12,
    patientId: 11,
    type: 'general',
    title: 'Thay đổi địa điểm khám',
    message: 'Địa điểm khám của bạn đã được chuyển sang Bệnh viện Đa khoa Trung tâm.',
    isRead: true,
    createdAt: new Date('2025-05-22T13:00:00')
  },
  {
    id: 13,
    patientId: 12,
    type: 'reminder',
    title: 'Nhắc lịch xét nghiệm',
    message: 'Bạn cần đến làm xét nghiệm máu trước ngày 1/6.',
    isRead: false,
    createdAt: new Date('2025-05-24T09:00:00')
  },
  {
    id: 14,
    patientId: 13,
    type: 'appointment',
    title: 'Xác nhận hủy lịch khám',
    message: 'Bạn đã hủy lịch khám ngày 30/5 với bác sĩ Trần Thị B.',
    isRead: true,
    createdAt: new Date('2025-05-25T10:00:00')
  },
  {
    id: 15,
    patientId: 14,
    type: 'promotion',
    title: 'Khuyến mãi tháng 5',
    message: 'Giảm giá 20% cho dịch vụ khám tim mạch trong tháng 5.',
    isRead: false,
    createdAt: new Date('2025-05-18T08:30:00')
  },
  {
    id: 16,
    patientId: 15,
    type: 'general',
    title: 'Thông báo nghỉ lễ',
    message: 'Bệnh viện nghỉ lễ từ ngày 30/4 đến 2/5.',
    isRead: true,
    createdAt: new Date('2025-04-29T18:00:00')
  },
   {
    id: 17,
    patientId: 16,
    type: 'appointment',
    title: 'Lịch khám sắp tới',
    message: 'Bạn có lịch khám với bác sĩ Lê Văn C vào ngày 2025-06-05 lúc 09:30.',
    isRead: false,
    createdAt: new Date('2025-05-27T08:15:00')
  },
  {
    id: 18,
    patientId: 17,
    type: 'reminder',
    title: 'Nhắc lịch tiêm chủng',
    message: 'Bạn cần tiêm nhắc lại vắc xin phòng viêm gan B trước ngày 10/6.',
    isRead: false,
    createdAt: new Date('2025-05-26T10:00:00')
  },
  {
    id: 19,
    patientId: 18,
    type: 'promotion',
    title: 'Ưu đãi khám răng',
    message: 'Giảm 25% dịch vụ khám và chữa răng tại Phòng khám Nha khoa ABC.',
    isRead: true,
    createdAt: new Date('2025-05-23T13:45:00')
  },
  {
    id: 20,
    patientId: 19,
    type: 'general',
    title: 'Thông báo cập nhật dịch vụ',
    message: 'Bệnh viện đã cập nhật thêm dịch vụ khám sức khỏe định kỳ.',
    isRead: false,
    createdAt: new Date('2025-05-25T09:30:00')
  },
  {
    id: 21,
    patientId: 20,
    type: 'appointment',
    title: 'Xác nhận lịch khám',
    message: 'Lịch khám của bạn tại Bệnh viện Trung ương đã được xác nhận.',
    isRead: true,
    createdAt: new Date('2025-05-21T11:00:00')
  },
  {
    id: 22,
    patientId: 1,
    type: 'reminder',
    title: 'Nhắc kiểm tra sức khỏe',
    message: 'Bạn nên thực hiện kiểm tra sức khỏe tổng quát định kỳ sau 6 tháng.',
    isRead: false,
    createdAt: new Date('2025-05-28T07:00:00')
  },
  {
    id: 23,
    patientId: 2,
    type: 'promotion',
    title: 'Khuyến mãi dịch vụ chẩn đoán hình ảnh',
    message: 'Giảm 10% cho dịch vụ chụp MRI và CT scan trong tháng 6.',
    isRead: false,
    createdAt: new Date('2025-05-26T14:20:00')
  },
  {
    id: 24,
    patientId: 3,
    type: 'general',
    title: 'Thông báo bảo trì hệ thống',
    message: 'Hệ thống đăng ký khám sẽ ngừng hoạt động từ 0h đến 6h ngày 1/6 để bảo trì.',
    isRead: true,
    createdAt: new Date('2025-05-27T19:00:00')
  },
  {
    id: 25,
    patientId: 4,
    type: 'appointment',
    title: 'Lịch hẹn mới',
    message: 'Bạn có lịch hẹn khám mới với bác sĩ Phạm Thị D vào 10:00 ngày 2025-06-03.',
    isRead: false,
    createdAt: new Date('2025-05-28T10:30:00')
  },
  {
    id: 26,
    patientId: 5,
    type: 'reminder',
    title: 'Nhắc dùng thuốc',
    message: 'Đừng quên uống thuốc đúng giờ theo chỉ dẫn của bác sĩ nhé.',
    isRead: true,
    createdAt: new Date('2025-05-26T16:00:00')
  },

];

module.exports = notificationPatientsFakeData;
