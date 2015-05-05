// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: String.raw(template,...substitutions) inserts empty strings when we don't have enough substitutions
---*/

var raw = { 'length': 2, 0: 'expected1', 1: 'expected2' };
var template = { 'raw': raw };
var str = String.raw(template);

if (str !== 'expected1expected2') {
    $ERROR("str !== 'expected1expected2'");
}

var raw = { 'length': 3, 0: 'expected1', 1: 'expected2', 2: 'expected3' };
var template = { 'raw': raw };
var str = String.raw(template);

if (str !== 'expected1expected2expected3') {
    $ERROR("str !== 'expected1expected2expected3'");
}

var raw = { 'length': 3, 0: 'expected1', 1: 'expected3', 2: 'expected4' };
var template = { 'raw': raw };
var str = String.raw(template, 'expected2');

if (str !== 'expected1expected2expected3expected4') {
    $ERROR("str !== 'expected1expected2expected3expected4'");
}
