const fakeHospitals = [
  {
    id: 1,
    slug: "benh-vien-108-000001",
    name: "Bệnh viện Trung ương Quân đội 108",
    title: "Bệnh viện đa khoa tuyến cuối của quân đội",
    about: "Bệnh viện Trung ương Quân đội 108 là bệnh viện đa khoa, chuyên sâu hàng đầu của quân đội và nhà nước, với đội ngũ bác sĩ giỏi và trang thiết bị hiện đại.",
    address: "Số 1 Trần Hưng Đạo, Hai Bà Trưng, Hà Nội",
    phone: "02462784126",
    license: "QD-108-BYT",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám chữa bệnh nội trú và ngoại trú",
      "Phẫu thuật chuyên sâu",
      "Khám sức khỏe định kỳ",
      "Chẩn đoán hình ảnh, X-quang, MRI"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 1020 },
      { weekend: 6, timeStart: 480, timeEnd: 960 } // Thứ Bảy
    ]
  },
  {
    id: 2,
    slug: "benh-vien-nhi-dong-1-000002",
    name: "Bệnh viện Nhi Đồng 1",
    title: "Chuyên khám và điều trị cho trẻ em",
    about: "Bệnh viện Nhi Đồng 1 là cơ sở y tế đầu ngành trong lĩnh vực nhi khoa khu vực phía Nam, với hơn 60 năm kinh nghiệm chăm sóc trẻ em.",
    address: "341 Sư Vạn Hạnh, Quận 10, TP. Hồ Chí Minh",
    phone: "02839271119",
    license: "ND1-TPHCM",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám bệnh trẻ em",
      "Tiêm chủng mở rộng",
      "Tư vấn dinh dưỡng",
      "Phẫu thuật nhi"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 960 },
      { weekend: 2, timeStart: 480, timeEnd: 960 },
      { weekend: 3, timeStart: 480, timeEnd: 960 },
      { weekend: 4, timeStart: 480, timeEnd: 960 },
      { weekend: 5, timeStart: 480, timeEnd: 960 },
      { weekend: 6, timeStart: 480, timeEnd: 900 }
    ]
  },
  {
    id: 3,
    slug: "benh-vien-bach-mai-000003",
    name: "Bệnh viện Bạch Mai",
    title: "Bệnh viện đa khoa lớn nhất miền Bắc",
    about: "Bệnh viện Bạch Mai là một trong những bệnh viện tuyến trung ương lớn nhất cả nước, có vai trò quan trọng trong việc đào tạo và nghiên cứu y học.",
    address: "78 Giải Phóng, Đống Đa, Hà Nội",
    phone: "02438693731",
    license: "BM-HN-03",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám nội tổng quát",
      "Chăm sóc đặc biệt ICU",
      "Chẩn đoán ung thư",
      "Thận nhân tạo"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 1020 }
    ]
  },
  {
    id: 4,
    slug: "benh-vien-da-khoa-da-nang-000004",
    name: "Bệnh viện Đa khoa Đà Nẵng",
    title: "Trung tâm y tế hàng đầu miền Trung",
    about: "Bệnh viện Đa khoa Đà Nẵng là bệnh viện tuyến cuối tại khu vực miền Trung, cung cấp dịch vụ y tế chất lượng cao cho người dân địa phương và khách du lịch.",
    address: "124 Hải Phòng, Quận Hải Châu, Đà Nẵng",
    phone: "02363821632",
    license: "DKDN-04",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám chuyên khoa",
      "Cấp cứu 24/7",
      "Xét nghiệm tổng quát",
      "Tư vấn sức khỏe"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 960 },
      { weekend: 6, timeStart: 480, timeEnd: 900 }
    ]
  },
  {
    id: 5,
    slug: "benh-vien-cho-ray-000005",
    name: "Bệnh viện Chợ Rẫy",
    title: "Bệnh viện tuyến cuối phía Nam",
    about: "Chợ Rẫy là bệnh viện đa khoa trung ương tại TP. HCM, tiếp nhận điều trị nhiều ca bệnh phức tạp và đóng vai trò là trung tâm nghiên cứu y học.",
    address: "201B Nguyễn Chí Thanh, Quận 5, TP. HCM",
    phone: "02838554137",
    license: "CR-HCM-05",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Điều trị chuyên sâu",
      "Ngoại khoa tổng hợp",
      "Hồi sức cấp cứu",
      "Phẫu thuật ghép tạng"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1080 },
      { weekend: 2, timeStart: 480, timeEnd: 1080 },
      { weekend: 3, timeStart: 480, timeEnd: 1080 },
      { weekend: 4, timeStart: 480, timeEnd: 1080 },
      { weekend: 5, timeStart: 480, timeEnd: 1080 }
    ]
  },
  {
    id: 6,
    slug: "benh-vien-hoan-my-da-nang-000006",
    name: "Bệnh viện Hoàn Mỹ Đà Nẵng",
    title: "Bệnh viện tư nhân chất lượng cao",
    about: "Hoàn Mỹ Đà Nẵng là bệnh viện tư nhân với đội ngũ y bác sĩ giàu kinh nghiệm, cung cấp dịch vụ y tế thân thiện, chuyên nghiệp và hiện đại.",
    address: "291 Nguyễn Văn Linh, Thanh Khê, Đà Nẵng",
    phone: "02363650508",
    license: "HM-DN-06",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám chuyên khoa",
      "Tư vấn sức khỏe trực tuyến",
      "Xét nghiệm tổng quát",
      "Dịch vụ VIP"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 960 }
    ]
  },
  {
    id: 7,
    slug: "benh-vien-nhi-trung-uong-000007",
    name: "Bệnh viện Nhi Trung Ương",
    title: "Chuyên khoa đầu ngành về Nhi",
    about: "Bệnh viện Nhi Trung Ương là cơ sở y tế tuyến cuối về nhi khoa tại Việt Nam, chuyên điều trị các bệnh lý phức tạp ở trẻ em với hệ thống thiết bị hiện đại.",
    address: "18/879 La Thành, Đống Đa, Hà Nội",
    phone: "02462738532",
    license: "NTU-HN-07",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám và điều trị bệnh trẻ em",
      "Phẫu thuật nhi",
      "Hồi sức sơ sinh",
      "Tư vấn dinh dưỡng nhi"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 960 },
      { weekend: 2, timeStart: 480, timeEnd: 960 },
      { weekend: 3, timeStart: 480, timeEnd: 960 },
      { weekend: 4, timeStart: 480, timeEnd: 960 },
      { weekend: 5, timeStart: 480, timeEnd: 960 }
    ]
  },
  {
    id: 8,
    slug: "benh-vien-rang-ham-mat-trung-uong-000008",
    name: "Bệnh viện Răng Hàm Mặt Trung Ương",
    title: "Chuyên sâu Răng Hàm Mặt",
    about: "Bệnh viện chuyên khoa đầu ngành trong lĩnh vực răng hàm mặt, cung cấp dịch vụ khám chữa bệnh và thẩm mỹ nha khoa chất lượng cao.",
    address: "40 Tràng Thi, Hoàn Kiếm, Hà Nội",
    phone: "02438269722",
    license: "RHM-HN-08",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám răng",
      "Niềng răng",
      "Phẫu thuật chỉnh hàm",
      "Cấy ghép Implant"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 960 },
      { weekend: 2, timeStart: 480, timeEnd: 960 },
      { weekend: 3, timeStart: 480, timeEnd: 960 },
      { weekend: 4, timeStart: 480, timeEnd: 960 },
      { weekend: 5, timeStart: 480, timeEnd: 900 }
    ]
  },
  {
    id: 9,
    slug: "benh-vien-mat-trung-uong-000009",
    name: "Bệnh viện Mắt Trung Ương",
    title: "Hàng đầu về nhãn khoa",
    about: "Bệnh viện Mắt Trung Ương là bệnh viện chuyên khoa hàng đầu về điều trị các bệnh lý mắt, với đội ngũ bác sĩ nhãn khoa dày dặn kinh nghiệm.",
    address: "85 Bà Triệu, Hai Bà Trưng, Hà Nội",
    phone: "02438263928",
    license: "MTU-HN-09",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám mắt",
      "Phẫu thuật mắt",
      "Laser điều trị võng mạc",
      "Khám thị lực & cắt kính"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 960 },
      { weekend: 2, timeStart: 480, timeEnd: 960 },
      { weekend: 3, timeStart: 480, timeEnd: 960 },
      { weekend: 4, timeStart: 480, timeEnd: 960 },
      { weekend: 5, timeStart: 480, timeEnd: 900 }
    ]
  },
  {
    id: 10,
    slug: "benh-vien-da-khoa-quoc-te-vinmec-000010",
    name: "Bệnh viện Đa khoa Quốc tế Vinmec",
    title: "Dịch vụ y tế cao cấp chuẩn quốc tế",
    about: "Vinmec là hệ thống bệnh viện tư nhân cao cấp với tiêu chuẩn quốc tế, nổi bật về cơ sở vật chất hiện đại, dịch vụ chăm sóc toàn diện và cá nhân hóa.",
    address: "458 Minh Khai, Hai Bà Trưng, Hà Nội",
    phone: "02439743556",
    license: "VM-HN-10",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám chuyên khoa",
      "Điều trị nội trú cao cấp",
      "Khám sức khỏe tổng quát",
      "Hỗ trợ sinh sản IVF"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 960 },
      { weekend: 6, timeStart: 480, timeEnd: 900 }
    ]
  },
  {
    id: 11,
    slug: "benh-vien-huu-nghi-000011",
    name: "Bệnh viện Hữu Nghị",
    title: "Bệnh viện chăm sóc cán bộ cấp cao",
    about: "Bệnh viện Hữu Nghị là bệnh viện chuyên phục vụ cán bộ trung, cao cấp và nhân dân, nổi bật với dịch vụ y tế chất lượng và truyền thống lâu đời.",
    address: "Số 1 Trần Khánh Dư, Hai Bà Trưng, Hà Nội",
    phone: "02439762648",
    license: "HN-HN-11",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám sức khỏe định kỳ",
      "Điều trị nội trú",
      "Khám chuyên khoa",
      "Vật lý trị liệu"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 960 },
      { weekend: 2, timeStart: 480, timeEnd: 960 },
      { weekend: 3, timeStart: 480, timeEnd: 960 },
      { weekend: 4, timeStart: 480, timeEnd: 960 },
      { weekend: 5, timeStart: 480, timeEnd: 960 }
    ]
  },
  {
    id: 12,
    slug: "benh-vien-phap-viet-000012",
    name: "Bệnh viện Pháp Việt",
    title: "Bệnh viện tư nhân quốc tế tại TP.HCM",
    about: "Bệnh viện Pháp Việt (FV) là bệnh viện tư nhân theo tiêu chuẩn Pháp, cung cấp dịch vụ khám chữa bệnh quốc tế cho người Việt và người nước ngoài.",
    address: "6 Nguyễn Lương Bằng, Phú Mỹ Hưng, Quận 7, TP. HCM",
    phone: "02854113333",
    license: "FV-HCM-12",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám đa khoa và chuyên khoa",
      "Nội trú cao cấp",
      "Xét nghiệm & chẩn đoán hình ảnh",
      "Dịch vụ khám theo yêu cầu"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1080 },
      { weekend: 2, timeStart: 480, timeEnd: 1080 },
      { weekend: 3, timeStart: 480, timeEnd: 1080 },
      { weekend: 4, timeStart: 480, timeEnd: 1080 },
      { weekend: 5, timeStart: 480, timeEnd: 960 },
      { weekend: 6, timeStart: 540, timeEnd: 900 }
    ]
  },
  {
    id: 13,
    slug: "benh-vien-da-khoa-quoc-te-thu-cuc-000013",
    name: "Bệnh viện Đa khoa Quốc tế Thu Cúc",
    title: "Khám chữa bệnh tiêu chuẩn khách sạn",
    about: "Thu Cúc là bệnh viện đa khoa tư nhân nổi bật với chất lượng dịch vụ cao, môi trường sạch sẽ, thân thiện, và đội ngũ bác sĩ giàu kinh nghiệm.",
    address: "286 Thụy Khuê, Tây Hồ, Hà Nội",
    phone: "1900558892",
    license: "TC-HN-13",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám sức khỏe tổng quát",
      "Tầm soát ung thư",
      "Khám theo yêu cầu",
      "Phẫu thuật nội soi"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 960 },
      { weekend: 6, timeStart: 480, timeEnd: 900 }
    ]
  },
  {
    id: 14,
    slug: "benh-vien-da-khoa-an-viet-000014",
    name: "Bệnh viện Đa khoa An Việt",
    title: "Dịch vụ y tế chất lượng cao tại Hà Nội",
    about: "An Việt là bệnh viện tư nhân chuyên cung cấp dịch vụ y tế chất lượng với mô hình 'bệnh viện – khách sạn', cam kết chăm sóc tận tâm.",
    address: "1E Trường Chinh, Thanh Xuân, Hà Nội",
    phone: "02462628888",
    license: "AV-HN-14",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám chuyên khoa",
      "Dịch vụ xét nghiệm",
      "Nội soi tiêu hóa",
      "Phẫu thuật nội soi"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 960 }
    ]
  },
    {
    id: 15,
    slug: "benh-vien-da-khoa-quoc-te-vimec-ha-long-000015",
    name: "Bệnh viện Quốc tế Vinmec Hạ Long",
    title: "Bệnh viện tư nhân chuẩn quốc tế tại Quảng Ninh",
    about: "Vinmec Hạ Long cung cấp dịch vụ y tế chất lượng cao, phục vụ người dân địa phương và khách du lịch tại Hạ Long, với cơ sở vật chất hiện đại.",
    address: "10A Lê Thánh Tông, TP. Hạ Long, Quảng Ninh",
    phone: "02033566666",
    license: "VM-HL-15",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám nội tổng quát",
      "Xét nghiệm và chẩn đoán hình ảnh",
      "Khám chuyên khoa",
      "Dịch vụ cấp cứu 24/7"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1080 },
      { weekend: 2, timeStart: 480, timeEnd: 1080 },
      { weekend: 3, timeStart: 480, timeEnd: 1080 },
      { weekend: 4, timeStart: 480, timeEnd: 1080 },
      { weekend: 5, timeStart: 480, timeEnd: 1020 }
    ]
  },
  {
    id: 16,
    slug: "benh-vien-thanh-mau-000016",
    name: "Bệnh viện Thánh Mẫu",
    title: "Bệnh viện dân lập lâu đời tại TP.HCM",
    about: "Thánh Mẫu là bệnh viện tư nhân đa khoa uy tín tại TP.HCM, nổi tiếng với dịch vụ sản khoa và nội tổng quát, đội ngũ bác sĩ giàu kinh nghiệm.",
    address: "118 Bành Văn Trân, Phú Nhuận, TP. HCM",
    phone: "02838448282",
    license: "TM-HCM-16",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Sản phụ khoa",
      "Khám nội tổng quát",
      "Siêu âm, X-quang",
      "Dịch vụ cấp cứu"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 960 },
      { weekend: 6, timeStart: 480, timeEnd: 900 }
    ]
  },
  {
    id: 17,
    slug: "benh-vien-nhi-thanh-hoa-000017",
    name: "Bệnh viện Nhi Thanh Hóa",
    title: "Chuyên điều trị bệnh nhi khu vực Bắc Trung Bộ",
    about: "Bệnh viện Nhi Thanh Hóa cung cấp các dịch vụ khám, điều trị và chăm sóc trẻ em toàn diện, với đội ngũ bác sĩ chuyên khoa và cơ sở hiện đại.",
    address: "Số 10 Lê Lai, TP. Thanh Hóa, Thanh Hóa",
    phone: "02373852828",
    license: "NTH-TH-17",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám bệnh nhi",
      "Điều trị bệnh truyền nhiễm",
      "Tư vấn dinh dưỡng",
      "Hồi sức nhi"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 960 },
      { weekend: 2, timeStart: 480, timeEnd: 960 },
      { weekend: 3, timeStart: 480, timeEnd: 960 },
      { weekend: 4, timeStart: 480, timeEnd: 960 },
      { weekend: 5, timeStart: 480, timeEnd: 900 }
    ]
  },
  {
    id: 18,
    slug: "benh-vien-ung-buou-da-nang-000018",
    name: "Bệnh viện Ung Bướu Đà Nẵng",
    title: "Chuyên điều trị ung thư miền Trung",
    about: "Bệnh viện Ung Bướu Đà Nẵng là cơ sở đầu ngành về điều trị ung thư tại miền Trung, với trang thiết bị hiện đại và đội ngũ bác sĩ chuyên môn cao.",
    address: "Số 120 Hải Phòng, Thanh Khê, Đà Nẵng",
    phone: "02363822144",
    license: "UBDN-DN-18",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Xạ trị - hóa trị",
      "Tầm soát ung thư",
      "Phẫu thuật ung thư",
      "Chăm sóc giảm nhẹ"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 960 }
    ]
  },
    {
    id: 19,
    slug: "benh-vien-nhi-dong-1-000019",
    name: "Bệnh viện Nhi Đồng 1",
    title: "Trung tâm y tế nhi khoa hàng đầu TP.HCM",
    about: "Bệnh viện Nhi Đồng 1 là một trong những cơ sở điều trị nhi khoa lớn nhất miền Nam, chuyên sâu về điều trị các bệnh lý ở trẻ em.",
    address: "341 Sư Vạn Hạnh, Quận 10, TP. HCM",
    phone: "02839271119",
    license: "ND1-HCM-19",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám bệnh nhi",
      "Hồi sức cấp cứu nhi",
      "Phẫu thuật nhi khoa",
      "Tư vấn tâm lý trẻ em"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 960 },
      { weekend: 2, timeStart: 480, timeEnd: 960 },
      { weekend: 3, timeStart: 480, timeEnd: 960 },
      { weekend: 4, timeStart: 480, timeEnd: 960 },
      { weekend: 5, timeStart: 480, timeEnd: 960 }
    ]
  },
  {
    id: 20,
    slug: "benh-vien-da-khoa-tinh-bac-ninh-000020",
    name: "Bệnh viện Đa khoa tỉnh Bắc Ninh",
    title: "Bệnh viện tuyến tỉnh Bắc Ninh",
    about: "Bệnh viện Đa khoa tỉnh Bắc Ninh là đơn vị y tế công lập với đa dạng chuyên khoa, phục vụ người dân địa phương và các vùng lân cận.",
    address: "Đường Nguyễn Quyền, TP. Bắc Ninh",
    phone: "02223827979",
    license: "BN-BN-20",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám tổng quát",
      "Cấp cứu 24/24",
      "Khám chuyên khoa",
      "Siêu âm & Xét nghiệm"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 960 }
    ]
  },
  {
    id: 21,
    slug: "benh-vien-san-nhi-quang-ngai-000021",
    name: "Bệnh viện Sản Nhi Quảng Ngãi",
    title: "Chuyên sâu về phụ sản và nhi khoa tại Quảng Ngãi",
    about: "Bệnh viện Sản Nhi Quảng Ngãi cung cấp dịch vụ chăm sóc y tế cho phụ nữ và trẻ em, với đội ngũ bác sĩ tận tâm và trang thiết bị hiện đại.",
    address: "1A Phạm Văn Đồng, TP. Quảng Ngãi",
    phone: "02553823030",
    license: "SNQN-QN-21",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám sản phụ khoa",
      "Đỡ sinh - mổ đẻ",
      "Chăm sóc trẻ sơ sinh",
      "Khám nhi"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 960 },
      { weekend: 2, timeStart: 480, timeEnd: 960 },
      { weekend: 3, timeStart: 480, timeEnd: 960 },
      { weekend: 4, timeStart: 480, timeEnd: 960 },
      { weekend: 5, timeStart: 480, timeEnd: 960 }
    ]
  },
  {
    id: 22,
    slug: "benh-vien-tham-my-kangnam-000022",
    name: "Bệnh viện Thẩm mỹ Kangnam",
    title: "Thẩm mỹ chuẩn Hàn tại Việt Nam",
    about: "Bệnh viện Thẩm mỹ Kangnam là đơn vị chuyên sâu trong lĩnh vực phẫu thuật thẩm mỹ và chăm sóc sắc đẹp theo tiêu chuẩn Hàn Quốc.",
    address: "190 Trường Chinh, Đống Đa, Hà Nội",
    phone: "02473000666",
    license: "KN-HN-22",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Nâng mũi",
      "Cắt mí",
      "Gọt hàm - độn cằm",
      "Giảm béo công nghệ cao"
    ],
    time: [
      { weekend: 1, timeStart: 540, timeEnd: 1020 },
      { weekend: 2, timeStart: 540, timeEnd: 1020 },
      { weekend: 3, timeStart: 540, timeEnd: 1020 },
      { weekend: 4, timeStart: 540, timeEnd: 1020 },
      { weekend: 5, timeStart: 540, timeEnd: 960 },
      { weekend: 6, timeStart: 600, timeEnd: 900 }
    ]
  },
   {
    id: 23,
    slug: "benh-vien-hong-ngoc-000023",
    name: "Bệnh viện Hồng Ngọc",
    title: "Dịch vụ y tế chất lượng cao tại Hà Nội",
    about: "Bệnh viện Hồng Ngọc là hệ thống y tế tư nhân cao cấp, kết hợp giữa điều trị hiện đại và chăm sóc như khách sạn, phục vụ cả trong và ngoài nước.",
    address: "55 Yên Ninh, Ba Đình, Hà Nội",
    phone: "02439275568",
    license: "HN-HN-23",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám nội tổng quát",
      "Sản phụ khoa",
      "Tầm soát ung thư",
      "Khám theo yêu cầu"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1080 },
      { weekend: 2, timeStart: 480, timeEnd: 1080 },
      { weekend: 3, timeStart: 480, timeEnd: 1080 },
      { weekend: 4, timeStart: 480, timeEnd: 1080 },
      { weekend: 5, timeStart: 480, timeEnd: 1020 }
    ]
  },
  {
    id: 24,
    slug: "benh-vien-tai-mui-hong-trung-uong-000024",
    name: "Bệnh viện Tai Mũi Họng Trung Ương",
    title: "Chuyên sâu về tai, mũi, họng",
    about: "Bệnh viện Tai Mũi Họng TW là cơ sở y tế đầu ngành tại Việt Nam trong lĩnh vực điều trị và phẫu thuật tai mũi họng, giọng nói và thính học.",
    address: "78 Giải Phóng, Đống Đa, Hà Nội",
    phone: "02438686116",
    license: "TMHTW-HN-24",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám tai mũi họng",
      "Phẫu thuật tai",
      "Khám thính lực",
      "Điều trị viêm xoang"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 960 },
      { weekend: 2, timeStart: 480, timeEnd: 960 },
      { weekend: 3, timeStart: 480, timeEnd: 960 },
      { weekend: 4, timeStart: 480, timeEnd: 960 },
      { weekend: 5, timeStart: 480, timeEnd: 900 }
    ]
  },
  {
    id: 25,
    slug: "benh-vien-y-hoc-co-truyen-tphcm-000025",
    name: "Bệnh viện Y học Cổ truyền TP.HCM",
    title: "Chăm sóc sức khỏe bằng phương pháp Đông y",
    about: "Bệnh viện chuyên điều trị bằng y học cổ truyền kết hợp y học hiện đại, điều trị các bệnh mãn tính, phục hồi chức năng và chăm sóc sức khỏe toàn diện.",
    address: "179 Nam Kỳ Khởi Nghĩa, Quận 3, TP. HCM",
    phone: "02839326579",
    license: "YHCT-HCM-25",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Châm cứu",
      "Xoa bóp - bấm huyệt",
      "Kê đơn thuốc nam",
      "Phục hồi chức năng"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 960 },
      { weekend: 2, timeStart: 480, timeEnd: 960 },
      { weekend: 3, timeStart: 480, timeEnd: 960 },
      { weekend: 4, timeStart: 480, timeEnd: 960 },
      { weekend: 5, timeStart: 480, timeEnd: 900 }
    ]
  },
  {
    id: 26,
    slug: "benh-vien-dai-hoc-y-hai-phong-000026",
    name: "Bệnh viện Đại học Y Hải Phòng",
    title: "Khám và điều trị bởi giảng viên – bác sĩ chuyên khoa",
    about: "Bệnh viện ĐH Y Hải Phòng là bệnh viện giảng dạy – thực hành, cung cấp dịch vụ khám chữa bệnh bởi các giáo sư, tiến sĩ đầu ngành tại Hải Phòng.",
    address: "Số 72A Nguyễn Bỉnh Khiêm, Hải Phòng",
    phone: "02253846032",
    license: "DHY-HP-26",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám nội tổng quát",
      "Khám theo yêu cầu",
      "Siêu âm & xét nghiệm",
      "Phẫu thuật chuyên khoa"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 960 }
    ]
  },
    {
    id: 27,
    slug: "benh-vien-mat-trung-uong-000027",
    name: "Bệnh viện Mắt Trung Ương",
    title: "Cơ sở nhãn khoa hàng đầu cả nước",
    about: "Bệnh viện Mắt Trung Ương là bệnh viện tuyến cuối chuyên khoa mắt, thực hiện điều trị, phẫu thuật và nghiên cứu về nhãn khoa.",
    address: "85 Bà Triệu, Hai Bà Trưng, Hà Nội",
    phone: "02438263944",
    license: "MTTW-HN-27",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám mắt tổng quát",
      "Phẫu thuật Lasik",
      "Phẫu thuật đục thủy tinh thể",
      "Tư vấn cận – viễn – loạn thị"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 960 },
      { weekend: 2, timeStart: 480, timeEnd: 960 },
      { weekend: 3, timeStart: 480, timeEnd: 960 },
      { weekend: 4, timeStart: 480, timeEnd: 960 },
      { weekend: 5, timeStart: 480, timeEnd: 900 }
    ]
  },
  {
    id: 28,
    slug: "benh-vien-da-khoa-tam-tri-da-nang-000028",
    name: "Bệnh viện Tâm Trí Đà Nẵng",
    title: "Dịch vụ y tế chất lượng cao miền Trung",
    about: "Tâm Trí Đà Nẵng là bệnh viện tư nhân đa khoa với đội ngũ bác sĩ giỏi, công nghệ hiện đại và mô hình dịch vụ hướng tới bệnh nhân.",
    address: "64 Cách Mạng Tháng 8, Cẩm Lệ, Đà Nẵng",
    phone: "02363686789",
    license: "TTDN-DN-28",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám chuyên khoa",
      "Xét nghiệm – nội soi",
      "Điều trị nội trú",
      "Cấp cứu 24/7"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 960 }
    ]
  },
  {
    id: 29,
    slug: "benh-vien-da-khoa-xuyen-anh-000029",
    name: "Bệnh viện Đa khoa Xuyên Á",
    title: "Bệnh viện ngoài công lập quy mô lớn",
    about: "Xuyên Á là hệ thống bệnh viện đa khoa tư nhân nổi bật tại TP.HCM và khu vực lân cận, với tiêu chuẩn dịch vụ cao và chi phí hợp lý.",
    address: "42 Quốc lộ 22, Hóc Môn, TP. HCM",
    phone: "02837966999",
    license: "XA-HCM-29",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám tổng quát",
      "Nội soi tiêu hóa",
      "Chẩn đoán hình ảnh",
      "Phẫu thuật chuyên sâu"
    ],
    time: [
      { weekend: 1, timeStart: 480, timeEnd: 1020 },
      { weekend: 2, timeStart: 480, timeEnd: 1020 },
      { weekend: 3, timeStart: 480, timeEnd: 1020 },
      { weekend: 4, timeStart: 480, timeEnd: 1020 },
      { weekend: 5, timeStart: 480, timeEnd: 960 },
      { weekend: 6, timeStart: 480, timeEnd: 900 }
    ]
  },
  {
    id: 30,
    slug: "benh-vien-thu-y-sai-gon-000030",
    name: "Bệnh viện Thú y Sài Gòn",
    title: "Chăm sóc sức khỏe cho thú cưng",
    about: "Bệnh viện Thú y Sài Gòn là đơn vị hàng đầu về chăm sóc y tế cho thú cưng, với các dịch vụ khám, phẫu thuật, và xét nghiệm thú y hiện đại.",
    address: "123 Đường Lê Đức Thọ, Gò Vấp, TP. HCM",
    phone: "02838123456",
    license: "TYSG-HCM-30",
    thumbnail: "https://randomuser.me/api/portraits/men/4.jpg",
    img: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg"
    ],
    service: [
      "Khám thú cưng",
      "Tiêm phòng",
      "Phẫu thuật nhỏ",
      "Tư vấn dinh dưỡng"
    ],
    time: [
      { weekend: 1, timeStart: 540, timeEnd: 1020 },
      { weekend: 2, timeStart: 540, timeEnd: 1020 },
      { weekend: 3, timeStart: 540, timeEnd: 1020 },
      { weekend: 4, timeStart: 540, timeEnd: 1020 },
      { weekend: 5, timeStart: 540, timeEnd: 960 },
      { weekend: 6, timeStart: 600, timeEnd: 900 }
    ]
  }
];

module.exports = fakeHospitals;
