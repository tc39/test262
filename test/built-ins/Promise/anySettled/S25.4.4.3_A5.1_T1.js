// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
es6id: S25.4.4.3_A5.1_T1
author: Sam Mikes
description: Promise.anySettled([]) never settles
flags: [async]
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
