const nodeMailer = require('nodemailer')
const mailConfig = require('../../config/mail-config')

const sendMail = (transport) => ({ to, subject, html }) => {
  const option = {
    from: mailConfig.FROM_NAME,
    to,
    subject,
    html
  }

  return transport.sendMail(option);
}

const createTransport = () => {
  return nodeMailer.createTransport({
    host: mailConfig.HOST,
    port: Number(mailConfig.PORT),
    secure: false,
    auth: {
      user: mailConfig.USERNAME,
      pass: mailConfig.PASSWORD
    }
  });
}



const sendResetPasswordEmail = (to, token) => {
  const resetLink = `${mailConfig.FE_SERVER}/${mailConfig.FE_NEW_PASS_LINK}?token=${token}`;

  const content = (link) => {
    return `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f4f4f4; padding: 40px 0;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          
          <!-- LOGO & BRAND -->
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
              <!-- Custom SVG logo -->
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 2v2"/>
                <path d="M5 2v2"/>
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/>
                <path d="M8 15a6 6 0 0 0 12 0v-3"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
              <h2 style="color: #0d9488; margin: 0;">MedPlus</h2>
            </div>
          </div>

          <!-- MAIN CONTENT -->
          <h3 style="color: #333; margin-bottom: 20px;">Yêu cầu đặt lại mật khẩu</h3>
          <p style="font-size: 16px; color: #333;">Xin chào,</p>
          <p style="font-size: 16px; color: #333;">
            Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn tại <strong>MedPlus</strong>.
          </p>
          <p style="font-size: 16px; color: #333;">
            Nhấn vào nút bên dưới để tiến hành đặt lại mật khẩu:
          </p>

          <!-- BUTTON -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="${link}" style="background-color: #0d9488; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-size: 16px;">
              Đặt lại mật khẩu
            </a>
          </div>

          <p style="font-size: 14px; color: #666;">
            Nếu bạn không yêu cầu thay đổi mật khẩu, bạn có thể bỏ qua email này. Liên kết sẽ hết hạn sau 24 giờ để bảo vệ tài khoản của bạn.
          </p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

          <!-- FOOTER -->
          <p style="font-size: 14px; color: #999; text-align: center;">
            Cần hỗ trợ? Liên hệ chúng tôi qua email: <a href="mailto:${mailConfig.MAIL_SUPPORT}" style="color: #0d9488;">${mailConfig.MAIL_SUPPORT}</a><br />
            Hoặc truy cập <a href="${mailConfig.FE_SERVER}" style="color: #0d9488;">${mailConfig.FE_SERVER}</a>
          </p>

          <p style="font-size: 12px; color: #aaa; text-align: center; margin-top: 20px;">
            © 2025 MedPlus. Email được gửi tự động, vui lòng không phản hồi.
          </p>
        </div>
      </div>
    `;
  };

  const transport = createTransport();
  const mailSender = sendMail(transport);

  return mailSender({
    to: to,
    subject: 'Yêu cầu đặt lại mật khẩu - MedPlus',
    html: content(resetLink)
  });
};

