// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-OptionalExpression
description: >
  optional chain on member expression in async context
info: |
  Left-Hand-Side Expressions
    OptionalExpression
      MemberExpression [PrimaryExpression identifier] OptionalChain
features: [optional-chaining]
flags: [async]
---*/

function returnSoon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), 5);
  });
}
const a = undefined;
const c = {d: returnSoon(11)};
async function checkAssertions() {
  assert.sameValue(undefined, await a?.b);
  assert.sameValue(11, await c?.d);
}
checkAssertions().then($DONE, $DONE);
