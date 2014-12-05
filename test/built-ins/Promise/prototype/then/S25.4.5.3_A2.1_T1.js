// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.prototype.then expects a constructor conforming to Promise as 'this'
author: Sam Mikes
description: Promise.prototype.then throw if 'this' is non-Object
negative: TypeError
---*/

var p = new Promise(function () {});

p.then.call(3, function () {}, function () {});

