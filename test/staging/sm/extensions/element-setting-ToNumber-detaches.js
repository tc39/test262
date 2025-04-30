/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - onlyStrict
description: |
  Don't assert assigning into memory detached while converting the value to assign into a number
esid: pending
---*/
"use strict"; // make test fail when limitation below is fixed

// Technically per current spec the element-sets should throw in strict mode,
// but we just silently do nothing for now, somewhat due to limitations of our
// internal MOP (which can't easily say "try this special behavior, else fall
// back on normal logic"), somewhat because it's consistent with current
// behavior (as of this test's addition) for out-of-bounds sets.

var ab = new ArrayBuffer(64);
var ta = new Uint32Array(ab);
ta[4] = { valueOf() { $262.detachArrayBuffer(ab); return 5; } };
