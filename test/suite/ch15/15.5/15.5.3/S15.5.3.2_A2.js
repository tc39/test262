// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.fromCharCode () returns empty string
description: Call String.fromCharCode()
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.fromCharCode() !== "") {
  $ERROR('#1: String.fromCharCode () returns empty string. Actual: '+String.fromCharCode());
}
//
//////////////////////////////////////////////////////////////////////////////
