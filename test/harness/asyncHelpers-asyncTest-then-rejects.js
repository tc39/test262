// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    The 'asyncTest' helper calls $DONE with the rejection value if the test function rejects.
flags: [async]
includes: [asyncHelpers.js, compareArray.js]
---*/
const rejectionValues = [];
var realDone = $DONE;
globalThis.$DONE = function (mustBeDefined) {
  rejectionValues.push(mustBeDefined);
};
const someObject = {};

(async function () {
  await asyncTest(function () {
    return Promise.reject(null);
  });
  await asyncTest(function () {
    return Promise.reject(someObject);
  });
  await asyncTest(function () {
    return Promise.reject("hi");
  });
  await asyncTest(function () {
    return Promise.reject(10);
  });
  await asyncTest(function () {
    return {
      then(res, rej) {
        rej(true);
      },
    };
  });
  assert.compareArray(rejectionValues, [null, someObject, "hi", 10, true]);
})().then(realDone, realDone);
