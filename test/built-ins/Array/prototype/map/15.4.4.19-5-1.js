// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-5-1
description: Array.prototype.map - thisArg not passed
flags: [noStrict]
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
  try {
    fnGlobalObject()._15_4_4_19_5_1 = true;
    var _15_4_4_19_5_1 = false;
  
    function callbackfn(val, idx, obj) {
      return this._15_4_4_19_5_1;
    }
    var srcArr = [1];
    var resArr = srcArr.map(callbackfn);
    if( resArr[0] === true)
      return true;    
	
	return false;
  }
  finally {
	delete fnGlobalObject()._15_4_4_19_5_1;
  }  
 }
runTestCase(testcase);
