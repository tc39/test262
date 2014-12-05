// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 13.1-5gs
description: >
    Strict Mode - SyntaxError is thrown if a FunctionDeclaration has
    two identical parameters
negative: SyntaxError
flags: [onlyStrict]
---*/

"use strict";
throw NotEarlyError;
function _13_1_5_fun(param, param) { }
