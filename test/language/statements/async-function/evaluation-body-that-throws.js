// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
es7id: pending
description: >
  Errors thrown from the async function body reject the returned promise
---*/

async function foo() {
  throw 1;
}

foo().then(function () {
  $ERROR("Should not be called");
}, function (e) {
  assert.sameValue(e, 1);
  $DONE();
});

