const path = require("path");
const multer = require("multer");

const transactionStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/images/transaction"));
  },
  filename: (req, file, cb) => {
    // const { username } = req.user;
    cb(null, `transaction-${Date.now()}-${file.originalname}`);
  },
});

const eventStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/images/event"));
  },
  filename: (req, file, cb) => {
    // const { username } = req.user;
    cb(null, `event-${Date.now()}-${file.originalname}`);
  },
});



const avatarStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/images/avatar"));
  },
  filename: (req, file, cb) => {
    const { username } = req.body;
    cb(null, `avatar_${username}-${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const fileType = file.mimetype.split("/")[1];
  if (
    fileType === "png" ||
    fileType === "jpg" ||
    fileType === "jpeg" ||
    fileType === "gif"
  ) {
    cb(null, true);
  } else {
    cb("File type not allowed", false);
  }
};

const limits = {
  fileSize: 1024 * 1024,
};

const uploadTransactionFile = multer({
  storage: transactionStorage,
  fileFilter,
  limits,
}).single("transactionImage");

const uploadEventFile = multer({
  storage: eventStorage,
  fileFilter,
  limits,
}).single("image");


const uploadAvatarFile = multer({
  storage: avatarStorage,
  fileFilter,
  limits,
}).single("avatar");

module.exports = {
  uploadAvatarFile,
  uploadTransactionFile,
  uploadEventFile
};
