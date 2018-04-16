//Реализуйте и экспортируйте следующие функции для работы с точками:
//
//    quadrant - функция, которая вычисляет квадрант, в котором находится точка. Ниже приведена схема, показывающая номера квадрантов на плоскости.
//
//        +
//      2 | 1
//        |
//+----------------+
//        |
//      3 | 4
//        +
//
//const point = makePoint(1, 5);
//quadrant(point); // 1
//quadrant(makePoint(3, -3)); // 4
//
//Если точка не принадлежит ни одному квадранту (т.е., если она лежит хотя бы на одной из осей координат), то функция должна возвращать null:
//
//const point = makePoint(0, 7);
//quadrant(point); // null
//quadrant(makePoint(2, 0)); // null
//
//    symmetricalPoint - функция, возвращающая новую точку, симметричную относительно начала координат. Такая симметричность означает, что меняются знаки у x и y.
//
//symmetricalPoint(makePoint(1, 5)); // makePoint(-1, -5)
//
//    distance - функция, вычисляющая расстояние между точками по формуле: d = sqrt((x2−x1)^2+(y2−y1)^2)
//
//distance(makePoint(-2, -3), makePoint(-4, 4)); // ≈ 7.28

import { makePoint, getX, getY } from 'hexlet-points'; // eslint-disable-line

// BEGIN (write your solution here)
export const quadrant = (point) => {
  const x = getX(point);
  const y = getY(point);
if ((x === 0) || (y === 0)) {
  return null;
}
  if (x < 0)  {
    if (y < 0) {
      return 3;}
    else return 2;
  } 
  if (x > 0)  {
    if (y < 0) {
      return 4;}
    else return 1;
  }
}

export const symmetricalPoint = (point) => 
  makePoint(- getX(point), -getY(point));

export const distance = (point1, point2) =>
  Math.sqrt(((getX(point1) - getX(point2))**2)+((getY(point1) - getY(point2))**2));

// END
