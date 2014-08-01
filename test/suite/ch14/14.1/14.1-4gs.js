// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 14.1-4gs
description: >
    StrictMode - a Use Strict Directive followed by a strict mode
    violation
negative: SyntaxError
flags: [onlyStrict]
---*/

"use strict";
throw NotEarlyError;
eval = 42;
