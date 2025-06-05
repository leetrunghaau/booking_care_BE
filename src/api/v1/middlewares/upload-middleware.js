const multer = require('multer');
const path = require('path');
const fs = require('fs');

const BASE_UPLOAD_DIR = path.join(__dirname, '..', '..', '..', '..', 'public');

const uploadFileWithSubPath = (fieldName = 'files', subPath = '') => {
  const uploadPath = path.join(BASE_UPLOAD_DIR, subPath);

  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      cb(null, basename + '-' + Date.now() + ext);
    }
  });

  const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Chỉ cho phép tải lên các định dạng ảnh hoặc PDF!'));
    }
  };

  const limits = {
    fileSize: 10 * 1024 * 1024 // 10MB
  };

  const upload = multer({ storage, fileFilter, limits }).array(fieldName);

  return (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        return next(err);
      }

      if (req.files && req.files.length > 0) {
        req.customFiles = req.files.map((file) => ({
          filename: file.filename,
          originalname: file.originalname,
          mimetype: file.mimetype,
          size: file.size,
          path: file.path,
          subPath,
          fullPath: path.join(uploadPath, file.filename),
        }));
      }

      next();
    });
  };
};

module.exports = {
  uploadFileWithSubPath
};
