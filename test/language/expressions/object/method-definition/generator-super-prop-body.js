// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 GeneratorMethod can reference SuperProperty in body
features: [generators]
es6id: 14.4.1
author: Sam Mikes
description: GeneratorMethod body uses SuperProperty (allowed)
---*/

var value = {};
var obj;

try {
  Object.prototype.Test262Attr = value;
  obj = {
    *foo() {
      return super.Test262Attr;
    }
  };

  assert.sameValue(obj.foo().next().value, value);
} finally {
  delete Object.prototype.Test262Attr;
}
