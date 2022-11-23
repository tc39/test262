// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    The 'asyncTest' helper when called with async flag always returns a promise that resolves to undefined.
flags: [async]
includes: [asyncHelpers.js]
---*/
var realDone = $DONE;
var doneCalls = 0;
globalThis.$DONE = function () {
  doneCalls++;
};

async function assertPromiseUndefined(returnedPromise) {
  assert(
    returnedPromise instanceof Promise,
    "returned value should be a Promise"
  );
  assert.sameValue(
    await returnedPromise,
    undefined,
    "returned Promise should resolve to undefined"
  );
}

(async function () {
  await assertPromiseUndefined(asyncTest({}));
  await assertPromiseUndefined(
    asyncTest(function () {
      return "non-thenable";
    })
  );
  await assertPromiseUndefined(
    asyncTest(function () {
      return Promise.resolve(true);
    })
  );
  await assertPromiseUndefined(
    asyncTest(function () {
      return Promise.reject(new Test262Error("oh no"));
    })
  );
  assert.sameValue(doneCalls, 4, "asyncTest must call $DONE");
})().then(realDone, realDone);
