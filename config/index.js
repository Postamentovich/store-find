require('dotenv').config();

const getConfig = () => {
  return {
    PORT: process.env.PORT || 5000,
    GOOGLE_SHEET_URL: process.env.GOOGLE_SHEET_URL,
  };
};

module.exports = { getConfig };
