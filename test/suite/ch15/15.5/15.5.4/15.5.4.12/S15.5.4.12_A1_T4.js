// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.search (regexp)
description: Call search (regexp) without arguments
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString() evaluates to "" search() evaluates to search("")
if ("".search() !== 0) {
  $ERROR('#1: "".search() === 0. Actual: '+("".search()) );
}

if ("--undefined--".search() != 0) {
  $ERROR('#1: "--undefined--".search() === 0. Actual: '+("--undefined--".search()) );
}
//
//////////////////////////////////////////////////////////////////////////////
