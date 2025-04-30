/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
description: |
  Function.prototype.caller should throw a TypeError for strict-mode functions
esid: pending
---*/

function bar() { "use strict"; }
assert.throws(TypeError, function barCaller() { bar.caller; });

function baz() { "use strict"; return 17; }
assert.throws(TypeError, function bazCaller() { baz.caller; });
