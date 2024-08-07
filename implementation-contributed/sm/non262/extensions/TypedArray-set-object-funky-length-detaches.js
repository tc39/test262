// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- detachArrayBuffer.js
- non262-extensions-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var gTestfile = "set-object-funky-length-detaches.js";
//-----------------------------------------------------------------------------
var BUGNUMBER = 991981;
var summary =
  "%TypedArray%.prototype.set(object w/funky length property, offset) " +
  "shouldn't misbehave if the funky length property detaches this typed " +
  "array's buffer";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var ctors = [Int8Array, Uint8Array, Uint8ClampedArray,
             Int16Array, Uint16Array,
             Int32Array, Uint32Array,
             Float32Array, Float64Array];
ctors.forEach(function(TypedArray) {
    var buf = new ArrayBuffer(512 * 1024);
    var ta = new TypedArray(buf);

    var arraylike =
      {
        0: 17,
        1: 42,
        2: 3,
        3: 99,
        4: 37,
        5: 9,
        6: 72,
        7: 31,
        8: 22,
        9: 0,
        get length()
        {
          $DETACHBUFFER(buf);
          return 10;
        }
      };

      ta.set(arraylike, 0x1234);
});

/******************************************************************************/

print("Tests complete");
