// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.1-4-27-s
description: >
    simple assignment throws TypeError if LeftHandSide is a readonly
    property in strict mode (Global.undefined)
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
    'use strict';

    try {
      fnGlobalObject().undefined = 42;
      return false;
    }
    catch (e) {
      return (e instanceof TypeError);
    }
 }
runTestCase(testcase);
