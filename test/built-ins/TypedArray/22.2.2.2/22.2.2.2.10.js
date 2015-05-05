// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Source object has iterator
flags: [negative]
includes: [TypedArrayHelper.js]
---*/

function CreateTypedArraysOfWithString(obj) {
    var typedArrays = [];
    try {
        typedArrays[0] = Int8Array.of.call("String", ...obj);
        $ERROR("Didn't throw an expected exception");
    } catch (e) {
        if (e != "TypeError: %TypedArray%.of: 'this' is not a Function object") {
            $ERROR("" + e);
        }
    }
    try {
        typedArrays[1] = Uint8Array.of.call("String", ...obj);
        $ERROR("Didn't throw an expected exception");
    } catch (e) {
        if (e != "TypeError: %TypedArray%.of: 'this' is not a Function object") {
            $ERROR("" + e);
        }
    }
    try {
        typedArrays[2] = Int16Array.of.call("String", ...obj);
        $ERROR("Didn't throw an expected exception");
    } catch (e) {
        if (e != "TypeError: %TypedArray%.of: 'this' is not a Function object") {
            $ERROR("" + e);
        }
    }
    try {
        typedArrays[3] = Uint16Array.of.call("String", ...obj);
        $ERROR("Didn't throw an expected exception");
    } catch (e) {
        if (e != "TypeError: %TypedArray%.of: 'this' is not a Function object") {
            $ERROR("" + e);
        }
    }
    try {
        typedArrays[4] = Int32Array.of.call("String", ...obj);
        $ERROR("Didn't throw an expected exception");
    } catch (e) {
        if (e != "TypeError: %TypedArray%.of: 'this' is not a Function object") {
            $ERROR("" + e);
        }
    }
    try {
        typedArrays[5] = Uint32Array.of.call("String", ...obj);
        $ERROR("Didn't throw an expected exception");
    } catch (e) {
        if (e != "TypeError: %TypedArray%.of: 'this' is not a Function object") {
            $ERROR("" + e);
        }
    }
    try {
        typedArrays[6] = Float32Array.of.call("String", ...obj);
        $ERROR("Didn't throw an expected exception");
    } catch (e) {
        if (e != "TypeError: %TypedArray%.of: 'this' is not a Function object") {
            $ERROR("" + e);
        }
    }
    try
    {
        typedArrays[7] = Float64Array.of.call("String", ...obj);
        $ERROR("Didn't throw an expected exception");
    } catch (e) {
        if (e != "TypeError: %TypedArray%.of: 'this' is not a Function object") {
            $ERROR("" + e);
        }
    }

    try {
        typedArrays[8] = Uint8ClampedArray.of.call("String", ...obj);
        $ERROR("Didn't throw an expected exception");
    } catch (e) {
        if (e != "TypeError: %TypedArray%.of: 'this' is not a Function object") {
            $ERROR("" + e);
        }
    }

    return typedArrays;
}

var array = [2, 4, 8];
var typedArrays = CreateTypedArraysOfWithString(array);
