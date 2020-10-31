const asyncHandler = require('express-async-handler');
const StoreService = require('../service/store.service');

const findStore = asyncHandler(async (req, res) => {
  const { lat, lng } = req.query;
  if (!lat || !lng) res.sendStatus(400);
  const result = await StoreService.findStore(lat, lng);
  res.status(200).json(result);
});

module.exports = { findStore };
