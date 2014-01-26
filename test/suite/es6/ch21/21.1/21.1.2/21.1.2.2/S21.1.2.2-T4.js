/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T4.js
 * @description fromCodePoint should call ToNumber over elements in rest parameter object.
 *              and if there are undefined object - RangeError should be threw (because of SameValue(nextCP, ToInteger(nextCP)))
 */

runTestCase(function() {
  var obj = [undefined];
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
