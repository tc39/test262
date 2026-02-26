// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: >
    When the AsyncContext.Variable constructor is not passed an options bag
    with a `defaultValue` property, it sets [[AsyncVariableDefaultValue]] to
    `undefined`.
info: |
  AsyncContext.Variable ( options )

  3. Let defaultValue be undefined.
  4. If options is an Object, then
    ...
    c. Set defaultValue to ? Get(options, "defaultValue").
  ...
  7. Set asyncVariable.[[AsyncVariableDefaultValue]] to defaultValue.
  8. Return asyncVariable.
features: [AsyncContext]
---*/

assert.sameValue(
    new AsyncContext.Variable().get(),
    undefined,
    '`new AsyncContext.Variable().get()` returns undefined'
);

assert.sameValue(
    new AsyncContext.Variable(42).get(),
    undefined,
    '`new AsyncContext.Variable(42).get()` returns undefined'
);

assert.sameValue(
    new AsyncContext.Variable(null).get(),
    undefined,
    '`new AsyncContext.Variable(null).get()` returns undefined'
);

assert.sameValue(
    new AsyncContext.Variable(Symbol()).get(),
    undefined,
    '`new AsyncContext.Variable(Symbol()).get()` returns undefined'
);

assert.sameValue(
    new AsyncContext.Variable({}).get(),
    undefined,
    '`new AsyncContext.Variable({}).get()` returns undefined'
);

assert.sameValue(
    new AsyncContext.Variable([]).get(),
    undefined,
    '`new AsyncContext.Variable([]).get()` returns undefined'
);

assert.sameValue(
    new AsyncContext.Variable({ name: "foo" }).get(),
    undefined,
    '`new AsyncContext.Variable({ name: "foo" }).get()` returns undefined'
);
