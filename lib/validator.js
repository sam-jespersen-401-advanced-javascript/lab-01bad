
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
const isNumber = input => {
  return typeof input === 'number';
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
const isArray = input => {
  return input instanceof Array;
};

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
const isObject = input => {
  return typeof input === 'object' && input instanceof Array === false;
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
const isBool = input => {
  return typeof input === 'boolean';
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
const isFunc = input => {
  return typeof input === 'function';
};

/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */

const isArrayOfStrings = (arr) => {
  if(arr.length && isArray(arr)) return arr.every(isString);
};

/**
 * Is this an array of numbers?
 * @param {array} input
 * @returns {boolean}
 */

const isArrayOfNumbers = (arr) => {
  if(arr.length && isArray(arr)) return arr.every(isNumber);
};

/**
 * Is this an array of objects?
 * @param {array} input
 * @returns {boolean}
 */

const isArrayOfObjects = (arr) => {
  if(arr.length && isArray(arr)) return arr.every(isObject);
};

/**
 * Is this an array of booleans?
 * @param {array} input
 * @returns {boolean}
 */

const isArrayOfBooleans = (arr) => {
  if(arr.length && isArray(arr)) return arr.every(isBool);
};

/**
 * Based on a set of rules, what is correct validator?
 * @param input
 * @param {boolean} [inputIsArrayOfData] Evaluate input as contained within array?
 * @returns {function}
 */
const getValidator = (input, inputIsArrayOfData) => {

  const funcs = Object.values(module.exports);

  for(let func in funcs) {
    const testedFunction = funcs[func];
    if(testedFunction(input) === true) {
      if(inputIsArrayOfData && testedFunction === isArray) {
        continue;
      } else {
        return testedFunction;
      }
    }
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
  getValidator
};