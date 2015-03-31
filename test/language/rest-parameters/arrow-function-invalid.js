// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.1
description: >
    Invalid rest parameter in arrow function parameters
negative: SyntaxError
---*/
var x = ...y => y;