const sendVerifyEmail = (to, token) => {
  const verifyLink = `${mailConfig.FE_SERVER}/${mailConfig.FE_VERIFY_EMAIL_LINK}?token=${token}`;

  const content = (link) => {
    return `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f4f4f4; padding: 40px 0;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          
          <!-- LOGO & BRAND -->
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
              <!-- Custom SVG logo -->
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 2v2"/>
                <path d="M5 2v2"/>
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/>
                <path d="M8 15a6 6 0 0 0 12 0v-3"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
              <h2 style="color: #0d9488; margin: 0;">MedPlus</h2>
            </div>
          </div>

          <!-- MAIN CONTENT -->
          <h3 style="color: #333; margin-bottom: 20px;">Xác thực địa chỉ email</h3>
          <p style="font-size: 16px; color: #333;">Xin chào,</p>
          <p style="font-size: 16px; color: #333;">
            Cảm ơn bạn đã đăng ký tài khoản tại <strong>MedPlus</strong>. Vui lòng nhấn nút bên dưới để xác thực địa chỉ email của bạn.
          </p>

          <!-- BUTTON -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="${link}" style="background-color: #0d9488; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-size: 16px;">
              Xác thực email
            </a>
          </div>

          <p style="font-size: 14px; color: #666;">
            Nếu bạn không tạo tài khoản hoặc không yêu cầu xác thực, vui lòng bỏ qua email này. Liên kết sẽ hết hạn sau 24 giờ.
          </p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

          <!-- FOOTER -->
          <p style="font-size: 14px; color: #999; text-align: center;">
            Cần hỗ trợ? Liên hệ chúng tôi qua email: <a href="mailto:${mailConfig.MAIL_SUPPORT}" style="color: #0d9488;">${mailConfig.MAIL_SUPPORT}</a><br />
            Hoặc truy cập <a href="${mailConfig.FE_SERVER}" style="color: #0d9488;">${mailConfig.FE_SERVER}</a>
          </p>

          <p style="font-size: 12px; color: #aaa; text-align: center; margin-top: 20px;">
            © 2025 MedPlus. Email được gửi tự động, vui lòng không phản hồi.
          </p>
        </div>
      </div>
    `;
  };

  const transport = createTransport();
  const mailSender = sendMail(transport);

  return mailSender({
    to: to,
    subject: 'Xác thực email của bạn - MedPlus',
    html: content(verifyLink)
  });
};
//đặt lịch thành công
const sendAppointmentEmail = (to, appointmentDetails) => {
  const {
    patientName,
    doctorName,
    time,
    date,
    location,
  } = appointmentDetails;

  const content = () => {
    return `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f4f4f4; padding: 40px 0;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          
          <!-- LOGO -->
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 2v2"/>
                <path d="M5 2v2"/>
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/>
                <path d="M8 15a6 6 0 0 0 12 0v-3"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
              <h2 style="color: #0d9488; margin: 0;">MedPlus</h2>
            </div>
          </div>

          <!-- MAIN CONTENT -->
          <h3 style="color: #333; margin-bottom: 20px;">Xác nhận lịch hẹn khám</h3>
          <p style="font-size: 16px; color: #333;">Xin chào <strong>${patientName}</strong>,</p>
          <p style="font-size: 16px; color: #333;">
            Lịch hẹn khám của bạn đã được đặt thành công. Dưới đây là thông tin chi tiết:
          </p>

          <ul style="font-size: 16px; color: #333; line-height: 1.6;">
            <li><strong>Bác sĩ:</strong> ${doctorName}</li>
            <li><strong>Ngày:</strong> ${date}</li>
            <li><strong>Thời gian:</strong> ${time}</li>
            <li><strong>Địa điểm:</strong> ${location}</li>
          </ul>

          <p style="font-size: 14px; color: #666; margin-top: 20px;">
            Vui lòng có mặt trước giờ hẹn ít nhất 15 phút. Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, xin vui lòng liên hệ:
          </p>
          <p style="font-size: 14px; color: #333;">
            📞 SĐT: ${mailConfig.PHONE_ADMIN_SUPPORT} <br />
            ✉️ Email: <a href="mailto:${mailConfig.MAIL_SUPPORT}" style="color: #0d9488;">${mailConfig.MAIL_SUPPORT}</a>
          </p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

          <p style="font-size: 12px; color: #aaa; text-align: center;">
            © 2025 MedPlus. Đây là email tự động, vui lòng không phản hồi.
          </p>
        </div>
      </div>
    `;
  };

  const transport = createTransport();
  const mailSender = sendMail(transport);

  return mailSender({
    to: to,
    subject: `Xác nhận lịch hẹn khám - MedPlus`,
    html: content()
  });
};
//gửi đơn thuốc 
const sendPrescriptionDetailEmail = (to, info, medications) => {
  const content = () => {
    const today = new Date().toLocaleDateString("vi-VN");

    const medicationRows = medications.map((med, index) => `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${index + 1}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>${med.name}</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${med.dosage}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${med.frequency}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${med.duration}</td>
        <td style="padding: 8px; border-bottom: 1px solid #eee;">${med.instructions}</td>
      </tr>
    `).join("");

    return `
     <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f4f4f4; padding: 40px 0;">
        <div style="max-width: 700px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          
        <!-- LOGO -->
          <div style="text-align: center;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 20px">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 2v2"/>
                <path d="M5 2v2"/>
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/>
                <path d="M8 15a6 6 0 0 0 12 0v-3"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
              <h2 style="text-align: center; color: #0d9488; margin: 0">ĐƠN THUỐC</h2>
              <h2 style="color: #0d9488; margin: 0;">(Med+)</h2>
            </div>
          </div>
          
          <p style="text-align: center; color: #666; margin-bottom: 20px; margin-top: 0px;">Ngày kê đơn: ${today}</p>

          <h3 style="margin-top: 30px;">Thông tin bệnh nhân</h3>
          <p><strong>Họ tên:</strong> ${info.patientName}</p>
          <p><strong>Tuổi:</strong> ${info.patientAge}</p>
          <p><strong>Giới tính:</strong> ${info.patientGender}</p>
          <p><strong>Chẩn đoán:</strong> ${info.diagnosis}</p>

          <h3 style="margin-top: 30px;">Thuốc điều trị</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 10px;">
            <thead>
              <tr style="background-color: #f0fdfa;">
                <th style="padding: 8px; border-bottom: 2px solid #0d9488;">#</th>
                <th style="padding: 8px; border-bottom: 2px solid #0d9488;">Tên thuốc</th>
                <th style="padding: 8px; border-bottom: 2px solid #0d9488;">Liều dùng</th>
                <th style="padding: 8px; border-bottom: 2px solid #0d9488;">Tần suất</th>
                <th style="padding: 8px; border-bottom: 2px solid #0d9488;">Thời gian</th>
                <th style="padding: 8px; border-bottom: 2px solid #0d9488;">Hướng dẫn</th>
              </tr>
            </thead>
            <tbody>
              ${medicationRows}
            </tbody>
          </table>

          <h3 style="margin-top: 30px;">Hướng dẫn chung</h3>
          <p>${info.generalInstructions}</p>

          <div style="text-align: right; margin-top: 40px;">
            <p><strong>${info.doctorName}</strong></p>
            <p>${info.doctorSpecialty}</p>
            <p style="color: #666;">${info.doctorHospital}</p>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

          <p style="font-size: 12px; color: #999; text-align: center;">
            Đây là email tự động từ hệ thống MedPlus. Vui lòng không phản hồi lại email này.
          </p>
        </div>
      </div>
    `;
  };

  const transport = createTransport();
  const mailSender = sendMail(transport);

  return mailSender({
    to: to,
    subject: `Đơn thuốc từ bác sĩ ${info.doctorName} - MedPlus`,
    html: content()
  });
};
// thông báo hủy lịch hẹn cho bệnh nhân 
const sendAppointmentCancelledEmail = (to, appointmentInfo) => {
  const content = () => {
    return `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f4f4f4; padding: 40px 0;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          
          <!-- LOGO -->
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 2v2"/>
                <path d="M5 2v2"/>
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/>
                <path d="M8 15a6 6 0 0 0 12 0v-3"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
              <h2 style="color: #0d9488; margin: 0;">MedPlus</h2>
            </div>
          </div>

          <!-- MAIN CONTENT -->
          <h3 style="color: #e11d48;">Lịch hẹn bị hủy</h3>
          <p style="font-size: 16px; color: #333;">
            Xin chào <strong>${appointmentInfo.patientName}</strong>,
          </p>
          <p style="font-size: 16px; color: #333;">
            Chúng tôi xin thông báo rằng lịch hẹn khám với <strong>BS. ${appointmentInfo.doctorName}</strong> vào lúc <strong>${appointmentInfo.date} - ${appointmentInfo.time}</strong> đã bị <strong>hủy</strong> do <em>${appointmentInfo.cancelReason}</em>.
          </p>

          <p style="font-size: 16px; color: #333;">
            Chúng tôi rất tiếc vì sự bất tiện này và mong bạn thông cảm. Bạn có thể đặt lại lịch khám mới bằng cách truy cập hệ thống MedPlus hoặc liên hệ với chúng tôi để được hỗ trợ.
          </p>

          <!-- BUTTON -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="${appointmentInfo.rebookLink}" style="background-color: #0d9488; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-size: 16px;">
              Đặt lại lịch khám
            </a>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

          <!-- FOOTER -->
          <p style="font-size: 14px; color: #999; text-align: center;">
            Cần hỗ trợ? Gửi email đến <a href="mailto:${mailConfig.MAIL_SUPPORT}" style="color: #0d9488;">${mailConfig.MAIL_SUPPORT}</a><br />
            Hoặc truy cập <a href="${mailConfig.FE_SERVER}" style="color: #0d9488;">${mailConfig.FE_SERVER}</a>
          </p>

          <p style="font-size: 12px; color: #aaa; text-align: center; margin-top: 20px;">
            © 2025 MedPlus. Email được gửi tự động, vui lòng không phản hồi lại.
          </p>
        </div>
      </div>
    `;
  };

  const transport = createTransport();
  const mailSender = sendMail(transport);

  return mailSender({
    to: to,
    subject: `Lịch hẹn với BS. ${appointmentInfo.doctorName} đã bị hủy - MedPlus`,
    html: content()
  });
};

