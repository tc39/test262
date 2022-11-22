// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    A collection of assertion and wrapper functions for testing asynchronous built-ins.
defines: [asyncTest]
---*/

function asyncTest(testFunc) {
  if (!Object.hasOwn(globalThis, "$DONE")) {
    throw new Test262Error("asyncTest called without async flag");
  }
  if (typeof testFunc !== "function") {
    $DONE(new Test262Error("asyncTest called with non-function argument"));
    return Promise.resolve();
  }
  try {
    return testFunc().then(
      function () {
        $DONE();
      },
      function (error) {
        $DONE(error);
      }
    );
  } catch (syncError) {
    $DONE(syncError);
    return Promise.resolve();
  }
}

assert.throwsAsync = function (
  expectedErrorConstructor,
  funcOrThenable,
  message
) {
  var innerThenable;
  if (message === undefined) {
    message = "";
  } else {
    message += " ";
  }
  if (typeof funcOrThenable === "function") {
    try {
      innerThenable = funcOrThenable();
      if (
        innerThenable === null ||
        typeof innerThenable !== "object" ||
        typeof innerThenable.then !== "function"
      ) {
        message +=
          "Expected to obtain an inner promise that would reject with a" +
          expectedErrorConstructor.name +
          " but result was not a thenable";
        return Promise.reject(new Test262Error(message));
      }
    } catch (thrown) {
      message +=
        "Expected a " +
        expectedErrorConstructor.name +
        " to be thrown asynchronously but an exception was thrown synchronously while obtaining the inner promise";
      return Promise.reject(new Test262Error(message));
    }
  } else if (
    funcOrThenable === null ||
    typeof funcOrThenable !== "object" ||
    typeof funcOrThenable.then !== "function"
  ) {
    message +=
      "assert.throwsAsync called with an argument that is neither a function nor a thenable";
    return Promise.reject(new Test262Error(message));
  } else {
    innerThenable = funcOrThenable;
  }

  try {
    return innerThenable.then(
      function () {
        message +=
          "Expected a " +
          expectedErrorConstructor.name +
          " to be thrown asynchronously but no exception was thrown at all";
        throw new Test262Error(message);
      },
      function (thrown) {
        var expectedName, actualName;
        if (typeof thrown !== "object" || thrown === null) {
          message += "Thrown value was not an object!";
          throw new Test262Error(message);
        } else if (thrown.constructor !== expectedErrorConstructor) {
          expectedName = expectedErrorConstructor.name;
          actualName = thrown.constructor.name;
          if (expectedName === actualName) {
            message +=
              "Expected a " +
              expectedName +
              " but got a different error constructor with the same name";
          } else {
            message +=
              "Expected a " + expectedName + " but got a " + actualName;
          }
          throw new Test262Error(message);
        }
      }
    );
  } catch (thrown) {
    if (typeof thrown !== "object" || thrown === null) {
      message +=
        "Expected a " +
        expectedErrorConstructor.name +
        " to be thrown asynchronously but innerThenable synchronously threw a value that was not an object ";
    } else {
      message +=
        "Expected a " +
        expectedErrorConstructor.name +
        " to be thrown asynchronously but a " +
        thrown.constructor.name +
        " was thrown synchronously";
    }
    return Promise.reject(new Test262Error(message));
  }
};
