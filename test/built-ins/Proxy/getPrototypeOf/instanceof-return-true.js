// Copyright (C) 2019 ta7sudan. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-getprototypeof
description: >
    instanceof operator will return true if trap result is the prototype of
    the function.
features: [Proxy]
---*/

function CustomClass() {}

var p = new Proxy({}, {
  getPrototypeOf: function() {
    return CustomClass.prototype;
  }
});

assert(p instanceof CustomClass, 'Expected p to be the instance of CustomClass, but was not.');
