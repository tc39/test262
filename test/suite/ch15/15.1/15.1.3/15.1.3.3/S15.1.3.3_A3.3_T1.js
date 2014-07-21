// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: unescapedURISet containing "#"
description: encodeURI("#") === "#"
---*/

if (encodeURI("#") !== "#") {
  $ERROR('#1: unescapedURISet containing "#"');
}
