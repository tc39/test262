// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*---
author: Maya Lekova <mslekova@chromium.org>
esid: await
description: >
  This test demonstrates that "then" on a non-native promise
  will still get called.
flags: [async]
features: [async-functions]
---*/

let thenCalled = false;

const value = 42;
const patched = {};
patched.then = function(fulfill, reject) {
  thenCalled = true;
  fulfill(value);
};

async function trigger() {
  return await patched;
}

trigger().then((v) => {
  assert.sameValue(v, value,
    'Patched promise should resolve with correct value when awaited on.');
  assert.sameValue(thenCalled, true,
    '"then" on non-native promises should be called.')
}).then($DONE, $DONE);
