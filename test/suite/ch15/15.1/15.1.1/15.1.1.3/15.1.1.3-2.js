// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.1.1.3-2
description: undefined is not writable, should throw TypeError in strict mode
flags: [onlyStrict]
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase(){
  "use strict";
  var global = fnGlobalObject();
  try{
    global["undefined"] = 5;  // Should throw a TypeError as per 8.12.5
  } catch (ex) {
    if(ex instanceof TypeError){
      return true;
    } else {
      return false;
    }
  }
}

runTestCase(testcase);
