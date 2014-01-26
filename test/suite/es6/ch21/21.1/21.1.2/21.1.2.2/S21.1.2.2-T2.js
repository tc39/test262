/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T2.js
 * @description String.fromCodePoint iterate does not call anything on zero-length rest parameter object
 */

runTestCase(function() {
  var obj = [];
  var res = createLoggerProxy(obj);
  var result = String.fromCodePoint.apply(String, res.proxy);
  assertOrderOfOps(res.log, [
    ['get', 'length']
  ]);
  return result === '';
});
