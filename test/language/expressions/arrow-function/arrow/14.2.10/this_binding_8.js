// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: this binding tests
author: Nikhil Suryanarayanan
---*/

function foo(){
   return () => {
    return () => this;
   }
 }

 if(foo()()() !== this)
     $ERROR('This binding initialization was incorrect for arrow capturing this from closure');
