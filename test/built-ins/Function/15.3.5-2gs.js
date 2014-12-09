// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.5-2gs
description: >
    StrictMode - error is thrown when reading the 'caller' property of
    a function object
negative: TypeError
flags: [onlyStrict]
---*/

"use strict";
function _15_3_5_1_gs() {}
_15_3_5_1_gs.caller;
throw NotEarlyError;
