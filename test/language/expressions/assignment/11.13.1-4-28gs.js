// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.13.1-4-28gs
description: >
    Strict Mode - TypeError is thrown if the identifier 'Math.PI'
    appears as the LeftHandSideExpression of simple assignment(=)
negative: TypeError
flags: [onlyStrict]
---*/

"use strict";
Math.PI = 20;
