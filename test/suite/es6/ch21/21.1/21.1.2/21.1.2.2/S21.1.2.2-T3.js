/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T3.js
 * @description fromCodePoint should call ToNumber over elements in rest parameter object
 */

runTestCase(function() {
  var obj = [null, true, false, '2'];
  var res = createLoggerProxy(obj);
  var result = String.fromCodePoint.apply(String, res.proxy);
  assertOrderOfOps(res.log, [
    ['get', 'length'],
    ['get', '0'],
    ['get', '1'],
    ['get', '2'],
    ['get', '3']
  ]);

  return result.charCodeAt(0) === 0 && // ToNumber(Null) === 0 
    result.charCodeAt(1) === 1 && // ToNumber(true) === 1
    result.charCodeAt(2) === 0 && // ToNumber(false) === 1
    result.charCodeAt(3) === 2; // ToNumber('2') === 2
});
