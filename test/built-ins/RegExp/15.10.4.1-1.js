// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.10.4.1-1
description: >
    RegExp - no TypeError is thrown when pattern is an object and
    has a [[RegExpMatcher]] internal slot, and flags is not undefined
---*/

var regObj = new RegExp();
var regExpObj = new RegExp(regObj, "g");
assert(regExpObj.global);
