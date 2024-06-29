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
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 983344;
var summary =
  "Uint8Array.prototype.set issues when this array changes during setting";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var ab = new ArrayBuffer(200);
var a = new Uint8Array(ab);
var a_2 = new Uint8Array(10);

var src = [ 10, 20, 30, 40,
            10, 20, 30, 40,
            10, 20, 30, 40,
            10, 20, 30, 40,
            10, 20, 30, 40,
            10, 20, 30, 40,
            10, 20, 30, 40,
            10, 20, 30, 40,
            10, 20, 30, 40,
            10, 20, 30, 40,
            ];
Object.defineProperty(src, 4, {
  get: function () {
    $DETACHBUFFER(ab);
    gc();
    return 200;
  }
});

a.set(src);

/******************************************************************************/

print("Tests complete");
