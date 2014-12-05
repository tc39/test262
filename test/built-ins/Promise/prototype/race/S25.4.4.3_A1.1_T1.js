// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.race is callable
author: Sam Mikes
description: Promise.race is callable
---*/

if (typeof Promise.race !== "function") {
    $ERROR("Expected Promise.race to be a function, actually " + typeof Promise.race);
}

if (Promise.race.length !== 1) {
    $ERROR("Expected Promise.race to be a function of 1 argument.");
}
