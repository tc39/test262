// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    assert.throwsAsync returns a promise that rejects if funcOrThenable or the inner thenable synchronously throws.
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
  await checkRejects(function () {
    throw new Error();
  });
  await checkRejects(function () {
    throw new Test262Error();
  });
  await checkRejects({
    then: function () {
      throw new Error();
    },
  });
  await checkRejects({
    then: function () {
      throw new Test262Error();
    },
  });
  await checkRejects(function () {
    return {
      then: function () {
        throw new Error();
      },
    };
  });
  await checkRejects(function () {
    return {
      then: function () {
        throw new Test262Error();
      },
    };
  });
})().then($DONE, $DONE);
