// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 8.7.2-3-a-2gs
description: >
    Strict Mode - 'runtime' error is thrown before LeftHandSide
    evaluates to an unresolvable Reference
negative: Test262Error
flags: [onlyStrict]
includes: [Test262Error.js]
---*/

"use strict";
throw new Test262Error();
b = 11;
