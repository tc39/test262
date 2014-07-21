// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype has the property "setUTCMinutes"
description: The Date.prototype has the property "setUTCMinutes"
---*/

if(Date.prototype.hasOwnProperty("setUTCMinutes") !== true){
  $ERROR('#1: The Date.prototype has the property "setUTCMinutes"');
}
