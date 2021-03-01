// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
esid: sec-promise-anysettled
author: Sam Mikes
description: Promise.anySettled([]) never settles
flags: [async]
features: [Promise.anySettled]
---*/

var p = Promise.anySettled([]);

p.then(function() {
  $ERROR("Never settles.");
}, function() {
  $ERROR("Never settles.");
}).then($DONE, $DONE);

// use three 'then's to allow above to settle
// if this is a buggy Promise.anySettled implementation
Promise.resolve().then().then().then($DONE, $DONE);
