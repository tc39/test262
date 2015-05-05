// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.raw(template,...substitutions) returns empty string if template.raw.length <= 0
---*/

var template = { 'raw': { 'length': 0 } };
var str = String.raw(template);

if (str !== '') {
    $ERROR("str !== ''");
}
