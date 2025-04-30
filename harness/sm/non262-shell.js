/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*---
defines: [makeIterator, Permutations, assertThrowsValue, assertThrownErrorContains, assertThrowsInstanceOfWithMessageCheck, assertThrowsInstanceOf, assertThrowsInstanceOfWithMessage, assertThrowsInstanceOfWithMessageContains, assertDeepEq]
allow_unused: True
---*/

(function() {
  const undefined = void 0;

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
