// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise prototype object is an ordinary object
author: Sam Mikes
description: Promise prototype does not have [[PromiseState]] internal slot
negative: TypeError
---*/

Promise.call(Promise.prototype, function () {});
