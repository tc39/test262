/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*---
defines: [assertThrowsValue]
allow_unused: True
---*/

(function() {
  const undefined = void 0;

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
})();
