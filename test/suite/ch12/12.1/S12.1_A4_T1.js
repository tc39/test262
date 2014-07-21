// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production Block can't be inside of expression
description: Checking if execution of "y={__func}()" fails
flags: [negative]
---*/

function __func(){};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
y={__func}();
//
//////////////////////////////////////////////////////////////////////////////
