/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T1.js
 * @description fromCodePoint iterate through all elements in rest parameter object
 */

runTestCase(function() {
  var obj = [65, 90];
  var res = createLoggerProxy(obj);
  var result = String.fromCodePoint.apply(String, res.proxy);
  assertOrderOfOps(res.log, [
    ['get', 'length'],
    ['get', '0'],
    ['get', '1']
  ]);
  return result === 'AZ';
});
