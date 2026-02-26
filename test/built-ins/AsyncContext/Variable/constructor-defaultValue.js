// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: >
    When the AsyncContext.Variable constructor is passed an options bag with
    a `defaultValue` property, it sets [[AsyncVariableDefaultValue]] to that
    property's value.
info: |
  AsyncContext.Variable ( options )

  4. If options is an Object, then
    ...
    c. Set defaultValue to ? Get(options, "defaultValue").
  ...
  7. Set asyncVariable.[[AsyncVariableDefaultValue]] to defaultValue.
  8. Return asyncVariable.
features: [AsyncContext]
---*/

assert.sameValue(
    new AsyncContext.Variable({ defaultValue: undefined }).get(),
    undefined,
    '`new AsyncContext.Variable({ defaultValue: undefined }).get()` returns `undefined`'
);

assert.sameValue(
    new AsyncContext.Variable({ defaultValue: "foo" }).get(),
    'foo',
    '`new AsyncContext.Variable({ defaultValue: "foo" }).get()` returns `"foo"`'
);

assert.sameValue(
    new AsyncContext.Variable({ defaultValue: 42 }).get(),
    42,
    '`new AsyncContext.Variable({ defaultValue: 42 }).get()` returns `42`'
);

const symbol = Symbol();

assert.sameValue(
    new AsyncContext.Variable({ defaultValue: symbol }).get(),
    symbol,
    '`new AsyncContext.Variable({ defaultValue: symbol }).get()` returns `symbol`'
);

const obj = {};

assert.sameValue(
    new AsyncContext.Variable({ defaultValue: obj }).get(),
    obj,
    '`new AsyncContext.Variable({ defaultValue: obj }).get()` returns `obj`'
);
