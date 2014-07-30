// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check Do-While Statement for automatic semicolon insertion
description: Execute do { \n ; \n }while(false) true
---*/

//CHECK#1
do {
  ;
} while (false) true
