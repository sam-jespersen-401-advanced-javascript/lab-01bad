
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

const isNumber = input => {
  return typeof input === 'number';
};

const isArray = input => {
  return input instanceof Array;
};

const isObject = input => {
  return typeof input === 'object' && input instanceof Array === false;
};

const isBool = input => {
  return typeof input === 'boolean';
};
const isFunc = input => {
  return typeof input === 'function';
};

/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */

const isArrayOfStrings = (arr) => {
  return arr.every(isString);
};

const isArrayOfNumbers = (arr) => {
  return arr.every(isNumber);
};

const isArrayOfObjects = (arr) => {
  return arr.every(isObject);
};

const isArrayOfBooleans = (arr) => {
  return arr.every(isBool);
};

/**
 * Based on a set of rules, what is correct validator?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
 * @returns {boolean}
 */
const getValidator = (input) => {

  const funcs = Object.values(module.exports);

  for(let func in funcs) {
    if(funcs[func](input)) return funcs[func];
  }

};

module.exports = {
  isString,
  isNumber,
  isArray,
  isObject,
  isBool,
  isFunc,
  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,

  // moar array types...

  getValidator
};


