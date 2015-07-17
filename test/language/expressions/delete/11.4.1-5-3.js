// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-3
description: >
    delete operator returns false when deleting a direct reference to
    a function name
flags: [noStrict]
includes:
    - runTestCase.js
---*/

function testcase() {
  var foo = function(){};

  // Now, deleting 'foo' directly should fail;
  var d = delete foo;
  if(d === false && typeof foo === 'function')
    return true;
 }
runTestCase(testcase);
