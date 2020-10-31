const Tabletop = require('tabletop');
const { getConfig } = require('../config');

const { GOOGLE_SHEET_URL } = getConfig();

const getStores = () => {
  return new Promise((res) => {
    Tabletop.init({
      key: GOOGLE_SHEET_URL,
      callback: (data) => {
        res(data);
      },
      simpleSheet: false,
    });
  });
};

module.exports = { getStores };
