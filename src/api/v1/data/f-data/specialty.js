const fakeSpecialties = [


    {
        id: 1,
        slug: "tim-mach000001",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        icon: "heart-pulse",
        name: "Chuyên khoa Tim mạch",
        title: "Chuyên điều trị các bệnh lý về tim và mạch máu",
        about: "Chuyên khoa Tim mạch tập trung chẩn đoán và điều trị các bệnh về tim, như đau thắt ngực, rối loạn nhịp tim, cao huyết áp.",
        commonDiseases: [
            { name: "Bệnh động mạch vành", img: "https://randomuser.me/api/portraits/men/4.jpg" },
            { name: "Rối loạn nhịp tim", img: "https://randomuser.me/api/portraits/men/4.jpg" }
        ],
        advantages: [
            "Trang thiết bị hiện đại",
            "Đội ngũ bác sĩ giàu kinh nghiệm",
            "Chăm sóc tận tâm, chu đáo"
        ],
        faqs: [
            { question: "Triệu chứng nhận biết bệnh tim là gì?", answer: "Đau ngực, khó thở, mệt mỏi là những dấu hiệu thường gặp." },
            { question: "Có cần giấy giới thiệu khi khám chuyên khoa Tim mạch không?", answer: "Thông thường cần, trừ trường hợp cấp cứu." }
        ]
    },
    {
        id: 2,
        slug: "da-lieu000002",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        icon: "droplet",
        name: "Chuyên khoa Da liễu",
        title: "Chữa trị các bệnh về da, tóc và móng",
        about: "Chuyên khoa Da liễu xử lý các bệnh như mụn trứng cá, viêm da cơ địa, vảy nến và ung thư da.",
        commonDiseases: [
            { name: "Mụn trứng cá", img: "https://randomuser.me/api/portraits/men/4.jpg" },
            { name: "Vảy nến", img: "https://randomuser.me/api/portraits/men/4.jpg" }
        ],
        advantages: [
            "Phác đồ điều trị cá nhân hóa",
            "Ứng dụng công nghệ laser hiện đại",
            "Khám sàng lọc ung thư da chuyên sâu"
        ],
        faqs: [
            { question: "Có điều trị rụng tóc không?", answer: "Có, nhiều nguyên nhân rụng tóc có thể điều trị hiệu quả." },
            { question: "Điều trị mụn có đau không?", answer: "Phần lớn các phương pháp đều nhẹ nhàng và dễ chịu." }
        ]
    },
     {
    id: 3,
    slug: "noi-tiet000003",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    icon: "sun",
    name: "Chuyên khoa Nội tiết",
    title: "Chẩn đoán và điều trị các bệnh lý nội tiết và chuyển hóa",
    about: "Nội tiết chuyên về các bệnh như tiểu đường, rối loạn tuyến giáp, béo phì và các vấn đề hormone khác.",
    commonDiseases: [
      { name: "Tiểu đường", img: "https://randomuser.me/api/portraits/men/4.jpg" },
      { name: "Cường giáp", img: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    advantages: [
      "Phương pháp điều trị cập nhật",
      "Theo dõi bệnh nhân chặt chẽ",
      "Đội ngũ chuyên gia nội tiết giỏi"
    ],
    faqs: [
      { question: "Bệnh tiểu đường có thể chữa khỏi hoàn toàn không?", answer: "Hiện nay chưa có cách chữa khỏi hoàn toàn, nhưng có thể kiểm soát tốt bằng thuốc và lối sống." },
      { question: "Cường giáp gây ra những triệu chứng gì?", answer: "Run tay, mất ngủ, gầy sút cân là các dấu hiệu phổ biến." }
    ]
  },
  {
    id: 4,
    slug: "tai-mui-hong000004",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    icon: "ear",
    name: "Chuyên khoa Tai Mũi Họng",
    title: "Khám và điều trị các bệnh về tai, mũi, họng",
    about: "Tai Mũi Họng bao gồm các bệnh như viêm xoang, viêm tai giữa, viêm họng, và các vấn đề về thính lực.",
    commonDiseases: [
      { name: "Viêm xoang", img: "https://randomuser.me/api/portraits/men/4.jpg" },
      { name: "Viêm họng", img: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    advantages: [
      "Trang thiết bị chuyên dụng",
      "Phẫu thuật nội soi hiện đại",
      "Chăm sóc bệnh nhân tận tình"
    ],
    faqs: [
      { question: "Viêm xoang có nguy hiểm không?", answer: "Nếu không điều trị đúng cách có thể gây biến chứng nghiêm trọng." },
      { question: "Bao lâu nên khám Tai Mũi Họng một lần?", answer: "Tùy tình trạng, thường 6-12 tháng một lần nếu không có triệu chứng." }
    ]
  },
  {
    id: 5,
    slug: "nhi-khoa000005",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    icon: "baby",
    name: "Chuyên khoa Nhi khoa",
    title: "Chăm sóc sức khỏe và điều trị các bệnh ở trẻ em",
    about: "Nhi khoa chuyên về chăm sóc sức khỏe, tiêm chủng và điều trị các bệnh thường gặp ở trẻ em từ sơ sinh đến tuổi vị thành niên.",
    commonDiseases: [
      { name: "Sốt phát ban", img: "https://randomuser.me/api/portraits/men/4.jpg" },
      { name: "Viêm phổi", img: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    advantages: [
      "Môi trường thân thiện với trẻ em",
      "Đội ngũ bác sĩ nhi khoa chuyên nghiệp",
      "Dịch vụ tiêm chủng đầy đủ"
    ],
    faqs: [
      { question: "Khi nào nên đưa trẻ đi khám nhi khoa?", answer: "Khi trẻ sốt cao, khó thở hoặc có các triệu chứng bất thường khác." },
      { question: "Trẻ cần tiêm những loại vaccine nào?", answer: "Có nhiều loại, bác sĩ sẽ tư vấn theo lịch tiêm chủng quốc gia." }
    ]
  },
    {
        id: 6,
        slug: "rhm000006",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        icon: "tooth",
        name: "Chuyên khoa Răng Hàm Mặt",
        title: "Chăm sóc, điều trị các bệnh lý về răng, hàm và mặt",
        about: "Chuyên khoa Răng Hàm Mặt điều trị sâu răng, viêm nướu, chỉnh nha, phẫu thuật hàm mặt và các vấn đề liên quan đến răng miệng.",
        commonDiseases: [
            { name: "Sâu răng", img: "https://randomuser.me/api/portraits/men/4.jpg" },
            { name: "Viêm nướu", img: "https://randomuser.me/api/portraits/men/4.jpg" }
        ],
        advantages: [
            "Trang thiết bị hiện đại, vô trùng nghiêm ngặt",
            "Bác sĩ giàu kinh nghiệm, tận tâm",
            "Dịch vụ chỉnh nha thẩm mỹ"
        ],
        faqs: [
            { question: "Bao lâu nên khám răng một lần?", answer: "Nên khám định kỳ 6 tháng một lần để phòng ngừa bệnh." },
            { question: "Chỉnh nha có đau không?", answer: "Quá trình ban đầu có thể hơi khó chịu nhưng sau đó sẽ quen." }
        ]
    },
    {
        id: 7,
        slug: "tieu-hoa000007",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        icon: "stomach",
        name: "Chuyên khoa Tiêu hóa",
        title: "Khám và điều trị các bệnh lý về hệ tiêu hóa",
        about: "Chuyên khoa Tiêu hóa xử lý các bệnh về dạ dày, ruột, gan, mật, tụy như viêm loét dạ dày, gan nhiễm mỡ, viêm đại tràng.",
        commonDiseases: [
            { name: "Viêm loét dạ dày", img: "https://randomuser.me/api/portraits/men/4.jpg" },
            { name: "Gan nhiễm mỡ", img: "https://randomuser.me/api/portraits/men/4.jpg" }
        ],
        advantages: [
            "Chẩn đoán chính xác với nội soi hiện đại",
            "Điều trị chuyên sâu các bệnh mãn tính",
            "Theo dõi và tư vấn dinh dưỡng hiệu quả"
        ],
        faqs: [
            { question: "Viêm loét dạ dày có chữa được không?", answer: "Nếu phát hiện sớm và điều trị đúng, bệnh có thể được kiểm soát tốt." },
            { question: "Nội soi có đau không?", answer: "Thường được gây mê nhẹ, bệnh nhân gần như không đau." }
        ]
    },
    {
        id: 8,
        slug: "phoi000008",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        icon: "lungs",
        name: "Chuyên khoa Phổi",
        title: "Chẩn đoán và điều trị các bệnh lý về phổi và đường hô hấp",
        about: "Chuyên khoa Phổi điều trị các bệnh như viêm phổi, hen suyễn, lao phổi, và các bệnh hô hấp khác.",
        commonDiseases: [
            { name: "Viêm phổi", img: "https://randomuser.me/api/portraits/men/4.jpg" },
            { name: "Hen suyễn", img: "https://randomuser.me/api/portraits/men/4.jpg" }
        ],
        advantages: [
            "Thiết bị chẩn đoán hiện đại như X-quang, CT-scan",
            "Điều trị nội trú và ngoại trú chuyên sâu",
            "Theo dõi lâu dài các bệnh mạn tính"
        ],
        faqs: [
            { question: "Hen suyễn có chữa khỏi được không?", answer: "Hiện chưa có thuốc chữa khỏi nhưng có thể kiểm soát tốt bằng thuốc và tránh tác nhân gây bệnh." },
            { question: "Khi nào cần đi khám chuyên khoa phổi?", answer: "Khi có ho kéo dài, khó thở hoặc ho ra máu." }
        ]
    }, {
        id: 9,
        slug: "kham-pha-khoa000009",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        icon: "brain",
        name: "Chuyên khoa Thần kinh",
        title: "Chẩn đoán và điều trị các bệnh về hệ thần kinh",
        about: "Chuyên khoa Thần kinh chuyên xử lý các bệnh như đột quỵ, Parkinson, đau đầu mạn tính, và các rối loạn thần kinh khác.",
        commonDiseases: [
            { name: "Đột quỵ", img: "https://randomuser.me/api/portraits/men/4.jpg" },
            { name: "Đau đầu Migraine", img: "https://randomuser.me/api/portraits/men/4.jpg" }
        ],
        advantages: [
            "Đội ngũ bác sĩ chuyên sâu về thần kinh",
            "Trang thiết bị hiện đại hỗ trợ chẩn đoán",
            "Chương trình phục hồi chức năng chuyên biệt"
        ],
        faqs: [
            { question: "Triệu chứng của đột quỵ là gì?", answer: "Yếu liệt nửa người, nói khó, mất thăng bằng là các dấu hiệu phổ biến." },
            { question: "Phục hồi chức năng thần kinh mất bao lâu?", answer: "Tùy vào tình trạng bệnh, có thể vài tuần đến vài tháng." }
        ]
    },
    {
        id: 10,
        slug: "nam-khoa000010",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        icon: "male",
        name: "Chuyên khoa Nam khoa",
        title: "Điều trị các bệnh lý nam giới liên quan đến sinh sản và tiết niệu",
        about: "Chuyên khoa Nam khoa xử lý các bệnh về sinh dục, vô sinh nam, rối loạn cương dương và các bệnh tiết niệu ở nam giới.",
        commonDiseases: [
            { name: "Vô sinh nam", img: "https://randomuser.me/api/portraits/men/4.jpg" },
            { name: "Rối loạn cương dương", img: "https://randomuser.me/api/portraits/men/4.jpg" }
        ],
        advantages: [
            "Tư vấn riêng tư, bảo mật",
            "Phương pháp điều trị đa dạng và hiện đại",
            "Đội ngũ bác sĩ nam khoa chuyên môn cao"
        ],
        faqs: [
            { question: "Nguyên nhân gây vô sinh nam là gì?", answer: "Có nhiều nguyên nhân như bất thường tinh trùng, tắc ống dẫn tinh." },
            { question: "Làm sao để phòng tránh rối loạn cương dương?", answer: "Chế độ sinh hoạt lành mạnh, tránh stress và khám định kỳ." }
        ]
    },
    {
        id: 11,
        slug: "phu-khoa000011",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        icon: "female",
        name: "Chuyên khoa Phụ khoa",
        title: "Chăm sóc và điều trị các bệnh lý phụ nữ",
        about: "Phụ khoa chuyên khám, tư vấn và điều trị các bệnh về cơ quan sinh sản nữ, chăm sóc thai kỳ và các vấn đề liên quan đến sức khỏe sinh sản.",
        commonDiseases: [
            { name: "Viêm nhiễm phụ khoa", img: "https://randomuser.me/api/portraits/men/4.jpg" },
            { name: "Rối loạn kinh nguyệt", img: "https://randomuser.me/api/portraits/men/4.jpg" }
        ],
        advantages: [
            "Phòng khám thân thiện, riêng tư",
            "Đội ngũ bác sĩ giàu kinh nghiệm",
            "Hỗ trợ tư vấn thai sản toàn diện"
        ],
        faqs: [
            { question: "Khi nào nên khám phụ khoa định kỳ?", answer: "Nên khám ít nhất 1 lần mỗi năm hoặc khi có triệu chứng bất thường." },
            { question: "Phụ nữ mang thai cần làm gì để đảm bảo sức khỏe?", answer: "Đi khám thai định kỳ, bổ sung dinh dưỡng và tuân thủ chỉ định của bác sĩ." }
        ]
    },
     {
    id: 12,
    slug: "y-hoc-co-truyen000012",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    icon: "herbal",
    name: "Chuyên khoa Y học cổ truyền",
    title: "Chữa bệnh và chăm sóc sức khỏe bằng phương pháp y học cổ truyền",
    about: "Y học cổ truyền bao gồm sử dụng thuốc nam, châm cứu, bấm huyệt, và các liệu pháp truyền thống để điều trị bệnh.",
    commonDiseases: [
      { name: "Thoát vị đĩa đệm", img: "https://randomuser.me/api/portraits/men/4.jpg" },
      { name: "Đau lưng mạn tính", img: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    advantages: [
      "Phương pháp điều trị tự nhiên, ít tác dụng phụ",
      "Kết hợp y học hiện đại và cổ truyền",
      "Chăm sóc toàn diện cho bệnh nhân"
    ],
    faqs: [
      { question: "Châm cứu có đau không?", answer: "Châm cứu thường gây cảm giác châm nhẹ, không đau." },
      { question: "Điều trị bằng y học cổ truyền mất bao lâu?", answer: "Tùy bệnh và cơ địa, thường vài tuần đến vài tháng." }
    ]
  },
  {
    id: 13,
    slug: "tai-mat000013",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    icon: "eye",
    name: "Chuyên khoa Tai Mắt",
    title: "Khám và điều trị các bệnh về tai và mắt",
    about: "Chuyên khoa Tai Mắt xử lý các vấn đề về thính lực, thị lực, viêm nhiễm, chấn thương và phẫu thuật liên quan đến tai và mắt.",
    commonDiseases: [
      { name: "Viêm tai giữa", img: "https://randomuser.me/api/portraits/men/4.jpg" },
      { name: "Cận thị", img: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    advantages: [
      "Thiết bị khám và phẫu thuật hiện đại",
      "Đội ngũ bác sĩ chuyên môn cao",
      "Chăm sóc và tư vấn kỹ lưỡng"
    ],
    faqs: [
      { question: "Làm sao phòng tránh viêm tai giữa?", answer: "Giữ tai sạch, tránh nước và điều trị kịp thời khi có nhiễm trùng." },
      { question: "Khi nào nên khám mắt định kỳ?", answer: "Nên khám ít nhất 1 lần mỗi năm hoặc khi có dấu hiệu mờ mắt." }
    ]
  },
  {
    id: 14,
    slug: "tuyen-giap000014",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    icon: "cloud-snow",
    name: "Chuyên khoa Tuyến giáp",
    title: "Chẩn đoán và điều trị các bệnh về tuyến giáp",
    about: "Chuyên khoa tuyến giáp xử lý các bệnh như cường giáp, suy giáp, bướu cổ và các vấn đề liên quan đến nội tiết tuyến giáp.",
    commonDiseases: [
      { name: "Bướu cổ", img: "https://randomuser.me/api/portraits/men/4.jpg" },
      { name: "Suy giáp", img: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    advantages: [
      "Phương pháp chẩn đoán hiện đại",
      "Điều trị hiệu quả các bệnh lý tuyến giáp",
      "Theo dõi bệnh nhân lâu dài"
    ],
    faqs: [
      { question: "Bướu cổ có nguy hiểm không?", answer: "Phần lớn lành tính nhưng cần theo dõi để tránh biến chứng." },
      { question: "Suy giáp cần điều trị bao lâu?", answer: "Thông thường điều trị lâu dài và theo dõi định kỳ." }
    ]
  },{
    id: 15,
    slug: "benh-than-kinh000015",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    icon: "brain-circuit",
    name: "Chuyên khoa Bệnh thần kinh",
    title: "Chẩn đoán và điều trị các bệnh thần kinh mạn tính và cấp tính",
    about: "Chuyên khoa Bệnh thần kinh tập trung vào các bệnh như động kinh, đa xơ cứng, viêm não, và các rối loạn thần kinh khác.",
    commonDiseases: [
      { name: "Động kinh", img: "https://randomuser.me/api/portraits/men/4.jpg" },
      { name: "Đa xơ cứng", img: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    advantages: [
      "Bác sĩ chuyên môn sâu về thần kinh học",
      "Phương pháp điều trị đa dạng, hiện đại",
      "Phục hồi chức năng chuyên biệt"
    ],
    faqs: [
      { question: "Động kinh có di truyền không?", answer: "Có thể có yếu tố di truyền nhưng không phải lúc nào cũng vậy." },
      { question: "Phục hồi chức năng cho đa xơ cứng như thế nào?", answer: "Tập luyện vật lý trị liệu kết hợp thuốc điều trị chuyên sâu." }
    ]
  },
  {
    id: 16,
    slug: "noi-tim-mach000016",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    icon: "heart",
    name: "Chuyên khoa Nội Tim mạch",
    title: "Chẩn đoán và điều trị các bệnh lý tim mạch nội khoa",
    about: "Chuyên khoa Nội Tim mạch điều trị các bệnh như suy tim, tăng huyết áp, rối loạn nhịp tim, và các bệnh lý mạch máu khác.",
    commonDiseases: [
      { name: "Suy tim", img: "https://randomuser.me/api/portraits/men/4.jpg" },
      { name: "Tăng huyết áp", img: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    advantages: [
      "Đội ngũ bác sĩ chuyên môn cao",
      "Trang thiết bị chẩn đoán hiện đại",
      "Chăm sóc bệnh nhân toàn diện"
    ],
    faqs: [
      { question: "Làm sao phòng ngừa tăng huyết áp?", answer: "Ăn uống hợp lý, tập thể dục đều đặn, tránh stress." },
      { question: "Suy tim có chữa khỏi được không?", answer: "Không hoàn toàn nhưng có thể kiểm soát tốt nếu tuân thủ điều trị." }
    ]
  },
  {
    id: 17,
    slug: "da-lieu-co-ban000017",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    icon: "droplet",
    name: "Chuyên khoa Da liễu cơ bản",
    title: "Điều trị các bệnh da liễu thường gặp và chăm sóc da cơ bản",
    about: "Chuyên khoa Da liễu cơ bản tập trung xử lý các bệnh ngoài da như mụn, viêm da, dị ứng và các vấn đề da liễu phổ biến khác.",
    commonDiseases: [
      { name: "Mụn trứng cá", img: "https://randomuser.me/api/portraits/men/4.jpg" },
      { name: "Viêm da cơ địa", img: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    advantages: [
      "Phác đồ điều trị cá nhân hóa",
      "Ứng dụng công nghệ laser hiện đại",
      "Tư vấn chăm sóc da tận tình"
    ],
    faqs: [
      { question: "Có thể phòng ngừa mụn trứng cá không?", answer: "Chăm sóc da sạch sẽ và ăn uống lành mạnh giúp giảm nguy cơ." },
      { question: "Viêm da cơ địa có lây không?", answer: "Không lây nhưng dễ tái phát nếu không điều trị đúng cách." }
    ]
  }
];

module.exports = fakeSpecialties;
