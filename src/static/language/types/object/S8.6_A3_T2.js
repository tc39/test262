// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Do not crash with pefixincrement custom property
es5id: 8.6_A3_T2
description: Try to implement pefixincrement for not declared custom property
---*/

var __map={};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!isNaN(++__map.foo)) {
  $ERROR('#1:  var __map={}; __map.foo++; __map.foo === Not-a-Number. Actual: ' + (__map.foo));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!("foo" in __map)) {
  $ERROR('#2: var __map={}; "foo" in __map');
}
//
//////////////////////////////////////////////////////////////////////////////