// thông báo hủy lịch hẹn cho bác sĩ
const sendAppointmentCancelToDoctor = (to, cancelInfo) => {
  const content = () => {
    return `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f4f4f4; padding: 40px 0;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          
          <!-- LOGO -->
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 2v2"/>
                <path d="M5 2v2"/>
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/>
                <path d="M8 15a6 6 0 0 0 12 0v-3"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
              <h2 style="color: #0d9488; margin: 0;">MedPlus</h2>
            </div>
          </div>

          <!-- MAIN CONTENT -->
          <h3 style="color: #333;">Thông báo hủy lịch hẹn từ bệnh nhân</h3>
          <p style="font-size: 16px; color: #333;">Kính gửi <strong>BS. ${cancelInfo.doctorName}</strong>,</p>

          <p style="font-size: 16px; color: #333;">
            Bệnh nhân <strong>${cancelInfo.patientName}</strong> xin phép được hủy lịch hẹn khám đã đặt trước với bác sĩ vào lúc <strong>${cancelInfo.date} - ${cancelInfo.time}</strong>.
          </p>
          <p style="font-size: 16px; color: #333;">
            Bệnh nhân mong được đặt lại lịch khám vào thời gian phù hợp trong tương lai nếu có thể.
          </p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

          <!-- PATIENT INFO -->
          <p style="font-size: 14px; color: #666;">
            Thông tin bệnh nhân:<br />
            Họ tên: ${cancelInfo.patientName}<br />
            Email: ${cancelInfo.patientEmail}<br />
            Số điện thoại: ${cancelInfo.patientPhone}
          </p>

          <p style="font-size: 12px; color: #aaa; text-align: center; margin-top: 30px;">
            Email này được gửi từ hệ thống MedPlus để thông báo về thay đổi lịch hẹn. Nếu có thắc mắc, vui lòng liên hệ lại với bệnh nhân hoặc qua MedPlus.
          </p>
        </div>
      </div>
    `;
  };

  const transport = createTransport();
  const mailSender = sendMail(transport);

  return mailSender({
    to: to,
    subject: `Bệnh nhân ${cancelInfo.patientName} đã hủy lịch hẹn`,
    html: content()
  });
};
//đặt lịch mới
const sendNewAppointmentEmailToDoctor = (to, appointmentInfo) => {
  const content = () => {
    return `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f4f4f4; padding: 40px 0;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          
          <!-- LOGO -->
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 2v2"/>
                <path d="M5 2v2"/>
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/>
                <path d="M8 15a6 6 0 0 0 12 0v-3"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
              <h2 style="color: #0d9488; margin: 0;">MedPlus</h2>
            </div>
          </div>

          <!-- MAIN CONTENT -->
          <h3 style="color: #0d9488;">Lịch hẹn mới từ bệnh nhân</h3>

          <p style="font-size: 16px; color: #333;">Kính gửi <strong>BS. ${appointmentInfo.doctorName}</strong>,</p>

          <p style="font-size: 16px; color: #333;">
            Hệ thống MedPlus xin thông báo có một lịch hẹn mới từ bệnh nhân <strong>${appointmentInfo.patientName}</strong>.
          </p>

          <h4 style="margin-top: 20px; color: #333;">📅 Thông tin lịch hẹn</h4>
          <ul style="font-size: 15px; color: #333; padding-left: 20px; margin-bottom: 20px;">
            <li><strong>Thời gian:</strong> ${appointmentInfo.date} lúc ${appointmentInfo.time}</li>
            <li><strong>Lý do khám:</strong> ${appointmentInfo.reason}</li>
          </ul>

          <h4 style="color: #333;">👤 Thông tin bệnh nhân</h4>
          <ul style="font-size: 15px; color: #333; padding-left: 20px;">
            <li><strong>Họ tên:</strong> ${appointmentInfo.patientName}</li>
            <li><strong>Tuổi:</strong> ${appointmentInfo.patientAge}</li>
            <li><strong>Giới tính:</strong> ${appointmentInfo.patientGender}</li>
            <li><strong>Email:</strong> ${appointmentInfo.patientEmail}</li>
            <li><strong>Số điện thoại:</strong> ${appointmentInfo.patientPhone}</li>
          </ul>

          <p style="font-size: 15px; margin-top: 20px; color: #666;">
            Vui lòng truy cập hệ thống để xác nhận và chuẩn bị cho buổi khám.
          </p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

          <p style="font-size: 14px; color: #999; text-align: center;">
            Hệ thống MedPlus sẽ tự động nhắc lịch hẹn cho bác sĩ và bệnh nhân trước giờ khám. Mọi hỗ trợ xin liên hệ: <a href="mailto:${mailConfig.MAIL_SUPPORT}" style="color: #0d9488;">${mailConfig.MAIL_SUPPORT}</a>
          </p>

          <p style="font-size: 12px; color: #aaa; text-align: center; margin-top: 20px;">
            © 2025 MedPlus. Email được gửi tự động, vui lòng không phản hồi.
          </p>
        </div>
      </div>
    `;
  };

  const transport = createTransport();
  const mailSender = sendMail(transport);

  return mailSender({
    to: to,
    subject: `Bệnh nhân ${appointmentInfo.patientName} đã đặt lịch khám mới`,
    html: content()
  });
};

