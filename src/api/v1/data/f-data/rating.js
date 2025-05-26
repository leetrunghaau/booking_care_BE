const fakeRatings = [
  {
    id: 1,
    doctorId: 1,
    patientId: 5,
    rating: '5',
    value: "Bác sĩ rất tận tâm, chu đáo và chuyên nghiệp."
  },
  {
    id: 2,
    doctorId: 2,
    patientId: 3,
    rating: '4',
    value: "Khám kỹ, tư vấn rõ ràng nhưng hơi đông bệnh nhân."
  },
  {
    id: 3,
    doctorId: 1,
    patientId: 7,
    rating: '3',
    value: "Tạm ổn, có thể cải thiện thêm thời gian chờ đợi."
  },
  {
    id: 4,
    doctorId: 3,
    patientId: 10,
    rating: '5',
    value: "Rất hài lòng với thái độ và kết quả điều trị."
  },
  {
    id: 5,
    doctorId: 2,
    patientId: 11,
    rating: '2',
    value: "Bác sĩ hơi vội, chưa giải thích kỹ lắm."
  },
  {
    id: 6,
    doctorId: 4,
    patientId: 4,
    rating: '4',
    value: "Bác sĩ giỏi, phòng khám sạch sẽ."
  },
  {
    id: 7,
    doctorId: 5,
    patientId: 1,
    rating: '5',
    value: "Dịch vụ tốt, bác sĩ thân thiện."
  },
  {
    id: 8,
    doctorId: 3,
    patientId: 2,
    rating: '3',
    value: "Khá ổn nhưng vẫn còn nhiều điểm cải thiện."
  },
  {
    id: 9,
    doctorId: 4,
    patientId: 6,
    rating: '4',
    value: "Bác sĩ tận tình, dễ hiểu."
  },
  {
    id: 10,
    doctorId: 1,
    patientId: 9,
    rating: '5',
    value: "Cảm ơn bác sĩ, sức khỏe tôi đã cải thiện nhiều."
  },{
    id: 11,
    doctorId: 6,
    patientId: 8,
    rating: '4',
    value: "Bác sĩ có kinh nghiệm, nhưng hơi ít thời gian giải thích."
  },
  {
    id: 12,
    doctorId: 7,
    patientId: 12,
    rating: '5',
    value: "Rất chuyên nghiệp và nhiệt tình."
  },
  {
    id: 13,
    doctorId: 5,
    patientId: 13,
    rating: '3',
    value: "Khá tốt nhưng phòng khám hơi chật chội."
  },
  {
    id: 14,
    doctorId: 8,
    patientId: 14,
    rating: '5',
    value: "Bác sĩ tận tình, giải thích rõ ràng."
  },
  {
    id: 15,
    doctorId: 6,
    patientId: 15,
    rating: '2',
    value: "Tôi thấy chưa hài lòng về dịch vụ tư vấn."
  },
  {
    id: 16,
    doctorId: 7,
    patientId: 16,
    rating: '4',
    value: "Bác sĩ giỏi, tuy nhiên chờ đợi hơi lâu."
  },
  {
    id: 17,
    doctorId: 8,
    patientId: 17,
    rating: '5',
    value: "Dịch vụ tốt, bác sĩ rất thân thiện."
  },
  {
    id: 18,
    doctorId: 9,
    patientId: 18,
    rating: '3',
    value: "Bác sĩ khá tốt, cần cải thiện về thái độ."
  },
  {
    id: 19,
    doctorId: 9,
    patientId: 19,
    rating: '4',
    value: "Khám kỹ, giải thích chi tiết."
  },
  {
    id: 20,
    doctorId: 10,
    patientId: 20,
    rating: '5',
    value: "Bác sĩ chuyên nghiệp, rất đáng tin cậy."
  },
   {
    id: 21,
    doctorId: 11,
    patientId: 21,
    rating: '4',
    value: "Bác sĩ rất nhiệt tình và chuyên môn cao."
  },
  {
    id: 22,
    doctorId: 12,
    patientId: 22,
    rating: '5',
    value: "Tôi rất hài lòng với dịch vụ và kết quả điều trị."
  },
  {
    id: 23,
    doctorId: 11,
    patientId: 23,
    rating: '3',
    value: "Bác sĩ tốt nhưng thời gian khám hơi ngắn."
  },
  {
    id: 24,
    doctorId: 13,
    patientId: 24,
    rating: '5',
    value: "Rất chuyên nghiệp, tận tâm với bệnh nhân."
  },
  {
    id: 25,
    doctorId: 12,
    patientId: 25,
    rating: '4',
    value: "Dịch vụ tốt, bác sĩ giải thích chi tiết."
  },
  {
    id: 26,
    doctorId: 14,
    patientId: 26,
    rating: '2',
    value: "Chưa hài lòng về thái độ phục vụ."
  },
  {
    id: 27,
    doctorId: 14,
    patientId: 27,
    rating: '5',
    value: "Bác sĩ rất tận tâm và nhiệt tình."
  },
  {
    id: 28,
    doctorId: 15,
    patientId: 28,
    rating: '4',
    value: "Tôi cảm thấy yên tâm khi khám ở đây."
  },
  {
    id: 29,
    doctorId: 13,
    patientId: 29,
    rating: '3',
    value: "Tạm ổn, cần cải thiện quy trình khám bệnh."
  },
  {
    id: 30,
    doctorId: 15,
    patientId: 30,
    rating: '5',
    value: "Rất chuyên nghiệp và thân thiện với bệnh nhân."
  },
   {
    id: 31,
    doctorId: 16,
    patientId: 31,
    rating: '5',
    value: "Bác sĩ rất tận tâm, tôi rất hài lòng."
  },
  {
    id: 32,
    doctorId: 17,
    patientId: 32,
    rating: '4',
    value: "Khám kỹ lưỡng, tư vấn rõ ràng."
  },
  {
    id: 33,
    doctorId: 18,
    patientId: 33,
    rating: '3',
    value: "Tạm ổn, nhưng cần cải thiện dịch vụ."
  },
  {
    id: 34,
    doctorId: 16,
    patientId: 34,
    rating: '4',
    value: "Bác sĩ nhiệt tình, phòng khám sạch sẽ."
  },
  {
    id: 35,
    doctorId: 19,
    patientId: 35,
    rating: '5',
    value: "Rất chuyên nghiệp và tận tình."
  },
  {
    id: 36,
    doctorId: 17,
    patientId: 36,
    rating: '2',
    value: "Chờ đợi lâu, bác sĩ chưa giải thích kỹ."
  },
  {
    id: 37,
    doctorId: 18,
    patientId: 37,
    rating: '4',
    value: "Khá hài lòng với dịch vụ tại đây."
  },
  {
    id: 38,
    doctorId: 19,
    patientId: 38,
    rating: '5',
    value: "Bác sĩ tận tâm và thân thiện."
  },
  {
    id: 39,
    doctorId: 20,
    patientId: 39,
    rating: '3',
    value: "Tạm ổn, có thể cải thiện thêm."
  },
  {
    id: 40,
    doctorId: 20,
    patientId: 40,
    rating: '4',
    value: "Dịch vụ tốt, bác sĩ tận tình."
  },
   {
    id: 41,
    doctorId: 21,
    patientId: 41,
    rating: '5',
    value: "Bác sĩ rất tận tâm và chuyên nghiệp."
  },
  {
    id: 42,
    doctorId: 22,
    patientId: 42,
    rating: '4',
    value: "Khám kỹ, tư vấn cẩn thận."
  },
  {
    id: 43,
    doctorId: 23,
    patientId: 43,
    rating: '3',
    value: "Tạm ổn, phòng khám hơi đông."
  },
  {
    id: 44,
    doctorId: 21,
    patientId: 44,
    rating: '5',
    value: "Rất hài lòng về dịch vụ và thái độ của bác sĩ."
  },
  {
    id: 45,
    doctorId: 22,
    patientId: 45,
    rating: '4',
    value: "Bác sĩ giải thích rõ ràng, dễ hiểu."
  },
  {
    id: 46,
    doctorId: 23,
    patientId: 46,
    rating: '2',
    value: "Chưa hài lòng lắm, cần cải thiện thêm."
  },
  {
    id: 47,
    doctorId: 24,
    patientId: 47,
    rating: '5',
    value: "Bác sĩ tận tình, rất thân thiện."
  },
  {
    id: 48,
    doctorId: 25,
    patientId: 48,
    rating: '4',
    value: "Khám tốt, nhưng thời gian chờ lâu."
  },
  {
    id: 49,
    doctorId: 24,
    patientId: 49,
    rating: '3',
    value: "Ổn, nhưng phòng khám cần sạch sẽ hơn."
  },
  {
    id: 50,
    doctorId: 25,
    patientId: 50,
    rating: '5',
    value: "Tôi rất hài lòng với bác sĩ và dịch vụ."
  }
];

module.exports = fakeRatings;
