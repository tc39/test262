// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Strict Mode - octal extension is forbidden in strict mode (after a
    hex number is assigned to a variable from an eval)
negative: SyntaxError
flags: [onlyStrict]
---*/

"use strict";
var a;
eval("a = 0x1;a = 01;");
