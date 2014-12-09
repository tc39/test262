// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.4.1-5-a-5gs
description: >
    Strict Mode - SyntaxError is thrown when deleting a variable which
    is primitive type(boolean)
negative: SyntaxError
flags: [onlyStrict]
---*/

"use strict";
var _11_4_1_5 = 7;
throw NotEarlyError;
delete _11_4_1_5;
