/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Stringification of Boolean/String/Number objects
esid: pending
---*/

var obj =
  {
    p: {
         toJSON: function()
         {
           return { toJSON: function() { return 17; } };
         }
       }
  };

assert.sameValue(JSON.stringify(obj), '{"p":{}}');
