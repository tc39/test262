// Copyright (C) 2026 Benny Powers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: addInitializer throws TypeError when called after decoration completes
esid: sec-createdecoratorcontextobject
features: [decorators]
---*/

var savedContext;

function dec(_, context) {
  savedContext = context;
}

var A = class {
  @dec
  method() {}
};

assert.throws(TypeError, function() {
  savedContext.addInitializer(function() {});
});
