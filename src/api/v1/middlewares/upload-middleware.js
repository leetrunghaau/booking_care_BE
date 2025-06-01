const multer = require('multer');
const path = require('path');
const fs = require('fs');

const BASE_UPLOAD_DIR = path.join(__dirname, '..', '..','..', '..', 'public');

const uploadFileWithSubPath = (fieldName = 'file', subPath = '') => {
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

  const upload = multer({ storage, fileFilter, limits }).single(fieldName);

  return (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        return next(err);
      }
      if (req.file) {
        req.customFile = {
          filename: req.file.filename,
          originalname: req.file.originalname,
          mimetype: req.file.mimetype,
          size: req.file.size,
          path: req.file.path,
          subPath,
          fullPath: path.join(uploadPath, req.file.filename)
        };
      }
      next();
    });
  };
};

module.exports = {
  uploadFileWithSubPath
};
