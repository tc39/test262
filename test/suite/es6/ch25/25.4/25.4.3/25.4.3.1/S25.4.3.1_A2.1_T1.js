// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise throws TypeError when 'this' is not Object
author: Sam Mikes
description: Promise.call("non-object") throws TypeError
negative: TypeError
---*/

Promise.call("non-object", function () {});
