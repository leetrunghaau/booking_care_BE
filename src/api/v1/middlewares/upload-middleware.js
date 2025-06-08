const multer = require('multer');
const path = require('path');
const fs = require('fs');

const BASE_UPLOAD_DIR = path.join(__dirname, '..', '..', '..', '..', 'public');

const createStorage = (subPath) => {
  const uploadPath = path.join(BASE_UPLOAD_DIR, subPath);

  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      const timestamp = Date.now();
      cb(null, timestamp + ext);
    }
  });
};

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

const uploadSingleFileWithSubPath = (fieldName = 'file', subPath = '') => {
  const storage = createStorage(subPath);
  const upload = multer({ storage, fileFilter, limits }).single(fieldName);

  return (req, res, next) => {
    upload(req, res, function (err) {
      if (err) return next(err);

      if (req.file) {
        req.customFile = {
          filename: req.file.filename,
          originalname: req.file.originalname,
          mimetype: req.file.mimetype,
          size: req.file.size,
          path: req.file.path,
          subPath,
          fullPath: path.join(BASE_UPLOAD_DIR, subPath, req.file.filename),
        };
      }

      next();
    });
  };
};

const uploadMultipleFilesWithSubPath = (fieldName = 'files', subPath = '') => {
  const storage = createStorage(subPath);
  const upload = multer({ storage, fileFilter, limits }).array(fieldName);

  return (req, res, next) => {
    upload(req, res, function (err) {
      if (err) return next(err);

      if (req.files && req.files.length > 0) {
        req.customFiles = req.files.map((file) => ({
          filename: file.filename,
          originalname: file.originalname,
          mimetype: file.mimetype,
          size: file.size,
          path: file.path,
          subPath,
          fullPath: path.join(BASE_UPLOAD_DIR, subPath, file.filename),
        }));
      }

      next();
    });
  };
};

module.exports = {
  uploadSingleFileWithSubPath,
  uploadMultipleFilesWithSubPath
};
