var OwnershipMask = require('./bit-mask').OwnershipMask;
var mask = new OwnershipMask('755');
console.log(mask.getBit(0), mask.hasPermission('user', 'read'));
console.log(mask.getBit(1), mask.hasPermission('user', 'write'));
console.log(mask.getBit(2), mask.hasPermission('user', 'execute'));
console.log(mask.getBit(3), mask.hasPermission('group', 'read'));
console.log(mask.getBit(4), mask.hasPermission('user', 'write'));
mask.setBit(4, 1);
console.log('val', mask.value, mask.bits());
mask.modify('ugo+rwx');
console.log('val', mask.value, mask.bits());
mask.modify(755);
console.log('val', mask.value, mask.bits());