// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    The HomeObject of Functions declared as methods is the Object prototype.
es6id: 14.3.8
features: [super]
---*/

var value = {};
var obj;

try {
  Object.prototype.Test262Attr = value;
  obj = {
    Test262Attr: null,
    method(x = super.Test262Attr) {
      return x;
    }
  };

  assert.sameValue(obj.method(), value);
} finally {
  delete Object.prototype.Test262Attr;
}
