// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.raw(template,...substitutions) returns template.raw[0] if template.raw.length === 1
---*/

var raw = { 'length': 1, 0: 'expected', 1: 'unexpected' };
var template = { 'raw': raw };
var str = String.raw(template, 'unexpected');

if (str !== 'expected') {
    $ERROR("str !== 'expected'");
}
