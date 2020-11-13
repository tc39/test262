// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-destructuring-binding-patterns
description: >
  Funciton.length when ObjectBindingPattern in FormalParameterList
features: [destructuring-binding]
---*/

assert.sameValue((({a,b}) => {}).length, 1);
assert.sameValue((function({a,b}) {}).length, 1);
assert.sameValue((function * ({a,b}) {}).length, 1);
assert.sameValue((async ({a,b}) => {}).length, 1);
assert.sameValue((async function({a,b}) {}).length, 1);
assert.sameValue((async function * ({a,b}) {}).length, 1);

