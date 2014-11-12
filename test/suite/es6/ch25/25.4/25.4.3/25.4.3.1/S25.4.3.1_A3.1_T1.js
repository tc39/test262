// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise throws TypeError when executor is not callable
author: Sam Mikes
description: new Promise("not callable") throws TypeError
negative: TypeError
---*/

new Promise("not callable");