//bác sĩ xác nhận đặt lịch
const sendAppointmentConfirmedToPatient = (to, appointmentInfo) => {
  const content = () => {
    return `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f4f4f4; padding: 40px 0;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          
          <!-- LOGO -->
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 2v2"/>
                <path d="M5 2v2"/>
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/>
                <path d="M8 15a6 6 0 0 0 12 0v-3"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
              <h2 style="color: #0d9488; margin: 0;">MedPlus</h2>
            </div>
          </div>

          <!-- MAIN CONTENT -->
          <h3 style="color: #0d9488;">Lịch hẹn của bạn đã được xác nhận</h3>

          <p style="font-size: 16px; color: #333;">
            Xin chào <strong>${appointmentInfo.patientName}</strong>,
          </p>

          <p style="font-size: 16px; color: #333;">
            Bác sĩ <strong>${appointmentInfo.doctorName}</strong> đã xác nhận lịch hẹn khám của bạn. Dưới đây là thông tin chi tiết:
          </p>

          <ul style="font-size: 15px; color: #333; padding-left: 20px; margin-bottom: 20px;">
            <li><strong>Thời gian:</strong> ${appointmentInfo.date} lúc ${appointmentInfo.time}</li>
            <li><strong>Địa điểm:</strong> ${appointmentInfo.location}</li>
            <li><strong>Lý do khám:</strong> ${appointmentInfo.reason}</li>
          </ul>

          <p style="font-size: 16px; color: #333;">
            Vui lòng có mặt trước thời gian hẹn ít nhất 10 phút để làm thủ tục. Nếu có bất kỳ thay đổi nào, bạn có thể truy cập MedPlus để điều chỉnh hoặc hủy lịch.
          </p>

          <!-- BUTTON -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="${appointmentInfo.manageLink}" style="background-color: #0d9488; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-size: 16px;">
              Xem / Quản lý lịch hẹn
            </a>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

          <p style="font-size: 14px; color: #999; text-align: center;">
            Mọi thắc mắc vui lòng liên hệ: <a href="mailto:${mailConfig.MAIL_SUPPORT}" style="color: #0d9488;">${mailConfig.MAIL_SUPPORT}</a>
          </p>

          <p style="font-size: 12px; color: #aaa; text-align: center; margin-top: 20px;">
            © 2025 MedPlus. Email được gửi tự động, vui lòng không phản hồi.
          </p>
        </div>
      </div>
    `;
  };

  const transport = createTransport();
  const mailSender = sendMail(transport);

  return mailSender({
    to: to,
    subject: `Xác nhận lịch hẹn với BS. ${appointmentInfo.doctorName} - MedPlus`,
    html: content()
  });
};

