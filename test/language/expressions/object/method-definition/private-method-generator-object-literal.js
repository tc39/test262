// Copyright (C) 2018 Jaideep Bhoosreddy (Bloomberg LP). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
name: Private methods in object literal
description: It's SyntaxError if private method used in Object literal
features: [class-fields-private]
esid: prod-FieldDefinition
negative:
  phase: runtime
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

var o = {
  *#m() {}
};
