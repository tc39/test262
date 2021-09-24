// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.4-4-44
description: >
    Object.getOwnPropertyNames - own index properties of String object
    are pushed into the returned Array
includes: [compareArray.js]
---*/

var str = new String("abc");
str[5] = "de";

var actual = Object.getOwnPropertyNames(str);

assert.compareArray(actual, ["0", "1", "2", "5", "length"], 'The value of actual is expected to be ["0", "1", "2", "5", "length"]');
