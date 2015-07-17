// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-68-s
description: >
    checking 'this' (strict function declaration called by
    Function.prototype.apply(undefined))
includes: [runTestCase.js]
---*/

function testcase() {
function f() { "use strict"; return this===undefined;};
return f.apply(undefined);
}
runTestCase(testcase);
