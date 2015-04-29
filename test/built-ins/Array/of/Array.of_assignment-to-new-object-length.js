// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.2.3
description: >
    The Array.of() method creates a new Array instance
    with a variable number of arguments, regardless of
    number or type of the arguments.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
includes: [compareArray.js]
---*/
function Empty() {}
Empty.of = Array.of;
Object.defineProperty(Empty.prototype, "length", {get: function() { return 0; }});

assert.throws(TypeError, function() { Empty.of(); });
