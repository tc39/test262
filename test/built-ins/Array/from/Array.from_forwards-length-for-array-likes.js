// Copyright (c) 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.2.1
description: >
    The Array.from() method creates a new Array instance
    from an array-like or iterable object.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
---*/
var myCollectionCalled = false;
function MyCollection(length) {
  myCollectionCalled = true;
  assert.sameValue(1, arguments.length);
  assert.sameValue(5, length);
}

Array.from.call(MyCollection, {length: 5});
assert(myCollectionCalled);
