// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date property "parse" has { DontEnum } attributes
esid: sec-date.parse
description: Checking absence of ReadOnly attribute
includes: [propertyHelper.js]
---*/

verifyPrimordialProperty(Date, "parse", {
  writable: true,
});
