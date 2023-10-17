// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

/** ДЗ. Чистые функции */
export default function getHealthStatus(data) {
  if (data.health >= 50) {
    return 'healthy';
  }

  if (data.health < 50 && data.health >= 15) {
    return 'wounded';
  }

  if (data.health < 15 && data.health >= 1) {
    return 'critical';
  }

  if (data.health === 0 || data.health < 0) {
    return 'dead';
  }

  return 'dead';
}

/** ДЗ. Matches */
const heroesInfo = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

export const sortedHeroes = heroesInfo.sort(function(x, y) {
  return y.health - x.health;
});
