// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

function testTypedArrays(callback) {
    [
        Uint8Array,
        Int8Array,
        Uint16Array,
        Int16Array,
        Uint32Array,
        Int32Array,
        Uint8ClampedArray,
        Float32Array,
        Float64Array
    ]
    .forEach(callback);
}

testTypedArrays.floatOnly = function (callback) {
    [Float32Array, Float64Array].forEach(callback);
};
