// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-OptionalExpression
description: >
  optional chain on member expression in async context
info: |
  Left-Hand-Side Expressions
    OptionalExpression:
      MemberExpression [PrimaryExpression literal] OptionalChain
features: [optional-chaining]
flags: [async]
---*/

async function checkAssertions() {
  assert.sameValue('h', await "hello"?.[0]);
  assert.sameValue(undefined, await null?.a);  
}
checkAssertions().then($DONE, $DONE);
