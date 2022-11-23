// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    assert.throwsAsync returns a promise that rejects if funcOrThenable is not a function returning a thenable or a thenable.
flags: [async]
includes: [asyncHelpers.js]
---*/

async function checkRejects(funcOrThenable) {
  var caught = false;
  const p = assert.throwsAsync(Test262Error, funcOrThenable);
  assert(p instanceof Promise, "assert.throwsAsync should return a promise");
  try {
    await p;
  } catch (e) {
    caught = true;
    assert.sameValue(
      e.constructor,
      Test262Error,
      "throwsAsync should reject improper funcOrThenable with a Test262Error"
    );
  } finally {
    assert(
      caught,
      "assert.throwsAsync did not reject improper funcOrThenable " +
        funcOrThenable
    );
  }
}

(async function () {
  await checkRejects(null);
  await checkRejects({});
  await checkRejects("string");
  await checkRejects(10);
  await checkRejects();
  await checkRejects({ then: null });
  await checkRejects({ then: {} });
  await checkRejects({ then: "string" });
  await checkRejects({ then: 10 });
  await checkRejects({ then: undefined });
  await checkRejects(function () {
    return null;
  });
  await checkRejects(function () {
    return {};
  });
  await checkRejects(function () {
    return "string";
  });
  await checkRejects(function () {
    return 10;
  });
  await checkRejects(function () {});
  await checkRejects(function () {
    return { then: null };
  });
  await checkRejects(function () {
    return { then: {} };
  });
  await checkRejects(function () {
    return { then: "string" };
  });
  await checkRejects(function () {
    return { then: 10 };
  });
  await checkRejects(function () {
    return { then: undefined };
  });
})().then($DONE, $DONE);
