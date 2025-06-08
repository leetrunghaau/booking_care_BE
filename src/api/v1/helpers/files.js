const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const unlinkAsync = promisify(fs.unlink);

async function deleteFile(relativePath) {
  if (!relativePath) return;

  try {
    const fullPath = path.join(__dirname, "../../../../public", relativePath);

    if (fs.existsSync(fullPath)) {
      await unlinkAsync(fullPath);
    } else {
    }
  } catch (err) {
    throw err;
  }
}

module.exports = {
  deleteFile,
};
