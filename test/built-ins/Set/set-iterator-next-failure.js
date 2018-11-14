// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.1.1
description: >
    Set ( [ iterable ] )

    When the Set function is called with optional argument iterable the following steps are taken:

    ...
    9. Repeat
      a. Let next be IteratorStep(iter).
      b. ReturnIfAbrupt(next).
features: [Symbol.iterator]
---*/

var iterable = {};

function MyError() {};
iterable[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new MyError();
    }
  };
};

assert.throws(MyError, function() {
  new Set(iterable);
});
