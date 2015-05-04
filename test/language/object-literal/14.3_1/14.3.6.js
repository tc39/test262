// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[MethodDefinition]] Try deleting the method definition"
---*/

var a = 10;
var obj = {
    b() { return this.a; },
    a
}

a = 20;
if (obj.b() !== 10) {
    $ERROR("Got a wrong value for the property a. Actual : " + obj.b() + ". Expected : 10");
}

obj.a = 30;
a = 40;
if (obj.b() !== 30) {
    $ERROR("Got a wrong value for the property a. Actual : " + obj.b() + ". Expected : 30");
}

var objB = obj.b;
delete obj.b;
obj.a = 50;
if (objB() !== 40) {
    $ERROR("Got a wrong value for the property a. Actual : " + objB() + ". Expected : 30");
}
