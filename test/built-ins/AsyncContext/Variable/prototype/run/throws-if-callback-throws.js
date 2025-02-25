// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.run
description: >
  Throws if calling the second parameter throws.
info: |
  AsyncContext.Variable.prototype.run ( value, func, ...args )

  10. Let result be Completion(Call(func, undefined, args)).
  ...
  12. Return result.
features: [AsyncContext]
---*/

function CustomError() { }

const asyncVar = new AsyncContext.Variable();

assert.throws(CustomError, () => {
    asyncVar.run("foo", () => {
        throw new CustomError();
    });
});
