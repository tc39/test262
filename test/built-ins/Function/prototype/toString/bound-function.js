// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-function.prototype.tostring
description: Function.prototype.toString on bound function exotic objects
---*/

let f = function(){}.bind(null);

// TODO: extract this regexp to some shared lib location; it is copied from instrinsics.js
const NATIVE_FUNCTION_RE = /\bfunction\b[\s\S]+\b\w+\b[\s\S]*\([\s\S]*\)[\s\S]*\{[\s\S]*\[[\s\S]*\bnative\b[\s\S]+\bcode\b[\s\S]*\][\s\S]*\}/;

assert(NATIVE_FUNCTION_RE.test("" + f), "looks pretty much like a NativeFunction");
