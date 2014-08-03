// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-538-5
description: >
    ES5 Attributes - Updating a named accessor property 'P' whose
    [[Configurable]] attribute is true to a data property is
    successful, 'A' is an Array object (8.12.9 - step 9.c.i)
includes: [propertyHelper.js]
---*/

var obj = [];

obj.verifySetFunc = "data";
var getFunc = function () {
    return obj.verifySetFunc;
};

var setFunc = function (value) {
    obj.verifySetFunc = value;
};

Object.defineProperty(obj, "prop", {
    get: getFunc,
    set: setFunc,
    enumerable: true,
    configurable: true
});
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

Object.defineProperty(obj, "prop", {
    value: 1001
});
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop"); 

if (!desc1.hasOwnProperty("get") ) {
    $ERROR('Expected desc1.hasOwnProperty("get") to be true, actually ' + desc1.hasOwnProperty("get"));
}

if (!desc2.hasOwnProperty("value") ) {
    $ERROR('Expected desc2.hasOwnProperty("value") to be true, actually ' + desc2.hasOwnProperty("value"));
}

if (typeof desc2.get !== "undefined" ) {
    $ERROR('Expected typeof desc2.get === "undefined" , actually ' + typeof desc2.get);
}

if (typeof desc2.set !== "undefined" ) {
    $ERROR('Expected typeof desc2.set === "undefined" , actually ' + typeof desc2.set);
}


dataPropertyAttributesAreCorrect(obj, "prop", 1001, false, true, true);


