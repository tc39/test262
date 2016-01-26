// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
es7id: pending
description: Async function declaration returns a promise
---*/

async function foo () {  }

foo().then(function() {
  $DONE();
})
