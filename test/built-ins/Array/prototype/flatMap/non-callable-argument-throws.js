// Copyright (C) 2018 Shilpi Jain. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatMap
description: >
    non callable argument should throw TypeError Exception
---*/

assert.throws(TypeError, function () {
  [].flatMap({});
}, 'non callable argument');
