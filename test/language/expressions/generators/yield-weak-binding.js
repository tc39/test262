// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `yield` expressions bind weakly
  es6id: 14.4
  negative:
    phase: early
    type: SyntaxError
 ---*/

throw "Test262: This statement should not be evaluated.";

var g = function*() { yield 3 + yield 4; };
