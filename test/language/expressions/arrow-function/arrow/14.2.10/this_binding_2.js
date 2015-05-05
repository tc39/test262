// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this binding tests
author: Nikhil Suryanarayanan
---*/

var obj = () => {return this;}

 if(obj() !== this)
    $ERROR('this should be lexical for arrow function')
