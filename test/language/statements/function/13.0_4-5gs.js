// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 13.0_4-5gs
description: >
    Strict Mode - SourceElements is evaluated as strict mode code when
    a FunctionDeclaration is contained in strict mode code
negative: SyntaxError
flags: [onlyStrict]
---*/

"use strict";
throw NotEarlyError;
function _13_0_4_5_fun() { eval = 42; };
