const nodeMailer = require('nodemailer')
const mailConfig = require('../../config/mail-config')

const sendMail = (transport) => (to, subject, htmlContent) => {
    const option = {
        from: mailConfig.FROM_NAME,
        to: to,
        subject: subject,
        html: htmlContent
    }

    return transport.sendMail(option);
}

const createTransport = () => {
    return nodeMailer.createTransport({
        host: mailConfig.HOST,
        port: mailConfig.PORT,
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
              <h2 style="color: #0d9488; margin: 0;">BookingCare</h2>
            </div>
          </div>

          <!-- MAIN CONTENT -->
          <h3 style="color: #333; margin-bottom: 20px;">Yêu cầu đặt lại mật khẩu</h3>
          <p style="font-size: 16px; color: #333;">Xin chào,</p>
          <p style="font-size: 16px; color: #333;">
            Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn tại <strong>BookingCare</strong>.
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
            © 2025 BookingCare. Email được gửi tự động, vui lòng không phản hồi.
          </p>
        </div>
      </div>
    `;
  };

  const transport = createTransport(); 
  const mailSender = sendMail(transport); 

  return mailSender({
    to,
    subject: 'Yêu cầu đặt lại mật khẩu - BookingCare',
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
              <h2 style="color: #0d9488; margin: 0;">BookingCare</h2>
            </div>
          </div>

          <!-- MAIN CONTENT -->
          <h3 style="color: #333; margin-bottom: 20px;">Xác thực địa chỉ email</h3>
          <p style="font-size: 16px; color: #333;">Xin chào,</p>
          <p style="font-size: 16px; color: #333;">
            Cảm ơn bạn đã đăng ký tài khoản tại <strong>BookingCare</strong>. Vui lòng nhấn nút bên dưới để xác thực địa chỉ email của bạn.
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
            © 2025 BookingCare. Email được gửi tự động, vui lòng không phản hồi.
          </p>
        </div>
      </div>
    `;
  };

  const transport = createTransport(); 
  const mailSender = sendMail(transport); 

  return mailSender({
    to,
    subject: 'Xác thực email của bạn - BookingCare',
    html: content(verifyLink)
  });
};


module.exports = {
    sendResetPasswordEmail,
    sendVerifyEmail

}
