// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: // #D - GeneratorStart returns Normal Completion Generator
author: Nikhil Suryanarayanan
---*/

var evaluatedfunction = false;
var gfoo = function *() {
    evaluatedfunction = true
};
var iter = gfoo();
if(evaluatedfunction !== false)
    $ERROR('GeneratorStart should not execute the function body');
