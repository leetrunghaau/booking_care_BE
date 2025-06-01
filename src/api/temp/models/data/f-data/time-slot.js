   const fakeTimeSlots = [
  {
    id: 1,
    doctorId: 1,
    date: "2025-06-01",
    duration: 15,
    time: [
      { timeStart: 540, status: "available", bookingId: null, name: null },    // 9:00
      { timeStart: 555, status: "booked", bookingId: 101, name: "Nguyễn Văn A" }, // 9:15
      { timeStart: 570, status: "locked", bookingId: null, name: null },       // 9:30
      { timeStart: 585, status: "available", bookingId: null, name: null }     // 9:45
    ]
  },
  {
    id: 2,
    doctorId: 2,
    date: "2025-06-01",
    duration: 15,
    time: [
      { timeStart: 600, status: "available", bookingId: null, name: null },    // 10:00
      { timeStart: 615, status: "booked", bookingId: 102, name: "Trần Thị B" },  // 10:15
      { timeStart: 630, status: "available", bookingId: null, name: null },    // 10:30
      { timeStart: 645, status: "available", bookingId: null, name: null }     // 10:45
    ]
  },
  {
    id: 3,
    doctorId: 3,
    date: "2025-06-02",
    duration: 15,
    time: [
      { timeStart: 480, status: "booked", bookingId: 103, name: "Lê Văn C" },    // 8:00
      { timeStart: 495, status: "available", bookingId: null, name: null },      // 8:15
      { timeStart: 510, status: "locked", bookingId: null, name: null },         // 8:30
      { timeStart: 525, status: "available", bookingId: null, name: null }       // 8:45
    ]
  },
  {
    id: 4,
    doctorId: 1,
    date: "2025-06-03",
    duration: 15,
    time: [
      { timeStart: 600, status: "available", bookingId: null, name: null },     // 10:00
      { timeStart: 615, status: "available", bookingId: null, name: null },     // 10:15
      { timeStart: 630, status: "booked", bookingId: 104, name: "Phạm Thị D" },  // 10:30
      { timeStart: 645, status: "locked", bookingId: null, name: null }         // 10:45
    ]
  },
  {
    id: 5,
    doctorId: 4,
    date: "2025-06-03",
    duration: 15,
    time: [
      { timeStart: 540, status: "available", bookingId: null, name: null },     // 9:00
      { timeStart: 555, status: "booked", bookingId: 105, name: "Hoàng Văn E" }, // 9:15
      { timeStart: 570, status: "available", bookingId: null, name: null },     // 9:30
      { timeStart: 585, status: "available", bookingId: null, name: null }      // 9:45
    ]
  },


   {
    id: 6,
    doctorId: 5,
    date: "2025-06-04",
    duration: 15,
    time: [
      { timeStart: 480, status: "available", bookingId: null, name: null },     // 8:00
      { timeStart: 495, status: "booked", bookingId: 201, name: "Trịnh Văn F" },  // 8:15
      { timeStart: 510, status: "available", bookingId: null, name: null },     // 8:30
      { timeStart: 525, status: "locked", bookingId: null, name: null }         // 8:45
    ]
  },
  {
    id: 7,
    doctorId: 2,
    date: "2025-06-04",
    duration: 15,
    time: [
      { timeStart: 600, status: "booked", bookingId: 202, name: "Phan Thị G" },   // 10:00
      { timeStart: 615, status: "available", bookingId: null, name: null },      // 10:15
      { timeStart: 630, status: "available", bookingId: null, name: null },      // 10:30
      { timeStart: 645, status: "booked", bookingId: 203, name: "Ngô Văn H" }     // 10:45
    ]
  },
  {
    id: 8,
    doctorId: 3,
    date: "2025-06-05",
    duration: 15,
    time: [
      { timeStart: 540, status: "locked", bookingId: null, name: null },         // 9:00
      { timeStart: 555, status: "booked", bookingId: 204, name: "Đỗ Thị I" },    // 9:15
      { timeStart: 570, status: "available", bookingId: null, name: null },      // 9:30
      { timeStart: 585, status: "available", bookingId: null, name: null }       // 9:45
    ]
  },
  {
    id: 9,
    doctorId: 1,
    date: "2025-06-06",
    duration: 15,
    time: [
      { timeStart: 600, status: "available", bookingId: null, name: null },      // 10:00
      { timeStart: 615, status: "booked", bookingId: 205, name: "Vũ Văn J" },    // 10:15
      { timeStart: 630, status: "locked", bookingId: null, name: null },         // 10:30
      { timeStart: 645, status: "available", bookingId: null, name: null }       // 10:45
    ]
  },
  {
    id: 10,
    doctorId: 4,
    date: "2025-06-07",
    duration: 15,
    time: [
      { timeStart: 480, status: "booked", bookingId: 206, name: "Lê Thị K" },     // 8:00
      { timeStart: 495, status: "available", bookingId: null, name: null },      // 8:15
      { timeStart: 510, status: "available", bookingId: null, name: null },      // 8:30
      { timeStart: 525, status: "booked", bookingId: 207, name: "Phạm Văn L" }   // 8:45
    ]
  },
  {
    id: 11,
    doctorId: 6,
    date: "2025-06-08",
    duration: 15,
    time: [
      { timeStart: 480, status: "available", bookingId: null, name: null },       // 8:00
      { timeStart: 495, status: "booked", bookingId: 208, name: "Nguyễn Văn M" }, // 8:15
      { timeStart: 510, status: "available", bookingId: null, name: null },       // 8:30
      { timeStart: 525, status: "locked", bookingId: null, name: null }           // 8:45
    ]
  },
  {
    id: 12,
    doctorId: 7,
    date: "2025-06-08",
    duration: 15,
    time: [
      { timeStart: 600, status: "booked", bookingId: 209, name: "Trần Thị N" },    // 10:00
      { timeStart: 615, status: "available", bookingId: null, name: null },       // 10:15
      { timeStart: 630, status: "available", bookingId: null, name: null },       // 10:30
      { timeStart: 645, status: "booked", bookingId: 210, name: "Phùng Văn O" }   // 10:45
    ]
  },
  {
    id: 13,
    doctorId: 8,
    date: "2025-06-09",
    duration: 15,
    time: [
      { timeStart: 540, status: "locked", bookingId: null, name: null },          // 9:00
      { timeStart: 555, status: "booked", bookingId: 211, name: "Đinh Thị P" },   // 9:15
      { timeStart: 570, status: "available", bookingId: null, name: null },       // 9:30
      { timeStart: 585, status: "available", bookingId: null, name: null }        // 9:45
    ]
  },
  {
    id: 14,
    doctorId: 9,
    date: "2025-06-10",
    duration: 15,
    time: [
      { timeStart: 600, status: "available", bookingId: null, name: null },       // 10:00
      { timeStart: 615, status: "booked", bookingId: 212, name: "Lý Văn Q" },     // 10:15
      { timeStart: 630, status: "locked", bookingId: null, name: null },          // 10:30
      { timeStart: 645, status: "available", bookingId: null, name: null }        // 10:45
    ]
  },
  {
    id: 15,
    doctorId: 10,
    date: "2025-06-11",
    duration: 15,
    time: [
      { timeStart: 480, status: "booked", bookingId: 213, name: "Hà Thị R" },      // 8:00
      { timeStart: 495, status: "available", bookingId: null, name: null },       // 8:15
      { timeStart: 510, status: "available", bookingId: null, name: null },       // 8:30
      { timeStart: 525, status: "booked", bookingId: 214, name: "Vương Văn S" }   // 8:45
    ]
  },
  {
    id: 16,
    doctorId: 11,
    date: "2025-06-12",
    duration: 15,
    time: [
      { timeStart: 540, status: "available", bookingId: null, name: null },       // 9:00
      { timeStart: 555, status: "booked", bookingId: 215, name: "Nguyễn Văn T" },  // 9:15
      { timeStart: 570, status: "available", bookingId: null, name: null },       // 9:30
      { timeStart: 585, status: "locked", bookingId: null, name: null }           // 9:45
    ]
  },
  {
    id: 17,
    doctorId: 12,
    date: "2025-06-12",
    duration: 15,
    time: [
      { timeStart: 600, status: "booked", bookingId: 216, name: "Trần Thị U" },    // 10:00
      { timeStart: 615, status: "available", bookingId: null, name: null },       // 10:15
      { timeStart: 630, status: "available", bookingId: null, name: null },       // 10:30
      { timeStart: 645, status: "booked", bookingId: 217, name: "Phạm Văn V" }    // 10:45
    ]
  },
  {
    id: 18,
    doctorId: 13,
    date: "2025-06-13",
    duration: 15,
    time: [
      { timeStart: 480, status: "locked", bookingId: null, name: null },          // 8:00
      { timeStart: 495, status: "booked", bookingId: 218, name: "Đặng Thị W" },   // 8:15
      { timeStart: 510, status: "available", bookingId: null, name: null },       // 8:30
      { timeStart: 525, status: "available", bookingId: null, name: null }        // 8:45
    ]
  },
  {
    id: 19,
    doctorId: 14,
    date: "2025-06-14",
    duration: 15,
    time: [
      { timeStart: 600, status: "available", bookingId: null, name: null },       // 10:00
      { timeStart: 615, status: "booked", bookingId: 219, name: "Lê Văn X" },     // 10:15
      { timeStart: 630, status: "locked", bookingId: null, name: null },          // 10:30
      { timeStart: 645, status: "available", bookingId: null, name: null }        // 10:45
    ]
  },
  {
    id: 20,
    doctorId: 15,
    date: "2025-06-15",
    duration: 15,
    time: [
      { timeStart: 480, status: "booked", bookingId: 220, name: "Hoàng Thị Y" },  // 8:00
      { timeStart: 495, status: "available", bookingId: null, name: null },       // 8:15
      { timeStart: 510, status: "available", bookingId: null, name: null },       // 8:30
      { timeStart: 525, status: "booked", bookingId: 221, name: "Phan Văn Z" }    // 8:45
    ]
  },
   {
    id: 21,
    doctorId: 16,
    date: "2025-06-16",
    duration: 15,
    time: [
      { timeStart: 540, status: "available", bookingId: null, name: null },       // 9:00
      { timeStart: 555, status: "booked", bookingId: 222, name: "Nguyễn Minh A" }, // 9:15
      { timeStart: 570, status: "available", bookingId: null, name: null },       // 9:30
      { timeStart: 585, status: "available", bookingId: null, name: null }        // 9:45
    ]
  },
  {
    id: 22,
    doctorId: 17,
    date: "2025-06-16",
    duration: 15,
    time: [
      { timeStart: 600, status: "locked", bookingId: null, name: null },          // 10:00
      { timeStart: 615, status: "booked", bookingId: 223, name: "Trần Thị B" },   // 10:15
      { timeStart: 630, status: "available", bookingId: null, name: null },       // 10:30
      { timeStart: 645, status: "available", bookingId: null, name: null }        // 10:45
    ]
  },
  {
    id: 23,
    doctorId: 18,
    date: "2025-06-17",
    duration: 15,
    time: [
      { timeStart: 480, status: "booked", bookingId: 224, name: "Lê Văn C" },     // 8:00
      { timeStart: 495, status: "available", bookingId: null, name: null },       // 8:15
      { timeStart: 510, status: "locked", bookingId: null, name: null },          // 8:30
      { timeStart: 525, status: "available", bookingId: null, name: null }        // 8:45
    ]
  },
  {
    id: 24,
    doctorId: 19,
    date: "2025-06-18",
    duration: 15,
    time: [
      { timeStart: 600, status: "available", bookingId: null, name: null },       // 10:00
      { timeStart: 615, status: "available", bookingId: null, name: null },       // 10:15
      { timeStart: 630, status: "booked", bookingId: 225, name: "Phạm Thị D" },   // 10:30
      { timeStart: 645, status: "locked", bookingId: null, name: null }           // 10:45
    ]
  },
  {
    id: 25,
    doctorId: 20,
    date: "2025-06-19",
    duration: 15,
    time: [
      { timeStart: 480, status: "available", bookingId: null, name: null },       // 8:00
      { timeStart: 495, status: "booked", bookingId: 226, name: "Hoàng Văn E" },  // 8:15
      { timeStart: 510, status: "available", bookingId: null, name: null },       // 8:30
      { timeStart: 525, status: "available", bookingId: null, name: null }        // 8:45
    ]
  },
  {
    id: 31,
    doctorId: 26,
    date: "2025-06-25",
    duration: 15,
    time: [
      { timeStart: 540, status: "available", bookingId: null, name: null },       // 9:00
      { timeStart: 555, status: "available", bookingId: null, name: null },       // 9:15
      { timeStart: 570, status: "booked", bookingId: 232, name: "Hoàng Văn L" },  // 9:30
      { timeStart: 585, status: "locked", bookingId: null, name: null },          // 9:45
      { timeStart: 600, status: "available", bookingId: null, name: null },       // 10:00
    ],
  },
  {
    id: 32,
    doctorId: 27,
    date: "2025-06-26",
    duration: 15,
    time: [
      { timeStart: 600, status: "booked", bookingId: 233, name: "Trần Thị M" },   // 10:00
      { timeStart: 615, status: "available", bookingId: null, name: null },       // 10:15
      { timeStart: 630, status: "available", bookingId: null, name: null },       // 10:30
      { timeStart: 645, status: "booked", bookingId: 234, name: "Lê Văn N" },     // 10:45
      { timeStart: 660, status: "locked", bookingId: null, name: null },          // 11:00
    ],
  },
  {
    id: 33,
    doctorId: 28,
    date: "2025-06-27",
    duration: 15,
    time: [
      { timeStart: 480, status: "locked", bookingId: null, name: null },          // 8:00
      { timeStart: 495, status: "available", bookingId: null, name: null },       // 8:15
      { timeStart: 510, status: "booked", bookingId: 235, name: "Phạm Thị O" },   // 8:30
      { timeStart: 525, status: "available", bookingId: null, name: null },       // 8:45
      { timeStart: 540, status: "available", bookingId: null, name: null },       // 9:00
    ],
  },
  {
    id: 34,
    doctorId: 29,
    date: "2025-06-28",
    duration: 15,
    time: [
      { timeStart: 600, status: "available", bookingId: null, name: null },       // 10:00
      { timeStart: 615, status: "available", bookingId: null, name: null },       // 10:15
      { timeStart: 630, status: "booked", bookingId: 236, name: "Nguyễn Văn P" }, // 10:30
      { timeStart: 645, status: "available", bookingId: null, name: null },       // 10:45
      { timeStart: 660, status: "available", bookingId: null, name: null },       // 11:00
    ],
  },
  {
    id: 35,
    doctorId: 30,
    date: "2025-06-29",
    duration: 15,
    time: [
      { timeStart: 480, status: "booked", bookingId: 237, name: "Đỗ Thị Q" },     // 8:00
      { timeStart: 495, status: "available", bookingId: null, name: null },       // 8:15
      { timeStart: 510, status: "locked", bookingId: null, name: null },          // 8:30
      { timeStart: 525, status: "available", bookingId: null, name: null },       // 8:45
      { timeStart: 540, status: "available", bookingId: null, name: null },       // 9:00
    ],
  }
  ];

module.exports = fakeTimeSlots;