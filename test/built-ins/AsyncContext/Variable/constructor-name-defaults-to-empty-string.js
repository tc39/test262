// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: >
    When the AsyncContext.Variable constructor is not passed an options bag
    with a `name` property, it sets [[AsyncVariableName]] to the empty string.
info: |
  AsyncContext.Variable ( options )

  2. Let nameStr be the empty String.
  ...
  4. If options is an Object, then
    a. Let namePresent be ? HasProperty(options, "name").
    b. If namePresent is true, then
        i. Let name be ? Get(options, "name").
        ii. Set nameStr to ? ToString(name).
    ...
  6. Set asyncVariable.[[AsyncVariableName]] to nameStr.
  ...
  8. Return asyncVariable.
features: [AsyncContext]
---*/

assert.sameValue(
    new AsyncContext.Variable().name,
    '',
    '`new AsyncContext.Variable().name` returns the empty string'
);

assert.sameValue(
    new AsyncContext.Variable(42).name,
    '',
    '`new AsyncContext.Variable(42).name` returns the empty string'
);

assert.sameValue(
    new AsyncContext.Variable(null).name,
    '',
    '`new AsyncContext.Variable(null).name` returns the empty string'
);

assert.sameValue(
    new AsyncContext.Variable(Symbol()).name,
    '',
    '`new AsyncContext.Variable(Symbol()).name` returns the empty string'
);

assert.sameValue(
    new AsyncContext.Variable({}).name,
    '',
    '`new AsyncContext.Variable({}).name` returns the empty string'
);

assert.sameValue(
    new AsyncContext.Variable([]).name,
    '',
    '`new AsyncContext.Variable([]).name` returns the empty string'
);

assert.sameValue(
    new AsyncContext.Variable({ defaultValue: 42 }).name,
    '',
    '`new AsyncContext.Variable({ defaultValue: 42 }).name` returns the empty string'
);