//khám xong 
const sendConsultationResultToPatient = (to, consultationInfo) => {
  const content = () => {
    return `
      <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f4f4f4; padding: 40px 0;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          
          <!-- LOGO -->
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 2v2"/>
                <path d="M5 2v2"/>
                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/>
                <path d="M8 15a6 6 0 0 0 12 0v-3"/>
                <circle cx="20" cy="10" r="2"/>
              </svg>
              <h2 style="color: #0d9488; margin: 0;">MedPlus</h2>
            </div>
          </div>

          <!-- MAIN CONTENT -->
          <h3 style="color: #0d9488;">Kết quả khám của bạn</h3>

          <p style="font-size: 16px; color: #333;">Xin chào <strong>${consultationInfo.patientName}</strong>,</p>

          <p style="font-size: 16px; color: #333;">
            Bác sĩ <strong>${consultationInfo.doctorName}</strong> đã hoàn tất buổi khám và gửi kết quả đến bạn.
          </p>

          <h4 style="margin-top: 20px; color: #333;">📄 Thông tin kết quả khám</h4>
          <ul style="font-size: 15px; color: #333; padding-left: 20px;">
            <li><strong>Thời gian khám:</strong> ${consultationInfo.date} lúc ${consultationInfo.time}</li>
            <li><strong>Kết luận:</strong> ${consultationInfo.conclusion}</li>
            <li><strong>Chẩn đoán:</strong> ${consultationInfo.diagnosis}</li>
            <li><strong>Hướng dẫn điều trị:</strong> ${consultationInfo.instructions}</li>
          </ul>

          ${consultationInfo.resultLink
        ? `<div style="text-align: center; margin: 30px 0;">
                  <a href="${consultationInfo.resultLink}" style="background-color: #0d9488; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-size: 16px;">
                    Xem chi tiết kết quả
                  </a>
                </div>`
        : ""
      }

          <p style="font-size: 15px; color: #333;">
            Nếu bạn có bất kỳ câu hỏi nào về kết quả hoặc cần tư vấn thêm, vui lòng phản hồi qua hệ thống hoặc liên hệ với bác sĩ.
          </p>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

          <p style="font-size: 14px; color: #999; text-align: center;">
            Cần hỗ trợ thêm? Gửi email đến <a href="mailto:${mailConfig.MAIL_SUPPORT}" style="color: #0d9488;">${mailConfig.MAIL_SUPPORT}</a><br />
            Hoặc truy cập <a href="${mailConfig.FE_SERVER}" style="color: #0d9488;">${mailConfig.FE_SERVER}</a>
          </p>

          <p style="font-size: 12px; color: #aaa; text-align: center; margin-top: 20px;">
            © 2025 MedPlus. Email được gửi tự động, vui lòng không phản hồi.
          </p>
        </div>
      </div>
    `;
  };

  const transport = createTransport();
  const mailSender = sendMail(transport);

  return mailSender({
    to: to,
    subject: `Kết quả khám từ BS. ${consultationInfo.doctorName} đã được gửi`,
    html: content()
  });
};

module.exports = {
  sendResetPasswordEmail,
  sendVerifyEmail,
  sendAppointmentEmail, //đặt lịch thành công //
  sendPrescriptionDetailEmail, ////gửi đơn thuốc //
  sendAppointmentCancelledEmail,// thông báo hủy lịch hẹn cho bệnh nhân //
  sendAppointmentCancelToDoctor,// thông báo hủy lịch hẹn cho bác sĩ //
  sendNewAppointmentEmailToDoctor,//đặt lịch mới //
  sendAppointmentConfirmedToPatient,//bác sĩ xác nhận đặt lịch //
  sendConsultationResultToPatient//khám xong //





}
