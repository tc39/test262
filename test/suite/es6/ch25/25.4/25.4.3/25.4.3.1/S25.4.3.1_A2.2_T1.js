// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise throws TypeError when 'this' is constructed but unsettled promise
author: Sam Mikes
description: Promise.call(new Promise()) throws TypeError
---*/

var p = new Promise(function() {});

assert.throws(TypeError, function () {
    Promise.call(p, function () {});
});
