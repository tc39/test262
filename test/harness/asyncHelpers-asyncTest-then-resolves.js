// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    The 'asyncTest' helper calls $DONE with undefined, regardless of what value the promise resolves with
flags: [async]
includes: [asyncHelpers.js]
---*/
var doneCalls = 0;
var realDone = $DONE;
globalThis.$DONE = function (noError) {
  doneCalls++;
  assert.sameValue(
    noError,
    undefined,
    "asyncTest should discard promise's resolved value"
  );
};

(async function () {
  await asyncTest(function () {
    return Promise.resolve(null);
  });
  assert.sameValue(doneCalls, 1, "asyncTest called $DONE with undefined");
  await asyncTest(function () {
    return Promise.resolve({});
  });
  assert.sameValue(doneCalls, 2, "asyncTest called $DONE with undefined");
  await asyncTest(function () {
    return Promise.resolve("hi");
  });
  assert.sameValue(doneCalls, 3, "asyncTest called $DONE with undefined");
  await asyncTest(function () {
    return Promise.resolve(10);
  });
  assert.sameValue(doneCalls, 4, "asyncTest called $DONE with undefined");
  await asyncTest(function () {
    return {
      then(res, rej) {
        res(true);
      },
    };
  });
  assert.sameValue(doneCalls, 5, "asyncTest called $DONE with undefined");
})().then(realDone, realDone);
