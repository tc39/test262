// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.5-1gs
description: Strict Mode - arguments cannot be assigned to in a strict function
negative: SyntaxError
flags: [onlyStrict]
---*/

"use strict";
throw NotEarlyError;

function f_10_5_1_gs(){
    arguments = 7;
}
