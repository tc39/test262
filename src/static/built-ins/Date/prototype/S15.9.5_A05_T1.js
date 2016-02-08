// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype has the property "toLocaleString"
es5id: 15.9.5_A05_T1
description: The Date.prototype has the property "toLocaleString"
---*/

if(Date.prototype.hasOwnProperty("toLocaleString") !== true){
  $ERROR('#1: The Date.prototype has the property "toLocaleString"');
}
