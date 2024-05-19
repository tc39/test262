// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    A collection of assertion and wrapper functions for testing asynchronous built-ins.
defines: [asyncTest]
---*/

/**
 * Defines the **sole** asynchronous test of a file.
 * @see {@link ../docs/rfcs/async-helpers.md} for background.
 *
 * @param {Function} testFunc a callback whose returned promise indicates test results
 *   (fulfillment for success, rejection for failure)
 * @returns {void}
 */
function asyncTest(testFunc) {
  if (!Object.hasOwn(globalThis, "$DONE")) {
    throw new Test262Error("asyncTest called without async flag");
  }
  if (typeof testFunc !== "function") {
    $DONE(new Test262Error("asyncTest called with non-function argument"));
    return;
  }
  try {
    testFunc().then(
      function () {
        $DONE();
      },
      function (error) {
        $DONE(error);
      }
    );
  } catch (syncError) {
    $DONE(syncError);
  }
}

/**
 * Asserts that a callback asynchronously throws an instance of a particular
 * error (i.e., returns a promise whose rejection value is an object referencing
 * the constructor).
 *
 * @param {Function} expectedErrorConstructor the expected constructor of the
 *   rejection value
 * @param {Function} func the callback
 * @param {string} [message] the prefix to use for failure messages
 * @returns {Promise<void>} fulfills if the expected error is thrown,
 *   otherwise rejects
 */
assert.throwsAsync = function (expectedErrorConstructor, func, message) {
  return new Promise(function (resolve) {
    var expectedName = expectedErrorConstructor.name;
    var fail = function (detail) {
      if (message === undefined) {
        throw new Test262Error(detail);
      }
      throw new Test262Error(message + " " + detail);
    };
    var innerThenable;
    if (typeof func !== "function") {
      fail("assert.throwsAsync called with an argument that is not a function");
    }
    try {
      innerThenable = func();
    } catch (thrown) {
      fail("Expected a " +
        expectedName +
        " to be thrown asynchronously but the function threw synchronously");
    }
    if (
      innerThenable === null ||
      typeof innerThenable !== "object" ||
      typeof innerThenable.then !== "function"
    ) {
      fail("Expected to obtain a promise that would reject with a " +
        expectedName +
        " but result was not a thenable");
    }

    try {
      resolve(innerThenable.then(
        function () {
          fail("Expected a " +
            expectedName +
            " to be thrown asynchronously but no exception was thrown at all");
        },
        function (thrown) {
          var actualName;
          if (typeof thrown !== "object" || thrown === null) {
            fail("Thrown value was not an object!");
          } else if (thrown.constructor !== expectedErrorConstructor) {
            actualName = thrown.constructor.name;
            if (expectedName === actualName) {
              fail("Expected a " +
                expectedName +
                " but got a different error constructor with the same name");
            }
            fail("Expected a " + expectedName + " but got a " + actualName);
          }
        }
      ));
    } catch (thrown) {
      fail("Expected a " +
        expectedName +
        " to be thrown asynchronously but .then threw synchronously");
    }
  });
};
