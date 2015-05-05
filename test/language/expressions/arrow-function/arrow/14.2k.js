// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: arrow function properties
author: Nikhil Suryanrayanan
---*/

var testVector = [
    () => {},
    x => x,
    (x) => x,
    (x) => {},
    (x => x)
 ];

 for(var i = 0; i<testVector.length; i++){

     var arrowFn = testVector[i];

     if(typeof arrowFn !== "function")
        $ERROR('Arrow function typeof failed for ' + arrowFn.toString());

     if(arrowFn.__proto__ !== Function.__proto__)
        $ERROR('Arrow function __proto__ test failed for ' + arrowFn.toString());

     if(arrowFn.constructor !== Function.constructor)
        $ERROR('Constructor of arrow function is incorrect for ' + arrowFn.toString());

     if(('prototype' in arrowFn))
        $ERROR('Arrow functions is missing prototype property for ' + arrowFn.toString());

     if(arrowFn.hasOwnProperty('prototype') === true )
        $ERROR('Arrow functions is missing own property \'prototype\' for ' + arrowFn.toString());

     if(Object.getPrototypeOf(arrowFn) !== Function.prototype)
        $ERROR('Object.getPrototypeOf arrowFn failed for arrow function for ' + arrowFn.toString());
}
