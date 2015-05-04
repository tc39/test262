// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Get 'length' should not be called if assignmentexpression
    evaluation and conversion to object fails
author: Nikhil Suryanarayanan
---*/

var called_len = false;
 var x = {
    valueOf: function(){return this;},
    get length() {
        called_len = true;
    }
 };

 function foo(){
    return;
 }

 try{foo(...x++)}catch(e){};

 if(called_len !== false)
    $ERROR('Get \'length\' hould not be called if assignmentexpression evaluation and conversion to object fails')
