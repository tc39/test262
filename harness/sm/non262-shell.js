/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*---
defines: [completesNormally, raisesException, deepEqual, makeIterator, Permutations, assertThrowsValue, assertThrownErrorContains, assertThrowsInstanceOfWithMessageCheck, assertThrowsInstanceOf, assertThrowsInstanceOfWithMessage, assertThrowsInstanceOfWithMessageContains, assertDeepEq]
allow_unused: True
---*/

(function() {
  const undefined = void 0;

  /*
   * completesNormally(CODE) returns true if evaluating CODE (as eval
   * code) completes normally (rather than throwing an exception).
   */
  globalThis.completesNormally = function completesNormally(code) {
    try {
      eval(code);
      return true;
    } catch (exception) {
      return false;
    }
  }

  /*
   * raisesException(EXCEPTION)(CODE) returns true if evaluating CODE (as
   * eval code) throws an exception object that is an instance of EXCEPTION,
   * and returns false if it throws any other error or evaluates
   * successfully. For example: raises(TypeError)("0()") == true.
   */
  globalThis.raisesException = function raisesException(exception) {
    return function (code) {
      try {
        eval(code);
        return false;
      } catch (actual) {
        return actual instanceof exception;
      }
    };
  };

  /*
   * Return true if A is equal to B, where equality on arrays and objects
   * means that they have the same set of enumerable properties, the values
   * of each property are deep_equal, and their 'length' properties are
   * equal. Equality on other types is ==.
   */
  globalThis.deepEqual = function deepEqual(a, b) {
    if (typeof a != typeof b)
      return false;

    if (typeof a == 'object') {
      var props = {};
      // For every property of a, does b have that property with an equal value?
      for (var prop in a) {
        if (!deepEqual(a[prop], b[prop]))
          return false;
        props[prop] = true;
      }
      // Are all of b's properties present on a?
      for (var prop in b)
        if (!props[prop])
          return false;
      // length isn't enumerable, but we want to check it, too.
      return a.length == b.length;
    }

    if (a === b) {
      // Distinguish 0 from -0, even though they are ===.
      return a !== 0 || 1/a === 1/b;
    }

    // Treat NaNs as equal, even though NaN !== NaN.
    // NaNs are the only non-reflexive values, i.e., if a !== a, then a is a NaN.
    // isNaN is broken: it converts its argument to number, so isNaN("foo") => true
    return a !== a && b !== b;
  }

  /** Make an iterator with a return method. */
  globalThis.makeIterator = function makeIterator(overrides) {
    var throwMethod;
    if (overrides && overrides.throw)
      throwMethod = overrides.throw;
    var iterator = {
      throw: throwMethod,
      next: function(x) {
        if (overrides && overrides.next)
          return overrides.next(x);
        return { done: false };
      },
      return: function(x) {
        if (overrides && overrides.ret)
          return overrides.ret(x);
        return { done: true };
      }
    };

    return function() { return iterator; };
  };

  /** Yield every permutation of the elements in some array. */
  globalThis.Permutations = function* Permutations(items) {
    if (items.length == 0) {
      yield [];
    } else {
      items = items.slice(0);
      for (let i = 0; i < items.length; i++) {
        let swap = items[0];
        items[0] = items[i];
        items[i] = swap;
        for (let e of Permutations(items.slice(1, items.length)))
          yield [items[0]].concat(e);
      }
    }
  };

  if (typeof globalThis.assertThrowsValue === 'undefined') {
    globalThis.assertThrowsValue = function assertThrowsValue(f, val, msg) {
      var fullmsg;
      try {
        f();
      } catch (exc) {
        if ((exc === val) === (val === val) && (val !== 0 || 1 / exc === 1 / val))
          return;
        fullmsg = "Assertion failed: expected exception " + val + ", got " + exc;
      }
      if (fullmsg === undefined)
        fullmsg = "Assertion failed: expected exception " + val + ", no exception thrown";
      if (msg !== undefined)
        fullmsg += " - " + msg;
      throw new Error(fullmsg);
    };
  }

  if (typeof globalThis.assertThrownErrorContains === 'undefined') {
    globalThis.assertThrownErrorContains = function assertThrownErrorContains(thunk, substr) {
      try {
        thunk();
      } catch (e) {
        // Do not test error messages
        return;
      }
      throw new Error("Expected error containing " + substr + ", no exception thrown");
    };
  }

  if (typeof globalThis.assertThrowsInstanceOfWithMessageCheck === 'undefined') {
    globalThis.assertThrowsInstanceOfWithMessageCheck = function assertThrowsInstanceOfWithMessageCheck(f, ctor, check, msg) {
      var fullmsg;
      try {
        f();
      } catch (exc) {
        if (!(exc instanceof ctor))
          fullmsg = `Assertion failed: expected exception ${ctor.name}, got ${exc}`;
        else {
          // Do not test error messages
          return;
        }
      }

      if (fullmsg === undefined)
        fullmsg = `Assertion failed: expected exception ${ctor.name}, no exception thrown`;
      if (msg !== undefined)
        fullmsg += " - " + msg;

      throw new Error(fullmsg);
    };
  }

  if (typeof globalThis.assertThrowsInstanceOf === 'undefined') {
    globalThis.assertThrowsInstanceOf = function assertThrowsInstanceOf(f, ctor, msg) {
      assertThrowsInstanceOfWithMessageCheck(f, ctor, _ => true, msg);
    };
  }

  if (typeof globalThis.assertThrowsInstanceOfWithMessage === 'undefined') {
    globalThis.assertThrowsInstanceOfWithMessage = function assertThrowsInstanceOfWithMessage(f, ctor, expected, msg) {
      assertThrowsInstanceOfWithMessageCheck(f, ctor, message => message === expected, msg);
    }
  }

  if (typeof globalThis.assertThrowsInstanceOfWithMessageContains === 'undefined') {
    globalThis.assertThrowsInstanceOfWithMessageContains = function assertThrowsInstanceOfWithMessageContains(f, ctor, substr, msg) {
      assertThrowsInstanceOfWithMessageCheck(f, ctor, message => message.indexOf(substr) !== -1, msg);
    }
  }

})();
