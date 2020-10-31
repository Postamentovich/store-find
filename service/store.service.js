const turf = require('@turf/turf');
const StoreRepository = require('../repository/store.repository');

const findZones = [20, 50, 100, null];

let stores = [];

async function updateStores() {
  try {
    const data = await StoreRepository.getStores();
    stores = [];
    Object.entries(data).forEach(([location, { elements }]) => {
      elements.forEach((store) => {
        stores.push({ ...store, location });
      });
    });
  } catch (error) {
    console.error(error);
  } finally {
    setTimeout(updateStores, 1000 * 60 * 30);
  }
}

updateStores();

function getNearestStore(items, userPoint) {
  if (!items.length) return null;
  let nearestStore = null;
  for (const store of items) {
    const storePoint = turf.point([store.longitude, store.Latitude]);
    const distance = turf.distance(userPoint, storePoint);
    if (!nearestStore || nearestStore.distance > distance) {
      nearestStore = { ...store, distance };
    }
  }
  return nearestStore;
}

function findInRadius(point, radius) {
  if (!radius) return getNearestStore(stores, point);
  const circle = turf.circle(turf.getCoord(point), radius);
  const items = stores.filter((item) => {
    const storePoint = turf.point([item.longitude, item.Latitude]);
    return turf.booleanPointInPolygon(storePoint, circle);
  });
  return getNearestStore(items, point);
}

const findStore = async (lat, lng) => {
  const point = turf.point([lng, lat]);
  for (const radius of findZones) {
    const store = findInRadius(point, radius);
    if (store) return store;
  }
  return null;
};

module.exports = { findStore };
