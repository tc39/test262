// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing descriptor property of Number.isInteger
includes: [runTestCase.js]
---*/

function modifyAndVerifyDescriptors(obj, prop) {
    //checking the descriptors by modifying them
    if (Object.keys(obj).indexOf(prop) !== -1) {
        $ERROR(prop + " should not be enumerable");
    }

    obj[prop] = "";
    if (obj[prop] !== "") {
        $ERROR(prop + "should be writable");
    }

    Object.defineProperty(obj, prop, { writable: false });
    var desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (desc.writable !== false) {
        $ERROR(prop + " should be configurable");
    }
    return true;

}

function testcase() {
    try {
        var desc = Object.getOwnPropertyDescriptor(Number, "isInteger");
        if (desc.configurable === true && desc.writable === true && desc.enumerable === false) {
            return modifyAndVerifyDescriptors(Number, "isInteger");
        }
        $ERROR("Incorrect Descriptor Values");
    }
    catch (e) {
        $ERROR(e.message);
        return false;
    }
}
runTestCase(testcase);
