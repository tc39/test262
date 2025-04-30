/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Arguments when an object's toJSON method is called
esid: pending
---*/

var obj =
  {
    p: {
         toJSON: function(key)
         {
           assert.sameValue(arguments.length, 1);
           assert.sameValue(key, "p");
           return 17;
         }
       }
  };

assert.sameValue(JSON.stringify(obj), '{"p":17}');
