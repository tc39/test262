// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.4.3-1-83gs
description: >
    Strict - checking 'this' from a global scope (non-strict function
    declaration called by strict Function constructor)
flags: [noStrict]
---*/

function f() {return this!==undefined;};
if (! ((function () {return Function("\"use strict\";return f();")();})()) ){
    throw "'this' had incorrect value!";
}
