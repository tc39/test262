// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.2.1-10-6gs
description: >
    Strict Mode - SyntaxError is thrown if a function using the
    Function constructor has two identical parameters in (local)
    strict mode
negative: Test262Error
flags: [onlyStrict]
includes: [Test262Error.js]
---*/

throw new Test262Error();
var _15_3_2_1_10_6_fun = new Function('param_1', 'param_2', 'param_1', '"use strict";return 0;');
