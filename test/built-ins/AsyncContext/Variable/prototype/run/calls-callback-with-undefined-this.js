// Copyright (C) 2024 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  Calls the second parameter as a function, with its this value being
  undefined.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  10. Let result be Completion(Call(func, undefined, args)).
features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable();

asyncVar.run("foo", function () {
  "use strict";
  assert.sameValue(this, undefined);
});
