// Copyright (C) 2019 Mike Pennisi.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    A function used in the process of asserting correctness of TypedArray objects.

    $262.detachArrayBuffer is defined by a host.
defines: [modifiedDetachArrayBuffer]
---*/

function modifiedDetachArrayBuffer(buffer) {
  return $DETACHBUFFER(buffer);
}
