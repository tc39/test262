// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      The right-hand side of a `yield *` expression may appear on a new line.
  es6id: 14.4
 ---*/

function* g() {
  yield *
  1
}
