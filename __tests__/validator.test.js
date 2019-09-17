const validator = require('../lib/validator.js');

describe('validator module', () => {

  const str = 'yes';
  const num = 1;
  const arr = ['a'];
  const obj = { x: 'y' };
  const func = () => { };
  const bool = false;

  describe('performs basic validation of', () => {

    it('strings', () => {
      expect(validator.isString(str)).toBeTruthy();
      expect(validator.isString(num)).toBeFalsy();
      expect(validator.isString(arr)).toBeFalsy();
      expect(validator.isString(obj)).toBeFalsy();
      expect(validator.isString(func)).toBeFalsy();
      expect(validator.isString(bool)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isNumber(str)).toBeFalsy();
      expect(validator.isNumber(num)).toBeTruthy();
      expect(validator.isNumber(arr)).toBeFalsy();
      expect(validator.isNumber(obj)).toBeFalsy();
      expect(validator.isNumber(func)).toBeFalsy();
      expect(validator.isNumber(bool)).toBeFalsy();
    });

    it('arrays', () => {
      expect(validator.isArray(str)).toBeFalsy();
      expect(validator.isArray(num)).toBeFalsy();
      expect(validator.isArray(arr)).toBeTruthy();
      expect(validator.isArray(obj)).toBeFalsy();
      expect(validator.isArray(func)).toBeFalsy();
      expect(validator.isArray(bool)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isObject(str)).toBeFalsy();
      expect(validator.isObject(num)).toBeFalsy();
      expect(validator.isObject(arr)).toBeFalsy();
      expect(validator.isObject(obj)).toBeTruthy();
      expect(validator.isObject(func)).toBeFalsy();
      expect(validator.isObject(bool)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isBool(num)).toBeFalsy();
      expect(validator.isBool(arr)).toBeFalsy();
      expect(validator.isBool(obj)).toBeFalsy();
      expect(validator.isBool(func)).toBeFalsy();
      expect(validator.isBool(bool)).toBeTruthy();
    });

    it('functions', () => {
      expect(validator.isFunc(num)).toBeFalsy();
      expect(validator.isFunc(arr)).toBeFalsy();
      expect(validator.isFunc(obj)).toBeFalsy();
      expect(validator.isFunc(func)).toBeTruthy();
      expect(validator.isFunc(bool)).toBeFalsy();
    });
  });

  describe('performs array validation of', () => {

    const arrayOfStrings = ['a', 'b', 'c'];
    const arrayOfNumbers = [1, 2, 3];
    const arrayOfObjects = [{}, {}, {}];
    const arrayOfBooleans = [true, false, true];

    it('strings', () => {
      expect(validator.isArrayOfStrings(arrayOfStrings)).toBeTruthy();
      expect(validator.isArrayOfStrings(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfBooleans)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isArrayOfNumbers(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfNumbers)).toBeTruthy();
      expect(validator.isArrayOfNumbers(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfBooleans)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isArrayOfObjects(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfObjects)).toBeTruthy();
      expect(validator.isArrayOfObjects(arrayOfBooleans)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isArrayOfBooleans(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfBooleans)).toBeTruthy();
    });
  });

  describe('get validator for', () => {

    it('strings', () => {
      expect(validator.getValidator('stingfff')).toBe(validator.isString);
    });

    it('numbers', () => {
      expect(validator.getValidator(3)).toBe(validator.isNumber);

    });

    it('arrays', () => {
      expect(validator.getValidator([1, 2, 3])).toBe(validator.isArray);

    });

    it('objects', () => {
      expect(validator.getValidator({ flip: 'flip' })).toBe(validator.isObject);

    });

    it('booleans', () => {
      expect(validator.getValidator(true)).toBe(validator.isBool);

    });

    it('functions', () => {
      expect(validator.getValidator(() => { })).toBe(validator.isFunc);

    });

    it('array of strings', () => {
      expect(validator.getValidator(['a', 'string'], true)).toBe(validator.isArrayOfStrings);

    });

    it('array of numbers', () => {
      expect(validator.getValidator([6, 9], true)).toBe(validator.isArrayOfNumbers);

    });

    it('array of objects', () => {
      expect(validator.getValidator([{}, {}], true)).toBe(validator.isArrayOfObjects);

    });

    it('array of booleans', () => {
      expect(validator.getValidator([true, false], true)).toBe(validator.isArrayOfBooleans);

    });

  });
});