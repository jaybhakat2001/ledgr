import { formatPrice as toRupees, formatStockStatus, formatSKU } from './helpers.js';

console.log(toRupees(420));
console.log(formatStockStatus(6, 15));
console.log(formatStockStatus(84, 20));

console.log(formatSKU('ch-23a3'));
