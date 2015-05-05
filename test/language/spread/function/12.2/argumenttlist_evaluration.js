// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: spread element position in function
author: Nikhil Suryanarayanan
---*/

//function def
 function foo(){return [];}

 //#function call site
 foo(...foo());
 foo(...foo(), 1);
 foo(...[...foo(...[])]);
