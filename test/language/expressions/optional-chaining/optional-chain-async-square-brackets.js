// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-OptionalExpression
description: >
  optional chain expansions in an async context
info: |
  Left-Hand-Side Expressions
    OptionalExpression
      MemberExpression [PrimaryExpression Identifier] OptionalChain
        OptionalChain ?.[Expression]
features: [optional-chaining]
flags: [async]
---*/

function returnSoon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), 5);
  });
}
function rejectSoon(error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(error), 5);
  });
}
async function checkAssertions() {
  assert.sameValue(11, await [11]?.[0]);
  assert.sameValue(33, [22, 33]?.[await returnSoon(1)]);
  assert.sameValue(55, [44, await returnSoon(55)]?.[1]);
  assert.sameValue(undefined, undefined?.[
    await rejectSoon(Error('unreachable'))
  ]);
}
checkAssertions().then($DONE, $DONE);
