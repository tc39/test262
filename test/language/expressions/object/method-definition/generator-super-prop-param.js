// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 GeneratorMethod can reference SuperProperty in arg
features: [generators]
es6id: 14.4.1
author: Sam Mikes
description: GeneratorMethod uses SuperProperty (allowed)
features: [ default-arg, generator, super ]
---*/

var value = {};
var obj;

try {
  Object.prototype.Test262Attr = value;
  obj = {
    *foo(a = super.Test262Attr) {
      return a;
    }
  };

  assert.sameValue(obj.foo().next().value, value);
} finally {
  delete Object.prototype.Test262Attr;
}
