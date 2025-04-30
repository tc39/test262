/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Valgrind errors in jsemit.cpp
esid: pending
---*/

assert.throws(SyntaxError, function() {
  eval('function(){if(t)');
});
