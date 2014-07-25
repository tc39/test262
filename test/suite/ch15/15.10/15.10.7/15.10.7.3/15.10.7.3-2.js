/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.10/15.10.7/15.10.7.3/15.10.7.3-2.js
 * @description RegExp.prototype.ignoreCase is an accessor property whose set accessor function is undefined
 */


function testcase() {
  var d = Object.getOwnPropertyDescriptor(RegExp.prototype, 'ignoreCase');
  
  if (typeof d.get === 'function' &&
      d.set === undefined &&
      d.enumerable === false &&
      d.configurable === true) {
    return true;
  }
 }
runTestCase(testcase);
