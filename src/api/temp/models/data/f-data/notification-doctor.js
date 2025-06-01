const fakeNotificationDoctors = [
  {
    id: 1,
    doctorId: 1,
    type: 'general',
    title: 'Thông báo chung',
    message: 'Hệ thống sẽ bảo trì vào tối nay từ 22h đến 24h.',
    isRead: false,
    createdAt: new Date('2025-05-01T09:00:00')
  },
  {
    id: 2,
    doctorId: 2,
    type: 'appointment',
    title: 'Lịch hẹn mới',
    message: 'Bạn có một lịch hẹn khám mới vào ngày 28/05/2025.',
    isRead: false,
    createdAt: new Date('2025-05-10T10:30:00')
  },
  {
    id: 3,
    doctorId: 3,
    type: 'reminder',
    title: 'Nhắc nhở lịch làm việc',
    message: 'Bạn có cuộc họp với ban giám đốc lúc 14h hôm nay.',
    isRead: true,
    createdAt: new Date('2025-05-12T08:00:00')
  },
  {
    id: 4,
    doctorId: 4,
    type: 'promotion',
    title: 'Ưu đãi dịch vụ',
    message: 'Giảm 20% cho các dịch vụ khám tổng quát trong tháng này.',
    isRead: false,
    createdAt: new Date('2025-05-15T12:00:00')
  },
  {
    id: 5,
    doctorId: 1,
    type: 'appointment',
    title: 'Xác nhận lịch hẹn',
    message: 'Lịch hẹn khám ngày 30/05/2025 đã được xác nhận.',
    isRead: true,
    createdAt: new Date('2025-05-14T16:00:00')
  },
  {
    id: 6,
    doctorId: 5,
    type: 'general',
    title: 'Thông báo chung',
    message: 'Phần mềm đã cập nhật phiên bản mới, vui lòng khởi động lại.',
    isRead: false,
    createdAt: new Date('2025-05-18T11:00:00')
  },
  {
    id: 7,
    doctorId: 6,
    type: 'reminder',
    title: 'Nhắc nhở lịch làm việc',
    message: 'Bạn có lịch khám bệnh nhân lúc 9h sáng mai.',
    isRead: false,
    createdAt: new Date('2025-05-19T17:30:00')
  },
  {
    id: 8,
    doctorId: 7,
    type: 'promotion',
    title: 'Chương trình khuyến mãi',
    message: 'Tặng thêm 1 buổi tư vấn miễn phí khi đặt lịch khám trong tuần này.',
    isRead: true,
    createdAt: new Date('2025-05-20T09:00:00')
  },
  {
    id: 9,
    doctorId: 8,
    type: 'appointment',
    title: 'Thông báo lịch hẹn',
    message: 'Lịch hẹn khám ngày 01/06/2025 đã bị hủy, vui lòng kiểm tra lại.',
    isRead: false,
    createdAt: new Date('2025-05-21T10:00:00')
  },
  {
    id: 10,
    doctorId: 9,
    type: 'general',
    title: 'Thông báo chung',
    message: 'Tất cả nhân viên vui lòng tham gia buổi đào tạo vào ngày 25/05/2025.',
    isRead: true,
    createdAt: new Date('2025-05-22T08:00:00')
  },
  {
    id: 11,
    doctorId: 10,
    type: 'general',
    title: 'Cập nhật phần mềm',
    message: 'Phần mềm quản lý bệnh viện sẽ được nâng cấp vào cuối tuần này.',
    isRead: false,
    createdAt: new Date('2025-05-23T15:00:00')
  },
  {
    id: 12,
    doctorId: 11,
    type: 'appointment',
    title: 'Lịch hẹn mới',
    message: 'Bạn có lịch hẹn khám vào ngày 02/06/2025 lúc 14h30.',
    isRead: false,
    createdAt: new Date('2025-05-24T10:30:00')
  },
  {
    id: 13,
    doctorId: 12,
    type: 'reminder',
    title: 'Nhắc nhở công việc',
    message: 'Đừng quên kiểm tra hồ sơ bệnh án trước 16h hôm nay.',
    isRead: true,
    createdAt: new Date('2025-05-24T09:00:00')
  },
  {
    id: 14,
    doctorId: 13,
    type: 'promotion',
    title: 'Ưu đãi đặc biệt',
    message: 'Giảm giá 15% khi đăng ký khóa đào tạo chuyên sâu tháng này.',
    isRead: false,
    createdAt: new Date('2025-05-25T13:00:00')
  },
  {
    id: 15,
    doctorId: 14,
    type: 'appointment',
    title: 'Xác nhận lịch hẹn',
    message: 'Lịch hẹn khám ngày 05/06/2025 đã được xác nhận.',
    isRead: true,
    createdAt: new Date('2025-05-25T16:00:00')
  },
  {
    id: 16,
    doctorId: 15,
    type: 'general',
    title: 'Thông báo quan trọng',
    message: 'Vui lòng cập nhật thông tin cá nhân trên hệ thống.',
    isRead: false,
    createdAt: new Date('2025-05-26T08:30:00')
  },
  {
    id: 17,
    doctorId: 16,
    type: 'reminder',
    title: 'Nhắc nhở lịch làm việc',
    message: 'Bạn có lịch hội chẩn lúc 10h sáng mai.',
    isRead: false,
    createdAt: new Date('2025-05-26T09:00:00')
  },
  {
    id: 18,
    doctorId: 17,
    type: 'promotion',
    title: 'Khuyến mãi dịch vụ',
    message: 'Ưu đãi đặc biệt cho dịch vụ xét nghiệm vào cuối tuần này.',
    isRead: true,
    createdAt: new Date('2025-05-26T11:00:00')
  },
  {
    id: 19,
    doctorId: 18,
    type: 'appointment',
    title: 'Thông báo lịch hẹn',
    message: 'Lịch hẹn khám ngày 10/06/2025 đã được cập nhật.',
    isRead: false,
    createdAt: new Date('2025-05-26T12:00:00')
  },
  {
    id: 20,
    doctorId: 19,
    type: 'general',
    title: 'Thông báo chung',
    message: 'Buổi họp toàn viện diễn ra vào ngày 27/05/2025 lúc 8h.',
    isRead: true,
    createdAt: new Date('2025-05-26T13:00:00')
  },
   {
    id: 21,
    doctorId: 20,
    type: 'general',
    title: 'Thông báo bảo trì',
    message: 'Hệ thống sẽ ngừng hoạt động để bảo trì từ 1h đến 3h sáng mai.',
    isRead: false,
    createdAt: new Date('2025-05-27T20:00:00')
  },
  {
    id: 22,
    doctorId: 21,
    type: 'appointment',
    title: 'Lịch hẹn mới được tạo',
    message: 'Bệnh nhân đã đặt lịch khám ngày 15/06/2025 lúc 9h sáng.',
    isRead: false,
    createdAt: new Date('2025-05-27T21:30:00')
  },
  {
    id: 23,
    doctorId: 22,
    type: 'reminder',
    title: 'Nhắc nhở cập nhật hồ sơ',
    message: 'Vui lòng cập nhật hồ sơ bệnh nhân trước ngày 30/05/2025.',
    isRead: true,
    createdAt: new Date('2025-05-27T22:00:00')
  },
  {
    id: 24,
    doctorId: 23,
    type: 'promotion',
    title: 'Ưu đãi mùa hè',
    message: 'Giảm 10% các dịch vụ nha khoa trong tháng 6.',
    isRead: false,
    createdAt: new Date('2025-05-28T08:00:00')
  },
  {
    id: 25,
    doctorId: 24,
    type: 'appointment',
    title: 'Xác nhận lịch hẹn khám',
    message: 'Lịch khám ngày 20/06/2025 đã được xác nhận.',
    isRead: true,
    createdAt: new Date('2025-05-28T09:30:00')
  },
  {
    id: 26,
    doctorId: 25,
    type: 'general',
    title: 'Thông báo đào tạo',
    message: 'Buổi đào tạo chuyên môn sẽ diễn ra vào ngày 29/05/2025.',
    isRead: false,
    createdAt: new Date('2025-05-28T10:00:00')
  },
  {
    id: 27,
    doctorId: 26,
    type: 'reminder',
    title: 'Nhắc nhở cuộc họp',
    message: 'Cuộc họp ban giám đốc lúc 14h ngày 29/05/2025.',
    isRead: false,
    createdAt: new Date('2025-05-28T11:00:00')
  },
  {
    id: 28,
    doctorId: 27,
    type: 'promotion',
    title: 'Chương trình tri ân',
    message: 'Tặng quà tri ân nhân ngày thầy thuốc Việt Nam 27/02.',
    isRead: true,
    createdAt: new Date('2025-05-28T12:00:00')
  },
  {
    id: 29,
    doctorId: 28,
    type: 'appointment',
    title: 'Lịch hẹn bị hủy',
    message: 'Lịch hẹn ngày 22/06/2025 đã bị hủy, vui lòng kiểm tra.',
    isRead: false,
    createdAt: new Date('2025-05-28T13:00:00')
  },
  {
    id: 30,
    doctorId: 29,
    type: 'general',
    title: 'Thông báo lễ tết',
    message: 'Bệnh viện nghỉ lễ từ ngày 30/04 đến 03/05/2025.',
    isRead: true,
    createdAt: new Date('2025-05-28T14:00:00')
  },
  {
    id: 31,
    doctorId: 30,
    type: 'general',
    title: 'Thông báo cập nhật chính sách',
    message: 'Bệnh viện cập nhật chính sách bảo mật mới từ ngày 01/06/2025.',
    isRead: false,
    createdAt: new Date('2025-05-29T08:00:00')
  },
  {
    id: 32,
    doctorId: 31,
    type: 'appointment',
    title: 'Xác nhận lịch hẹn mới',
    message: 'Bệnh nhân A đã đặt lịch khám ngày 03/06/2025 lúc 10h.',
    isRead: false,
    createdAt: new Date('2025-05-29T09:15:00')
  },
  {
    id: 33,
    doctorId: 32,
    type: 'reminder',
    title: 'Nhắc nhở chuẩn bị hồ sơ',
    message: 'Vui lòng chuẩn bị hồ sơ bệnh nhân cho buổi khám ngày mai.',
    isRead: true,
    createdAt: new Date('2025-05-29T10:30:00')
  },
  {
    id: 34,
    doctorId: 33,
    type: 'promotion',
    title: 'Ưu đãi dịch vụ xét nghiệm',
    message: 'Giảm 20% dịch vụ xét nghiệm máu trong tháng này.',
    isRead: false,
    createdAt: new Date('2025-05-29T11:45:00')
  },
  {
    id: 35,
    doctorId: 34,
    type: 'appointment',
    title: 'Lịch hẹn bị thay đổi',
    message: 'Lịch hẹn khám ngày 06/06/2025 đã được thay đổi sang 08/06/2025.',
    isRead: true,
    createdAt: new Date('2025-05-29T13:00:00')
  },
  {
    id: 36,
    doctorId: 35,
    type: 'general',
    title: 'Thông báo ngày làm việc',
    message: 'Bệnh viện sẽ làm việc bình thường vào ngày 30/05/2025.',
    isRead: false,
    createdAt: new Date('2025-05-29T14:15:00')
  },
  {
    id: 37,
    doctorId: 36,
    type: 'reminder',
    title: 'Nhắc nhở cập nhật kết quả xét nghiệm',
    message: 'Vui lòng cập nhật kết quả xét nghiệm trước 15h hôm nay.',
    isRead: false,
    createdAt: new Date('2025-05-29T15:30:00')
  },
  {
    id: 38,
    doctorId: 37,
    type: 'promotion',
    title: 'Khuyến mãi tiêm chủng',
    message: 'Giảm 30% chi phí tiêm chủng cho trẻ em dưới 5 tuổi.',
    isRead: true,
    createdAt: new Date('2025-05-29T16:45:00')
  },
  {
    id: 39,
    doctorId: 38,
    type: 'appointment',
    title: 'Xác nhận lịch khám',
    message: 'Lịch khám ngày 10/06/2025 đã được xác nhận.',
    isRead: false,
    createdAt: new Date('2025-05-29T18:00:00')
  },
  {
    id: 40,
    doctorId: 39,
    type: 'general',
    title: 'Thông báo nghỉ lễ',
    message: 'Bệnh viện nghỉ lễ Quốc khánh từ ngày 01/09 đến 03/09/2025.',
    isRead: true,
    createdAt: new Date('2025-05-29T19:15:00')
  }
];

module.exports = fakeNotificationDoctors;
