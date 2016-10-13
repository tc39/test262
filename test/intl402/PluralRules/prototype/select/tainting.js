// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Zibi Braniecki
includes: [testIntl.js]
---*/

taintProperties(["type"]);

var pr = new Intl.PluralRules();
var time = pr.select(9);
