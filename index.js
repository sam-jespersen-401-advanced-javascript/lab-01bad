
const validator = require('./lib/validator.js');

console.log(validator.isString('hello world'));
console.log(validator.isNumber(2));
console.log(validator.isBool(false));
console.log(validator.isArray([69, '420']));
console.log(validator.isObject({ ffff: 'haha' }));
console.log(validator.isFunc(() => { }));
console.log(validator.isArrayOfStrings(['hello world', 'goodbye cruel world']));
console.log(validator.isArrayOfNumbers([6, 9, 4, 2, 0]));
console.log(validator.isArrayOfObjects([{ foo: 'bar' }, { ffff: 'ghghghg' }]));
console.log(validator.isArrayOfBooleans([false, true, false, true]));

console.log(validator.getValidator('hello world'));
console.log(validator.getValidator(2));
console.log(validator.getValidator(false));
console.log(validator.getValidator([69, '420']));
console.log(validator.getValidator({ ffff: 'haha' }));
console.log(validator.getValidator(() => { }));
console.log(validator.getValidator(['hello world', 'goodbye cruel world'], true));
console.log(validator.getValidator([6, 9, 4, 2, 0], true));
console.log(validator.getValidator([{ foo: 'bar' }, { ffff: 'ghghghg' }], true));
console.log(validator.getValidator([false, true, false, true], true));

