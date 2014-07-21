// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Block within a "for-in" Expression is not allowed
description: Using block within "for-in" Expression
flags: [negative]
---*/

var __arr=[1,2,3];

//////////////////////////////////////////////////////////////////////////////
//CHECK#
for(x in {__arr}){
   break ;
};
//
//////////////////////////////////////////////////////////////////////////////
