require('dotenv').config();

const getConfig = () => {
  return {
    PORT: process.env.PORT || 5000,
  };
};

module.exports = { getConfig };
