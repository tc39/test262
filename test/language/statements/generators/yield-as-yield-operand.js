// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `yield` expressions may be used as the right-hand-side of other `yield`
      expressions.
  es6id: 14.4
 ---*/

function* g() {
  yield yield 1;
}
