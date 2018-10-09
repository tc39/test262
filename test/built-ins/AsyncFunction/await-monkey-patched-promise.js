// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*---
author: Maya Lekova <mslekova@chromium.org>
esid: await
description: >
  This test demonstrates that monkey-patched "then" on native promises will
  not get called. Adapted from example by Kevin Smith:
  https://github.com/tc39/ecma262/pull/1250#issuecomment-401082195
flags: [async]
features: [async-functions]
---*/

let thenCalled = false;

const value = 42;
const patched = Promise.resolve(value);
patched.then = function(...args) {
  thenCalled = true;
  return Promise.prototype.then.apply(this, args);
};

async function trigger() {
  return await patched;
}

trigger().then((v) => {
  assert.sameValue(v, value,
    'Patched promise should resolve with correct value when awaited on.');
  assert.sameValue(thenCalled, false,
    'Monkey-patched "then" on native promises should not be called.')
}).then($DONE, $DONE);
