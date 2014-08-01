// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.4-1-5
info: >
  ES5 requires a `TypeError` here, while ES6 requires `ToObject` (19.1.2.7, 19.1.2.8.1)
description: Object.getOwnPropertyNames throws TypeError if 'O' is a string
negative: TypeError
---*/

Object.getOwnPropertyNames("abc");
