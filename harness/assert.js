// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of assertion functions used throughout test262
---*/

function assert(mustBeTrue, message) {
  if (mustBeTrue === true) {
    return;
  }

  if (message === undefined) {
    message = 'Expected true but got ' + String(mustBeTrue);
  }
  fail(message);
}

assert._isSameValue = function (a, b) {
  if (a === b) {
    // Handle +/-0 vs. -/+0
    return a !== 0 || 1 / a === 1 / b;
  }

  // Handle NaN vs. NaN
  return a !== a && b !== b;
};

assert.sameValue = function (actual, expected, message) {
  if (assert._isSameValue(actual, expected)) {
    return;
  }

  if (message === undefined) {
    message = '';
  } else {
    message += ' ';
  }

  message += 'Expected SameValue(«' + String(actual) + '», «' + String(expected) + '») to be true';

  fail(message);
};

assert.notSameValue = function (actual, unexpected, message) {
  if (!assert._isSameValue(actual, unexpected)) {
    return;
  }

  if (message === undefined) {
    message = '';
  } else {
    message += ' ';
  }

  message += 'Expected SameValue(«' + String(actual) + '», «' + String(unexpected) + '») to be false';

  fail(message);
};

assert.throws = function (expectedErrorConstructor, func, message) {
  if (typeof func !== "function") {
    $ERROR('assert.throws requires two arguments: the error constructor ' +
      'and a function to run');
    return;
  }
  if (message === undefined) {
    message = '';
  } else {
    message += ' ';
  }

  try {
    func();
  } catch (thrown) {
    if (typeof thrown !== 'object' || thrown === null) {
      message += 'Thrown value was not an object!';
      fail(message);
    } else if (thrown.constructor !== expectedErrorConstructor) {
      message += 'Expected a ' + expectedErrorConstructor.name + ' but got a ' + thrown.constructor.name;
      fail(message);
    }
    return;
  }

  message += 'Expected a ' + expectedErrorConstructor.name + ' to be thrown but no exception was thrown at all';
  fail(message);
};

assert.throws.early = function(err, code) {
  let wrappedCode = 'function wrapperFn() { ' + code + ' }';
  let ieval = eval;

  assert.throws(err, function() { Function(wrappedCode); }, 'Function: ' + code);
};

assert.notThrows = function(func, message) {
  // The purpose of this function is catch errors during continueOnFailure().
  try {
    func();
  } catch (thrown) {
    if (message === undefined) {
      message = '';
    } else {
      message += ' ';
    }

    message += "Unexpected error: " + thrown;
    fail(message);
  }
};

var fail = (function() {
  var continueErrorsStack = [];
  function fail(message) {
    if (continueErrorsStack.length === 0) {
      $ERROR(message);
    } else {
      // This will cause failure later
      continueErrorsStack[continueErrorsStack.length - 1].push(message);
    }
  }
  assert.continueOnFailure = function(func) {
    var continueErrors = [];
    continueErrorsStack.push(continueErrors);

    func();

    continueErrorsStack.pop();
    if (continueErrors.length !== 0) {
      fail(continueErrors.join("\n"));
    }
  };
  return fail;
})();
