// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.anySettled is callable
esid: sec-promise-anysettled
author: Sam Mikes
description: Promise.anySettled is callable
features: [Promise.anySettled]
---*/

if (typeof Promise.anySettled !== "function") {
  $ERROR("Expected Promise.anySettled to be a function, actually " + typeof Promise.anySettled);
}
