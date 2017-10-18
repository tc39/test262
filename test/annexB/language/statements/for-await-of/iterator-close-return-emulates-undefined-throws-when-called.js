// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-getiterator
description: >
    `GetIterator(obj, ~async~)` must attempt to call `obj[@@asyncIterator]` when
    that value is an object with an [[IsHTMLDDA]] internal slot, not act as if
    the value were `undefined`.
features: [async-iteration, uncallableAndIsHTMLDDA]
flags: [async]
---*/

async function f() {
  var fakeIter = {
    [Symbol.asyncIterator]: $262.uncallableAndIsHTMLDDA(),
    get [Symbol.iterator]() {
      throw new Test262Error("shouldn't touch Symbol.iterator");
    },
  };

  for await (var x of fakeIter)
    return "for-await-of body shouldn't be reached";

  return "should have failed earlier";
}

f().then($DONE,
         function (e) {
           assert.sameValue(e.constructor, TypeError,
                            "expected TypeError from calling " +
                            "uncallableAndIsHTMLDDA() value: " + e);
         })
   .then($DONE, $DONE);
