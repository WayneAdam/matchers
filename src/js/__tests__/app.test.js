import getHealthStatus from '../app';

test.each([
  ['healthy', 50, { name: 'Маг', health: 50 }],
  ['healthy', 90, { name: 'Маг', health: 90 }],
  ['wounded', 49, { name: 'Маг', health: 49 }],
  ['wounded', 15, { name: 'Маг', health: 15 }],
  ['critical', 14, { name: 'Маг', health: 14 }],
  ['dead', 0, { name: 'Маг', health: 0 }],
  ['dead', -10, { name: 'Маг', health: -10 }],
  ['dead', null, { name: 'Маг', health: null }],
  ['dead', undefined, { name: 'Маг', health: undefined }],
])('app testing for %s status and %i health amount', (status, _, object) => {
  const result = getHealthStatus(object);
  expect(result).toBe(status);
});
