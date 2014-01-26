/**
 * @path es6/ch21/21.1/21.1.2/21.1.2.2/S21.1.2.2-T6.js
 * @description String.fromCodePoint throws RangeError on > 0x10FFFF (5.e)
 */

runTestCase(function() {
  var obj = [0x10FFFF + 1]; // The max is 0x10FFFF
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
