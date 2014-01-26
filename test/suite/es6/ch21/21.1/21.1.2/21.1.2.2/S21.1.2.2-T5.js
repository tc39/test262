/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T4.js
 * @description throws RangeError on nextCP < 0 (5.e)
 */

runTestCase(function() {
  var obj = [-1];
  var res = createLoggerProxy(obj);
  try {
    var result = String.fromCodePoint.apply(String, res.proxy);
  } catch(e) {
    assertOrderOfOps(res.log, [
      ['get', 'length'],
      ['get', '0']
    ]);

    return e instanceof RangeError;
  }
  
  return false;
});
