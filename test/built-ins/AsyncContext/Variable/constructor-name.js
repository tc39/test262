// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: >
    When the AsyncContext.Variable constructor is passed an options bag with
    a `name` property, it sets [[AsyncVariableName]] to the stringification of
    that property.
info: |
  AsyncContext.Variable ( options )

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

function roundtripName(name) {
    return new AsyncContext.Variable({ name }).name;
}

assert.sameValue(
    roundtripName("foo"),
    'foo',
    '`roundtripName("foo")` returns `"foo"`'
);

assert.sameValue(
    roundtripName(42),
    '42',
    '`roundtripName(42)` returns `"42"`'
);

assert.sameValue(
    roundtripName(undefined),
    'undefined',
    '`roundtripName(undefined)` returns `"undefined"`'
);

const objectWithStringifier = {
    toString() {
        return "bar";
    }
}

assert.sameValue(
    roundtripName(objectWithStringifier),
    'bar',
    '`roundtripName(objectWithStringifier)` returns `"bar"`'
);
