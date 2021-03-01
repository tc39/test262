// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.anySettled returns a new promise
esid: sec-promise-anysettled
author: Sam Mikes
description: Promise.anySettled returns a new promise
features: [Promise.anySettled]
---*/

var p = Promise.anySettled([]);

if (!(p instanceof Promise)) {
  $ERROR("Expected Promise.anySettled([]) to return a promise.");
}
