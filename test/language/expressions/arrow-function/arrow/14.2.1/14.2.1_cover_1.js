// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    CoverParanthesisedExpressionAndArrowParameterList is still valid
    without arrow function
author: Nikhil Suryanrayanan
---*/

if((1,2) !== 2)
    $ERROR('CoverParanthesisedExpressionAndArrowParameterList should be allowed');
