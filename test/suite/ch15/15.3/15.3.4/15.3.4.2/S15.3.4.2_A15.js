// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The toString function is not generic; it throws a TypeError exception if
    its this value is not a Function object.
description: >
    Whether or not they are callable, RegExp objects are not Function
    objects, so toString should throw a TypeError.
negative: TypeError
---*/

Function.prototype.toString.call(/x/);
