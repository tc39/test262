// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    When String is called as a function rather than as a constructor, it
    performs a type conversion
description: Call String(string_object)
---*/

var __obj__str = "caps";

//__obj__str.prop=1;

var __str = String(__obj__str);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str !== __obj__str) {
  $ERROR('#1: __obj__str = "caps"; __str = String(__obj__str); __str === __obj__str. Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////
