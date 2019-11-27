// Copyright (C) 2019 Sergey Rubanov. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Promise.any([]) rejects immediately
esid: sec-promise.any
flags: [async]
includes: [promiseHelper.js]
features: [Promise.any]
---*/

Promise.any([])
  .then(function() {
    $DONE('The promise should not be fulfilled.');
  }, $DONE);
