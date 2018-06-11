const toRadian = degree => (degree * Math.PI) / 180;

const distanceBetweenCoordinates = (latitude1, longitude1, latitude2, longitude2) => {
  // silly  example, just for demo purposes of webpack lodash bundle
  if (typeof latitude1 !== 'number' || typeof longitude1 !== 'number' || typeof latitude2 !== 'number' ||
    typeof longitude2 !== 'number') {
    return null;
  }
  const earthRadius = 6371; // km
  const dLat = toRadian(latitude2 - latitude1);
  const dLon = toRadian(longitude2 - longitude1);
  const lat1 = toRadian(latitude1);
  const lat2 = toRadian(latitude2);

  const a = (Math.sin(dLat / 2) * Math.sin(dLat / 2)) +
    (Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2));
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = earthRadius * c;
  // eslint-disable-next-line no-restricted-properties
  return Math.round(d * (Math.pow(10, 2))) / (Math.pow(10, 2));
};

module.exports = { distanceBetweenCoordinates };
