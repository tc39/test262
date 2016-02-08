// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-94-s
description: >
    Strict Mode - checking 'this' (non-strict function declaration
    called by strict Function.prototype.call(globalObject))
flags: [noStrict]
includes: [fnGlobalObject.js]
---*/

function f() { return this===fnGlobalObject();};
assert((function () {"use strict"; return f.call(fnGlobalObject());})());
