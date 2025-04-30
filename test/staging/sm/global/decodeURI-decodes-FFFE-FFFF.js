/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
description: |
  decodeURI{,Component} should return the specified character for '%EF%BF%BE' and '%EF%BF%BF', not return U+FFFD
esid: pending
---*/

assert.sameValue(decodeURI("%EF%BF%BE"), "\uFFFE");
assert.sameValue(decodeURI("%EF%BF%BF"), "\uFFFF");
assert.sameValue(decodeURIComponent("%EF%BF%BE"), "\uFFFE");
assert.sameValue(decodeURIComponent("%EF%BF%BF"), "\uFFFF");
