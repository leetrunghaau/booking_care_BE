const fakeDoctor = [
   {
    id: 1,
    slug: "nguyen-van-a-000001",
    name: "Nguyễn Văn A",
    phone: "0901234567",
    email: "nguyenvana@example.com",
    dob: "1980-05-15",
    gender: "male",
    hospitalId: 1,
    specialtyId: 1,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.5,
    reviews: 120,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Nguyễn Văn A chuyên khoa Nội tổng quát, với hơn 15 năm kinh nghiệm trong việc chẩn đoán và điều trị các bệnh lý nội khoa.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2003 },
      { degree: "Thạc sĩ Nội khoa", school: "Đại học Y Hà Nội", year: 2008 }
    ],
    technique: ["Khám nội tổng quát", "Siêu âm ổ bụng", "Điều trị bệnh lý tim mạch"],
    awards: [
      { title: "Giải thưởng Bác sĩ xuất sắc", year: 2015 },
      { title: "Giải thưởng Y đức", year: 2018 }
    ],
    analysis: [
      { title: "Nghiên cứu về bệnh lý tăng huyết áp", journal: "Tạp chí Tim mạch", year: 2016 },
      { title: "Phân tích hiệu quả điều trị đái tháo đường", journal: "Tạp chí Nội khoa", year: 2019 }
    ],
    experience: [
      { position: "Bác sĩ Nội khoa", hospital: "Bệnh viện Bạch Mai", period: "2003-2008" },
      { position: "Trưởng khoa Nội", hospital: "Bệnh viện Đa khoa Hà Nội", period: "2008-2015" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 2,
    slug: "nguyen-van-a-000002",
    name: "Nguyễn Văn A",
    phone: "0901234567",
    email: "nguyenvana@example.com",
    dob: "1980-05-15",
    gender: "male",
    hospitalId: 1,
    specialtyId: 1,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.5,
    reviews: 120,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Nguyễn Văn A chuyên khoa Nội tổng quát, với hơn 15 năm kinh nghiệm trong việc chẩn đoán và điều trị các bệnh lý nội khoa.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2003 },
      { degree: "Thạc sĩ Nội khoa", school: "Đại học Y Hà Nội", year: 2008 }
    ],
    technique: ["Khám nội tổng quát", "Siêu âm ổ bụng", "Điều trị bệnh lý tim mạch"],
    awards: [
      { title: "Giải thưởng Bác sĩ xuất sắc", year: 2015 },
      { title: "Giải thưởng Y đức", year: 2018 }
    ],
    analysis: [
      { title: "Nghiên cứu về bệnh lý tăng huyết áp", journal: "Tạp chí Tim mạch", year: 2016 },
      { title: "Phân tích hiệu quả điều trị đái tháo đường", journal: "Tạp chí Nội khoa", year: 2019 }
    ],
    experience: [
      { position: "Bác sĩ Nội khoa", hospital: "Bệnh viện Bạch Mai", period: "2003-2008" },
      { position: "Trưởng khoa Nội", hospital: "Bệnh viện Đa khoa Hà Nội", period: "2008-2015" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 3,
    slug: "le-thi-b-000003",
    name: "Lê Thị B",
    phone: "0902345678",
    email: "lethib@example.com",
    dob: "1985-07-20",
    gender: "female",
    hospitalId: 2,
    specialtyId: 2,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.7,
    reviews: 150,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Lê Thị B chuyên khoa Sản phụ khoa, với kinh nghiệm phong phú trong việc chăm sóc sức khỏe phụ nữ và thai kỳ.",
    education: [
      { degree: "Bác sĩ Sản phụ khoa", school: "Đại học Y Dược TP.HCM", year: 2007 },
      { degree: "Thạc sĩ Sản phụ khoa", school: "Đại học Y Dược TP.HCM", year: 2012 }
    ],
    technique: ["Khám thai", "Phẫu thuật sản khoa", "Điều trị rối loạn kinh nguyệt"],
    awards: [
      { title: "Giải thưởng Bác sĩ xuất sắc", year: 2016 },
      { title: "Giải thưởng Y đức", year: 2019 }
    ],
    analysis: [
      { title: "Nghiên cứu về chăm sóc thai kỳ", journal: "Tạp chí Sản phụ khoa", year: 2017 },
      { title: "Phân tích hiệu quả phương pháp sinh mổ", journal: "Tạp chí Phẫu thuật", year: 2020 }
    ],
    experience: [
      { position: "Bác sĩ Sản phụ khoa", hospital: "Bệnh viện Từ Dũ", period: "2007-2012" },
      { position: "Trưởng khoa Sản", hospital: "Bệnh viện Phụ sản TP.HCM", period: "2012-2019" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 4,
    slug: "le-thi-b-000004",
    name: "Lê Thị B",
    phone: "0902345678",
    email: "lethib@example.com",
    dob: "1985-07-20",
    gender: "female",
    hospitalId: 2,
    specialtyId: 2,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.7,
    reviews: 150,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Lê Thị B chuyên khoa Sản phụ khoa, với kinh nghiệm phong phú trong việc chăm sóc sức khỏe phụ nữ và thai kỳ.",
    education: [
      { degree: "Bác sĩ Sản phụ khoa", school: "Đại học Y Dược TP.HCM", year: 2007 },
      { degree: "Thạc sĩ Sản phụ khoa", school: "Đại học Y Dược TP.HCM", year: 2012 }
    ],
    technique: ["Khám thai", "Phẫu thuật sản khoa", "Điều trị rối loạn kinh nguyệt"],
    awards: [
      { title: "Giải thưởng Bác sĩ xuất sắc", year: 2016 },
      { title: "Giải thưởng Y đức", year: 2019 }
    ],
    analysis: [
      { title: "Nghiên cứu về chăm sóc thai kỳ", journal: "Tạp chí Sản phụ khoa", year: 2017 },
      { title: "Phân tích hiệu quả phương pháp sinh mổ", journal: "Tạp chí Phẫu thuật", year: 2020 }
    ],
    experience: [
      { position: "Bác sĩ Sản phụ khoa", hospital: "Bệnh viện Từ Dũ", period: "2007-2012" },
      { position: "Trưởng khoa Sản", hospital: "Bệnh viện Phụ sản TP.HCM", period: "2012-2019" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 5,
    slug: "ngo-van-e-000005",
    name: "Ngô Văn E",
    phone: "0912345678",
    email: "ngovane@example.com",
    dob: "1978-02-10",
    gender: "male",
    hospitalId: 5,
    specialtyId: 5,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.3,
    reviews: 95,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Ngô Văn E có nhiều năm kinh nghiệm trong chuyên ngành Tai Mũi Họng, điều trị các bệnh lý tai mũi họng và phẫu thuật nội soi.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Dược Huế", year: 2001 },
      { degree: "Chuyên khoa Tai Mũi Họng", school: "Đại học Y Dược Huế", year: 2006 }
    ],
    technique: ["Nội soi tai mũi họng", "Phẫu thuật cắt amidan", "Điều trị viêm xoang"],
    awards: [
      { title: "Bác sĩ xuất sắc khu vực miền Trung", year: 2014 }
    ],
    analysis: [
      { title: "Nghiên cứu điều trị viêm xoang mãn tính", journal: "Tạp chí Tai Mũi Họng", year: 2015 }
    ],
    experience: [
      { position: "Bác sĩ Tai Mũi Họng", hospital: "Bệnh viện Đa khoa Huế", period: "2001-2010" },
      { position: "Trưởng khoa Tai Mũi Họng", hospital: "Bệnh viện Trung ương Huế", period: "2010-2020" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 6,
    slug: "hoang-thi-f-000006",
    name: "Hoàng Thị F",
    phone: "0913456789",
    email: "hoangthif@example.com",
    dob: "1982-08-18",
    gender: "female",
    hospitalId: 6,
    specialtyId: 6,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.6,
    reviews: 110,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Chuyên gia thẩm mỹ, Bác sĩ Hoàng Thị F có kinh nghiệm sâu trong phẫu thuật thẩm mỹ và làm đẹp, được nhiều bệnh nhân tin tưởng.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2004 },
      { degree: "Chuyên khoa Phẫu thuật thẩm mỹ", school: "Đại học Y Hà Nội", year: 2010 }
    ],
    technique: ["Phẫu thuật thẩm mỹ khuôn mặt", "Nâng ngực", "Tái tạo mô mềm"],
    awards: [
      { title: "Giải thưởng Thẩm mỹ xuất sắc", year: 2017 }
    ],
    analysis: [
      { title: "Nghiên cứu về kỹ thuật nâng mũi mới", journal: "Tạp chí Thẩm mỹ", year: 2018 }
    ],
    experience: [
      { position: "Bác sĩ phẫu thuật thẩm mỹ", hospital: "Bệnh viện Thẩm mỹ Việt Mỹ", period: "2006-2015" },
      { position: "Giám đốc chuyên môn", hospital: "Bệnh viện Thẩm mỹ Kangnam", period: "2015-2023" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 7,
    slug: "pham-van-g-000007",
    name: "Phạm Văn G",
    phone: "0914567890",
    email: "phamvang@example.com",
    dob: "1975-12-05",
    gender: "male",
    hospitalId: 7,
    specialtyId: 7,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.4,
    reviews: 80,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Phạm Văn G chuyên khoa Tim mạch với hơn 20 năm kinh nghiệm trong điều trị và can thiệp tim mạch, được đánh giá cao trong cộng đồng y tế.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 1999 },
      { degree: "Chuyên khoa Tim mạch", school: "Đại học Y Hà Nội", year: 2005 }
    ],
    technique: ["Siêu âm tim", "Can thiệp tim mạch", "Điều trị suy tim"],
    awards: [
      { title: "Bác sĩ tim mạch xuất sắc", year: 2013 }
    ],
    analysis: [
      { title: "Nghiên cứu điều trị bệnh mạch vành", journal: "Tạp chí Tim mạch học", year: 2014 }
    ],
    experience: [
      { position: "Bác sĩ Tim mạch", hospital: "Bệnh viện Tim Hà Nội", period: "1999-2010" },
      { position: "Trưởng khoa Tim mạch", hospital: "Bệnh viện Tim Trung Ương", period: "2010-2023" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 8,
    slug: "le-thi-h-000008",
    name: "Lê Thị H",
    phone: "0915678901",
    email: "lethih@example.com",
    dob: "1988-03-22",
    gender: "female",
    hospitalId: 8,
    specialtyId: 8,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.9,
    reviews: 200,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Lê Thị H là chuyên gia về da liễu, nổi tiếng với các phương pháp điều trị hiệu quả cho các bệnh da liễu phức tạp.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Dược TP.HCM", year: 2010 },
      { degree: "Chuyên khoa Da liễu", school: "Đại học Y Dược TP.HCM", year: 2015 }
    ],
    technique: ["Điều trị mụn", "Điều trị vảy nến", "Laser thẩm mỹ da"],
    awards: [
      { title: "Bác sĩ da liễu xuất sắc", year: 2020 }
    ],
    analysis: [
      { title: "Nghiên cứu về điều trị mụn trứng cá", journal: "Tạp chí Da liễu", year: 2021 }
    ],
    experience: [
      { position: "Bác sĩ Da liễu", hospital: "Bệnh viện Da liễu TP.HCM", period: "2010-2018" },
      { position: "Trưởng khoa Da liễu", hospital: "Phòng khám Da liễu Quốc tế", period: "2018-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
    {
    id: 9,
    slug: "do-van-i-000009",
    name: "Đỗ Văn I",
    phone: "0916789012",
    email: "dovani@example.com",
    dob: "1979-04-14",
    gender: "male",
    hospitalId: 9,
    specialtyId: 9,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.2,
    reviews: 75,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Đỗ Văn I chuyên khoa Ngoại tổng quát, với kinh nghiệm nhiều năm trong phẫu thuật và chăm sóc bệnh nhân ngoại khoa.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Dược Hà Nội", year: 2002 },
      { degree: "Chuyên khoa Ngoại tổng quát", school: "Đại học Y Hà Nội", year: 2007 }
    ],
    technique: ["Phẫu thuật nội soi", "Phẫu thuật ổ bụng", "Điều trị vết thương phức tạp"],
    awards: [
      { title: "Bác sĩ Ngoại khoa xuất sắc", year: 2012 }
    ],
    analysis: [
      { title: "Nghiên cứu phẫu thuật nội soi ổ bụng", journal: "Tạp chí Ngoại khoa", year: 2013 }
    ],
    experience: [
      { position: "Bác sĩ Ngoại tổng quát", hospital: "Bệnh viện Quân y 103", period: "2002-2012" },
      { position: "Phó trưởng khoa Ngoại", hospital: "Bệnh viện Quân y 103", period: "2012-2023" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 10,
    slug: "vu-thi-j-000010",
    name: "Vũ Thị J",
    phone: "0917890123",
    email: "vuthij@example.com",
    dob: "1987-11-30",
    gender: "female",
    hospitalId: 10,
    specialtyId: 10,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.7,
    reviews: 140,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Vũ Thị J chuyên khoa Nội thần kinh, nổi tiếng với sự tận tâm và hiệu quả trong điều trị các bệnh lý thần kinh.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Dược TP.HCM", year: 2009 },
      { degree: "Chuyên khoa Nội thần kinh", school: "Đại học Y Dược TP.HCM", year: 2014 }
    ],
    technique: ["Điều trị đột quỵ", "Khám và điều trị Parkinson", "Điều trị các bệnh thần kinh trung ương"],
    awards: [
      { title: "Bác sĩ nội thần kinh xuất sắc", year: 2019 }
    ],
    analysis: [
      { title: "Nghiên cứu về điều trị đột quỵ", journal: "Tạp chí Thần kinh học", year: 2020 }
    ],
    experience: [
      { position: "Bác sĩ Nội thần kinh", hospital: "Bệnh viện Chợ Rẫy", period: "2009-2016" },
      { position: "Trưởng khoa Nội thần kinh", hospital: "Bệnh viện Chợ Rẫy", period: "2016-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 11,
    slug: "phan-van-k-000011",
    name: "Phan Văn K",
    phone: "0918901234",
    email: "phanvank@example.com",
    dob: "1983-06-12",
    gender: "male",
    hospitalId: 11,
    specialtyId: 11,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.5,
    reviews: 100,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Phan Văn K chuyên khoa Răng Hàm Mặt, với tay nghề cao trong các kỹ thuật chỉnh nha và phẫu thuật răng miệng.",
    education: [
      { degree: "Bác sĩ Răng Hàm Mặt", school: "Đại học Y Dược Huế", year: 2006 },
      { degree: "Thạc sĩ Chỉnh nha", school: "Đại học Y Dược Huế", year: 2011 }
    ],
    technique: ["Chỉnh nha", "Phẫu thuật răng miệng", "Cấy ghép Implant"],
    awards: [
      { title: "Bác sĩ Răng Hàm Mặt xuất sắc", year: 2017 }
    ],
    analysis: [
      { title: "Nghiên cứu về kỹ thuật cấy ghép Implant", journal: "Tạp chí Răng Hàm Mặt", year: 2018 }
    ],
    experience: [
      { position: "Bác sĩ Răng Hàm Mặt", hospital: "Bệnh viện Răng Hàm Mặt Trung ương", period: "2006-2014" },
      { position: "Trưởng khoa Răng Hàm Mặt", hospital: "Phòng khám Răng Hàm Mặt Quốc tế", period: "2014-2023" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 12,
    slug: "tran-thi-l-000012",
    name: "Trần Thị L",
    phone: "0919012345",
    email: "tranthil@example.com",
    dob: "1992-01-19",
    gender: "female",
    hospitalId: 12,
    specialtyId: 12,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.8,
    reviews: 190,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Trần Thị L chuyên khoa Mắt, có nhiều kinh nghiệm trong phẫu thuật và điều trị các bệnh lý mắt phổ biến.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Dược TP.HCM", year: 2014 },
      { degree: "Chuyên khoa Mắt", school: "Đại học Y Dược TP.HCM", year: 2018 }
    ],
    technique: ["Phẫu thuật cườm nước", "Khám và điều trị bệnh võng mạc", "Phẫu thuật LASIK"],
    awards: [
      { title: "Bác sĩ Mắt xuất sắc", year: 2021 }
    ],
    analysis: [
      { title: "Nghiên cứu về phẫu thuật LASIK", journal: "Tạp chí Mắt học", year: 2022 }
    ],
    experience: [
      { position: "Bác sĩ Mắt", hospital: "Bệnh viện Mắt Trung ương", period: "2014-2020" },
      { position: "Trưởng khoa Mắt", hospital: "Phòng khám Mắt Quốc tế", period: "2020-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },{
    id: 13,
    slug: "nguyen-van-m-000013",
    name: "Nguyễn Văn M",
    phone: "0910123456",
    email: "nguyenvanm@example.com",
    dob: "1977-07-23",
    gender: "male",
    hospitalId: 13,
    specialtyId: 13,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.1,
    reviews: 60,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Nguyễn Văn M có chuyên môn cao về chuyên khoa Nội tiết, điều trị các bệnh lý tuyến giáp và đái tháo đường.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2000 },
      { degree: "Chuyên khoa Nội tiết", school: "Đại học Y Hà Nội", year: 2005 }
    ],
    technique: ["Điều trị đái tháo đường", "Chăm sóc bệnh nhân tuyến giáp", "Theo dõi rối loạn nội tiết"],
    awards: [
      { title: "Bác sĩ Nội tiết xuất sắc", year: 2010 }
    ],
    analysis: [
      { title: "Nghiên cứu về bệnh đái tháo đường type 2", journal: "Tạp chí Nội tiết", year: 2011 }
    ],
    experience: [
      { position: "Bác sĩ Nội tiết", hospital: "Bệnh viện Nội tiết Trung ương", period: "2000-2010" },
      { position: "Trưởng khoa Nội tiết", hospital: "Bệnh viện Nội tiết Trung ương", period: "2010-2023" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 14,
    slug: "le-thi-n-000014",
    name: "Lê Thị N",
    phone: "0911234567",
    email: "lethin@example.com",
    dob: "1985-09-15",
    gender: "female",
    hospitalId: 14,
    specialtyId: 14,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.6,
    reviews: 120,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Lê Thị N chuyên ngành Phụ khoa, có nhiều kinh nghiệm trong khám chữa các bệnh phụ nữ và chăm sóc sức khỏe sinh sản.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Dược Huế", year: 2007 },
      { degree: "Chuyên khoa Phụ khoa", school: "Đại học Y Dược Huế", year: 2012 }
    ],
    technique: ["Khám và điều trị bệnh phụ khoa", "Siêu âm thai", "Tư vấn kế hoạch hóa gia đình"],
    awards: [
      { title: "Bác sĩ Phụ khoa xuất sắc", year: 2016 }
    ],
    analysis: [
      { title: "Nghiên cứu về điều trị u xơ tử cung", journal: "Tạp chí Phụ sản", year: 2017 }
    ],
    experience: [
      { position: "Bác sĩ Phụ khoa", hospital: "Bệnh viện Phụ sản Trung ương", period: "2007-2015" },
      { position: "Trưởng khoa Phụ sản", hospital: "Bệnh viện Phụ sản Trung ương", period: "2015-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 15,
    slug: "tran-van-o-000015",
    name: "Trần Văn O",
    phone: "0912345678",
    email: "tranvano@example.com",
    dob: "1976-05-03",
    gender: "male",
    hospitalId: 15,
    specialtyId: 15,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.0,
    reviews: 50,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Trần Văn O chuyên ngành Nhi khoa, chăm sóc sức khỏe cho trẻ em từ sơ sinh đến tuổi trưởng thành.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 1999 },
      { degree: "Chuyên khoa Nhi khoa", school: "Đại học Y Hà Nội", year: 2004 }
    ],
    technique: ["Khám và điều trị bệnh nhi", "Tiêm chủng", "Chăm sóc dinh dưỡng trẻ em"],
    awards: [
      { title: "Bác sĩ Nhi khoa xuất sắc", year: 2008 }
    ],
    analysis: [
      { title: "Nghiên cứu về phòng bệnh nhi khoa", journal: "Tạp chí Nhi khoa", year: 2009 }
    ],
    experience: [
      { position: "Bác sĩ Nhi khoa", hospital: "Bệnh viện Nhi Trung ương", period: "1999-2010" },
      { position: "Phó trưởng khoa Nhi", hospital: "Bệnh viện Nhi Trung ương", period: "2010-2023" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 16,
    slug: "pham-thi-p-000016",
    name: "Phạm Thị P",
    phone: "0913456789",
    email: "phamthip@example.com",
    dob: "1990-12-28",
    gender: "female",
    hospitalId: 16,
    specialtyId: 16,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.9,
    reviews: 210,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Phạm Thị P chuyên khoa Ung bướu, nổi bật với sự tận tâm và các phương pháp điều trị ung thư hiện đại.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Dược TP.HCM", year: 2013 },
      { degree: "Chuyên khoa Ung bướu", school: "Đại học Y Dược TP.HCM", year: 2018 }
    ],
    technique: ["Điều trị hóa chất", "Xạ trị", "Theo dõi và chăm sóc bệnh nhân ung thư"],
    awards: [
      { title: "Bác sĩ Ung bướu xuất sắc", year: 2022 }
    ],
    analysis: [
      { title: "Nghiên cứu về điều trị ung thư vú", journal: "Tạp chí Ung bướu", year: 2023 }
    ],
    experience: [
      { position: "Bác sĩ Ung bướu", hospital: "Bệnh viện Ung bướu TP.HCM", period: "2013-2020" },
      { position: "Trưởng khoa Ung bướu", hospital: "Bệnh viện Ung bướu TP.HCM", period: "2020-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
   {
    id: 17,
    slug: "hoang-van-q-000017",
    name: "Hoàng Văn Q",
    phone: "0914567890",
    email: "hoangvanq@example.com",
    dob: "1980-03-05",
    gender: "male",
    hospitalId: 17,
    specialtyId: 17,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.3,
    reviews: 85,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Hoàng Văn Q chuyên khoa Tai Mũi Họng với nhiều năm kinh nghiệm khám và điều trị các bệnh về tai mũi họng.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2004 },
      { degree: "Chuyên khoa Tai Mũi Họng", school: "Đại học Y Hà Nội", year: 2009 }
    ],
    technique: ["Nội soi tai mũi họng", "Phẫu thuật amidan", "Điều trị viêm xoang"],
    awards: [
      { title: "Bác sĩ Tai Mũi Họng xuất sắc", year: 2015 }
    ],
    analysis: [
      { title: "Nghiên cứu điều trị viêm xoang mãn tính", journal: "Tạp chí Tai Mũi Họng", year: 2016 }
    ],
    experience: [
      { position: "Bác sĩ Tai Mũi Họng", hospital: "Bệnh viện Tai Mũi Họng Trung ương", period: "2004-2014" },
      { position: "Trưởng khoa Tai Mũi Họng", hospital: "Bệnh viện Tai Mũi Họng Trung ương", period: "2014-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 18,
    slug: "nguyen-thi-r-000018",
    name: "Nguyễn Thị R",
    phone: "0915678901",
    email: "nguyenthir@example.com",
    dob: "1989-10-21",
    gender: "female",
    hospitalId: 18,
    specialtyId: 18,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.7,
    reviews: 130,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Nguyễn Thị R chuyên khoa Da Liễu, nổi bật trong việc điều trị các bệnh về da và tư vấn chăm sóc da hiệu quả.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Dược TP.HCM", year: 2010 },
      { degree: "Chuyên khoa Da Liễu", school: "Đại học Y Dược TP.HCM", year: 2015 }
    ],
    technique: ["Điều trị mụn trứng cá", "Chăm sóc da mẫn cảm", "Điều trị viêm da cơ địa"],
    awards: [
      { title: "Bác sĩ Da Liễu xuất sắc", year: 2019 }
    ],
    analysis: [
      { title: "Nghiên cứu về điều trị mụn trứng cá", journal: "Tạp chí Da Liễu", year: 2020 }
    ],
    experience: [
      { position: "Bác sĩ Da Liễu", hospital: "Bệnh viện Da Liễu TP.HCM", period: "2010-2018" },
      { position: "Phó trưởng khoa Da Liễu", hospital: "Bệnh viện Da Liễu TP.HCM", period: "2018-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 19,
    slug: "pham-van-s-000019",
    name: "Phạm Văn S",
    phone: "0916789012",
    email: "phamvans@example.com",
    dob: "1975-08-14",
    gender: "male",
    hospitalId: 19,
    specialtyId: 19,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.4,
    reviews: 95,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Phạm Văn S chuyên khoa Tim mạch, có nhiều năm kinh nghiệm trong điều trị các bệnh về tim mạch và huyết áp.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 1998 },
      { degree: "Chuyên khoa Tim mạch", school: "Đại học Y Hà Nội", year: 2003 }
    ],
    technique: ["Điều trị bệnh tim mạch", "Siêu âm tim", "Theo dõi huyết áp"],
    awards: [
      { title: "Bác sĩ Tim mạch xuất sắc", year: 2014 }
    ],
    analysis: [
      { title: "Nghiên cứu điều trị tăng huyết áp", journal: "Tạp chí Tim mạch", year: 2015 }
    ],
    experience: [
      { position: "Bác sĩ Tim mạch", hospital: "Bệnh viện Tim Hà Nội", period: "1998-2012" },
      { position: "Phó trưởng khoa Tim mạch", hospital: "Bệnh viện Tim Hà Nội", period: "2012-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 20,
    slug: "le-thi-t-000020",
    name: "Lê Thị T",
    phone: "0917890123",
    email: "lethit@example.com",
    dob: "1988-11-09",
    gender: "female",
    hospitalId: 20,
    specialtyId: 20,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.9,
    reviews: 200,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Lê Thị T chuyên khoa Tâm lý, hỗ trợ điều trị các vấn đề về sức khỏe tinh thần và rối loạn tâm thần.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Dược TP.HCM", year: 2011 },
      { degree: "Chuyên khoa Tâm lý", school: "Đại học Y Dược TP.HCM", year: 2016 }
    ],
    technique: ["Tư vấn tâm lý", "Điều trị rối loạn lo âu", "Điều trị trầm cảm"],
    awards: [
      { title: "Bác sĩ Tâm lý xuất sắc", year: 2021 }
    ],
    analysis: [
      { title: "Nghiên cứu về điều trị trầm cảm", journal: "Tạp chí Tâm lý học", year: 2022 }
    ],
    experience: [
      { position: "Bác sĩ Tâm lý", hospital: "Bệnh viện Tâm thần TP.HCM", period: "2011-2018" },
      { position: "Trưởng khoa Tâm lý", hospital: "Bệnh viện Tâm thần TP.HCM", period: "2018-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
   {
    id: 21,
    slug: "vu-van-u-000021",
    name: "Vũ Văn U",
    phone: "0918901234",
    email: "vuvanu@example.com",
    dob: "1983-02-11",
    gender: "male",
    hospitalId: 21,
    specialtyId: 21,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.5,
    reviews: 110,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Vũ Văn U chuyên khoa Nội thần kinh, điều trị các bệnh về thần kinh trung ương và ngoại biên.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2006 },
      { degree: "Chuyên khoa Nội thần kinh", school: "Đại học Y Hà Nội", year: 2011 }
    ],
    technique: ["Điều trị đau đầu migraine", "Chăm sóc bệnh nhân Parkinson", "Điều trị động kinh"],
    awards: [
      { title: "Bác sĩ Nội thần kinh xuất sắc", year: 2017 }
    ],
    analysis: [
      { title: "Nghiên cứu điều trị bệnh Parkinson", journal: "Tạp chí Thần kinh học", year: 2018 }
    ],
    experience: [
      { position: "Bác sĩ Nội thần kinh", hospital: "Bệnh viện Bạch Mai", period: "2006-2016" },
      { position: "Trưởng khoa Nội thần kinh", hospital: "Bệnh viện Bạch Mai", period: "2016-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 22,
    slug: "do-thi-v-000022",
    name: "Đỗ Thị V",
    phone: "0919012345",
    email: "dothiv@example.com",
    dob: "1987-06-19",
    gender: "female",
    hospitalId: 22,
    specialtyId: 22,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.8,
    reviews: 150,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Đỗ Thị V chuyên ngành Răng Hàm Mặt, chuyên sâu về chỉnh nha và phục hồi thẩm mỹ răng.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2010 },
      { degree: "Chuyên khoa Răng Hàm Mặt", school: "Đại học Y Hà Nội", year: 2015 }
    ],
    technique: ["Chỉnh nha niềng răng", "Phục hồi thẩm mỹ răng", "Điều trị sâu răng"],
    awards: [
      { title: "Bác sĩ Răng Hàm Mặt xuất sắc", year: 2020 }
    ],
    analysis: [
      { title: "Nghiên cứu về chỉnh nha không phẫu thuật", journal: "Tạp chí Răng Hàm Mặt", year: 2021 }
    ],
    experience: [
      { position: "Bác sĩ Răng Hàm Mặt", hospital: "Bệnh viện Răng Hàm Mặt Trung ương", period: "2010-2018" },
      { position: "Trưởng khoa Răng Hàm Mặt", hospital: "Bệnh viện Răng Hàm Mặt Trung ương", period: "2018-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 23,
    slug: "nguyen-van-w-000023",
    name: "Nguyễn Văn W",
    phone: "0919123456",
    email: "nguyenvanw@example.com",
    dob: "1979-11-25",
    gender: "male",
    hospitalId: 23,
    specialtyId: 23,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.2,
    reviews: 75,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Nguyễn Văn W chuyên ngành Chấn thương chỉnh hình, chữa trị các bệnh về xương khớp và phục hồi chức năng.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2002 },
      { degree: "Chuyên khoa Chấn thương chỉnh hình", school: "Đại học Y Hà Nội", year: 2007 }
    ],
    technique: ["Phẫu thuật thay khớp", "Điều trị chấn thương xương", "Phục hồi chức năng sau chấn thương"],
    awards: [
      { title: "Bác sĩ Chấn thương chỉnh hình xuất sắc", year: 2013 }
    ],
    analysis: [
      { title: "Nghiên cứu phẫu thuật thay khớp gối", journal: "Tạp chí Chấn thương", year: 2014 }
    ],
    experience: [
      { position: "Bác sĩ Chấn thương chỉnh hình", hospital: "Bệnh viện Việt Đức", period: "2002-2012" },
      { position: "Phó trưởng khoa Chấn thương", hospital: "Bệnh viện Việt Đức", period: "2012-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 24,
    slug: "tran-thi-x-000024",
    name: "Trần Thị X",
    phone: "0919234567",
    email: "tranthix@example.com",
    dob: "1991-04-10",
    gender: "female",
    hospitalId: 24,
    specialtyId: 24,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.7,
    reviews: 140,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Trần Thị X chuyên ngành Nội khoa, chăm sóc sức khỏe tổng quát và điều trị các bệnh nội khoa phổ biến.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Dược Huế", year: 2013 },
      { degree: "Chuyên khoa Nội khoa", school: "Đại học Y Dược Huế", year: 2018 }
    ],
    technique: ["Điều trị bệnh tim mạch", "Điều trị hô hấp", "Khám sức khỏe tổng quát"],
    awards: [
      { title: "Bác sĩ Nội khoa xuất sắc", year: 2022 }
    ],
    analysis: [
      { title: "Nghiên cứu điều trị hen suyễn", journal: "Tạp chí Nội khoa", year: 2023 }
    ],
    experience: [
      { position: "Bác sĩ Nội khoa", hospital: "Bệnh viện Trung ương Huế", period: "2013-2020" },
      { position: "Phó trưởng khoa Nội khoa", hospital: "Bệnh viện Trung ương Huế", period: "2020-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 25,
    slug: "pham-thi-y-000025",
    name: "Phạm Thị Y",
    phone: "0919345678",
    email: "phamthiy@example.com",
    dob: "1985-07-23",
    gender: "female",
    hospitalId: 25,
    specialtyId: 25,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.6,
    reviews: 125,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Phạm Thị Y chuyên khoa Nhi, chăm sóc và điều trị các bệnh lý cho trẻ em.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2008 },
      { degree: "Chuyên khoa Nhi", school: "Đại học Y Hà Nội", year: 2013 }
    ],
    technique: ["Khám và điều trị bệnh nhi", "Tiêm chủng", "Tư vấn dinh dưỡng trẻ em"],
    awards: [
      { title: "Bác sĩ Nhi xuất sắc", year: 2019 }
    ],
    analysis: [
      { title: "Nghiên cứu về bệnh nhiễm khuẩn ở trẻ em", journal: "Tạp chí Nhi khoa", year: 2020 }
    ],
    experience: [
      { position: "Bác sĩ Nhi", hospital: "Bệnh viện Nhi Trung ương", period: "2008-2016" },
      { position: "Phó trưởng khoa Nhi", hospital: "Bệnh viện Nhi Trung ương", period: "2016-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 26,
    slug: "le-van-z-000026",
    name: "Lê Văn Z",
    phone: "0919456789",
    email: "levanz@example.com",
    dob: "1978-12-02",
    gender: "male",
    hospitalId: 26,
    specialtyId: 26,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.1,
    reviews: 80,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Lê Văn Z chuyên khoa Ngoại tổng quát, thực hiện phẫu thuật và chăm sóc hậu phẫu.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2000 },
      { degree: "Chuyên khoa Ngoại tổng quát", school: "Đại học Y Hà Nội", year: 2005 }
    ],
    technique: ["Phẫu thuật nội soi", "Phẫu thuật khẩn cấp", "Chăm sóc sau phẫu thuật"],
    awards: [
      { title: "Bác sĩ Ngoại xuất sắc", year: 2012 }
    ],
    analysis: [
      { title: "Nghiên cứu về phẫu thuật nội soi", journal: "Tạp chí Ngoại khoa", year: 2013 }
    ],
    experience: [
      { position: "Bác sĩ Ngoại", hospital: "Bệnh viện Việt Đức", period: "2000-2010" },
      { position: "Trưởng khoa Ngoại", hospital: "Bệnh viện Việt Đức", period: "2010-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 27,
    slug: "tran-van-a-000027",
    name: "Trần Văn A",
    phone: "0919567890",
    email: "tranvana@example.com",
    dob: "1982-05-17",
    gender: "male",
    hospitalId: 27,
    specialtyId: 27,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.4,
    reviews: 90,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Trần Văn A chuyên khoa Nội tiết, điều trị các bệnh lý về nội tiết và chuyển hóa.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Dược TP.HCM", year: 2004 },
      { degree: "Chuyên khoa Nội tiết", school: "Đại học Y Dược TP.HCM", year: 2009 }
    ],
    technique: ["Điều trị tiểu đường", "Điều trị bệnh tuyến giáp", "Tư vấn dinh dưỡng"],
    awards: [
      { title: "Bác sĩ Nội tiết xuất sắc", year: 2016 }
    ],
    analysis: [
      { title: "Nghiên cứu về điều trị tiểu đường type 2", journal: "Tạp chí Nội tiết", year: 2017 }
    ],
    experience: [
      { position: "Bác sĩ Nội tiết", hospital: "Bệnh viện Đại học Y Dược TP.HCM", period: "2004-2014" },
      { position: "Phó trưởng khoa Nội tiết", hospital: "Bệnh viện Đại học Y Dược TP.HCM", period: "2014-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 28,
    slug: "ngo-thi-b-000028",
    name: "Ngô Thị B",
    phone: "0919678901",
    email: "ngothib@example.com",
    dob: "1990-09-29",
    gender: "female",
    hospitalId: 28,
    specialtyId: 28,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.9,
    reviews: 175,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Ngô Thị B chuyên khoa Sản phụ khoa, chăm sóc sức khỏe sinh sản và điều trị các bệnh sản phụ khoa.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2012 },
      { degree: "Chuyên khoa Sản phụ khoa", school: "Đại học Y Hà Nội", year: 2017 }
    ],
    technique: ["Khám thai định kỳ", "Điều trị các bệnh sản phụ khoa", "Tư vấn sức khỏe sinh sản"],
    awards: [
      { title: "Bác sĩ Sản phụ khoa xuất sắc", year: 2021 }
    ],
    analysis: [
      { title: "Nghiên cứu về chăm sóc thai kỳ", journal: "Tạp chí Sản phụ khoa", year: 2022 }
    ],
    experience: [
      { position: "Bác sĩ Sản phụ khoa", hospital: "Bệnh viện Phụ sản Trung ương", period: "2012-2019" },
      { position: "Trưởng khoa Sản phụ khoa", hospital: "Bệnh viện Phụ sản Trung ương", period: "2019-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
   {
    id: 29,
    slug: "hoang-van-c-000029",
    name: "Hoàng Văn C",
    phone: "0919789012",
    email: "hoangvanc@example.com",
    dob: "1980-03-15",
    gender: "male",
    hospitalId: 29,
    specialtyId: 29,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.3,
    reviews: 95,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Hoàng Văn C chuyên khoa Tai Mũi Họng, điều trị các bệnh lý về tai, mũi và họng.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2003 },
      { degree: "Chuyên khoa Tai Mũi Họng", school: "Đại học Y Hà Nội", year: 2008 }
    ],
    technique: ["Phẫu thuật nội soi tai mũi họng", "Điều trị viêm mũi dị ứng", "Điều trị viêm tai giữa"],
    awards: [
      { title: "Bác sĩ Tai Mũi Họng xuất sắc", year: 2015 }
    ],
    analysis: [
      { title: "Nghiên cứu phẫu thuật nội soi tai mũi họng", journal: "Tạp chí Tai Mũi Họng", year: 2016 }
    ],
    experience: [
      { position: "Bác sĩ Tai Mũi Họng", hospital: "Bệnh viện Tai Mũi Họng Trung ương", period: "2003-2013" },
      { position: "Phó trưởng khoa Tai Mũi Họng", hospital: "Bệnh viện Tai Mũi Họng Trung ương", period: "2013-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 30,
    slug: "nguyen-thi-d-000030",
    name: "Nguyễn Thị D",
    phone: "0919890123",
    email: "nguyenthid@example.com",
    dob: "1988-10-22",
    gender: "female",
    hospitalId: 30,
    specialtyId: 30,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.7,
    reviews: 135,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Nguyễn Thị D chuyên khoa Da liễu, điều trị các bệnh về da và tư vấn chăm sóc da.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 2011 },
      { degree: "Chuyên khoa Da liễu", school: "Đại học Y Hà Nội", year: 2016 }
    ],
    technique: ["Điều trị mụn trứng cá", "Điều trị bệnh vẩy nến", "Tư vấn chăm sóc da"],
    awards: [
      { title: "Bác sĩ Da liễu xuất sắc", year: 2019 }
    ],
    analysis: [
      { title: "Nghiên cứu điều trị bệnh vẩy nến", journal: "Tạp chí Da liễu", year: 2020 }
    ],
    experience: [
      { position: "Bác sĩ Da liễu", hospital: "Bệnh viện Da liễu Trung ương", period: "2011-2018" },
      { position: "Trưởng khoa Da liễu", hospital: "Bệnh viện Da liễu Trung ương", period: "2018-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 31,
    slug: "le-thi-e-000031",
    name: "Lê Thị E",
    phone: "0919901234",
    email: "lethie@example.com",
    dob: "1992-08-05",
    gender: "female",
    hospitalId: 31,
    specialtyId: 31,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.8,
    reviews: 160,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Lê Thị E chuyên ngành Mắt, khám và điều trị các bệnh lý về mắt, phẫu thuật mắt.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Dược TP.HCM", year: 2014 },
      { degree: "Chuyên khoa Mắt", school: "Đại học Y Dược TP.HCM", year: 2019 }
    ],
    technique: ["Phẫu thuật tật khúc xạ", "Điều trị đục thủy tinh thể", "Khám mắt định kỳ"],
    awards: [
      { title: "Bác sĩ Mắt xuất sắc", year: 2022 }
    ],
    analysis: [
      { title: "Nghiên cứu phẫu thuật tật khúc xạ", journal: "Tạp chí Mắt", year: 2023 }
    ],
    experience: [
      { position: "Bác sĩ Mắt", hospital: "Bệnh viện Mắt TP.HCM", period: "2014-2021" },
      { position: "Trưởng khoa Mắt", hospital: "Bệnh viện Mắt TP.HCM", period: "2021-2025" }
    ],
    language: ["Tiếng Việt", "Tiếng Anh"]
  },
  {
    id: 32,
    slug: "pham-van-f-000032",
    name: "Phạm Văn F",
    phone: "0919012345",
    email: "phamvanf@example.com",
    dob: "1976-01-30",
    gender: "male",
    hospitalId: 32,
    specialtyId: 32,
    createdAt: new Date(),
    verified: new Date(),
    rating: 4.0,
    reviews: 60,
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    about: "Bác sĩ Phạm Văn F chuyên ngành Y học cổ truyền, khám chữa bệnh bằng phương pháp y học cổ truyền Việt Nam.",
    education: [
      { degree: "Bác sĩ Đa khoa", school: "Đại học Y Hà Nội", year: 1999 },
      { degree: "Chuyên khoa Y học cổ truyền", school: "Đại học Y Hà Nội", year: 2004 }
    ],
    technique: ["Châm cứu", "Bấm huyệt", "Điều trị bằng thuốc đông y"],
    awards: [
      { title: "Bác sĩ Y học cổ truyền xuất sắc", year: 2010 }
    ],
    analysis: [
      { title: "Nghiên cứu về châm cứu trong điều trị đau lưng", journal: "Tạp chí Y học cổ truyền", year: 2011 }
    ],
    experience: [
      { position: "Bác sĩ Y học cổ truyền", hospital: "Bệnh viện Y học cổ truyền Trung ương", period: "1999-2009" },
      { position: "Trưởng khoa Y học cổ truyền", hospital: "Bệnh viện Y học cổ truyền Trung ương", period: "2009-2025" }
    ],
    language: ["Tiếng Việt"]
  }
];

module.exports = fakeDoctor;
