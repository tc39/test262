// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.prototype.then is a function of two arguments
author: Sam Mikes
description: Promise.prototype.then is a function of two arguments
---*/

var p = new Promise(function () {});

if (!(p.then instanceof Function)) {
    $ERROR("Expected p.then to be a function");
}

if (p.then.length !== 2) {
    $ERROR("Expected p.then to be a function of two arguments");
}


