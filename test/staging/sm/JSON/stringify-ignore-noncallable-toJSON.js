/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  If the toJSON property isn't callable, don't try to call it
esid: pending
---*/

var obj =
  {
    p: { toJSON: null },
    m: { toJSON: {} }
  };

assert.sameValue(JSON.stringify(obj), '{"p":{"toJSON":null},"m":{"toJSON":{}}}');
