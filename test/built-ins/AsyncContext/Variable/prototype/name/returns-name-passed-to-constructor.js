// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable.prototype.name
description: >
  Returns the name that was passed to the AsyncContext.Variable constructor,
  converted to a string.
info: |
  get AsyncContext.Variable.prototype.name

  3. Return asyncVariable.[[AsyncVariableName]].
features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable({ name: "foo" });

assert.sameValue(
  asyncVar.name,
  "foo",
  'The value of `asyncVar.name` is `"foo"`'
);
