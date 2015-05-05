// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Helper methods for TypedArrays
---*/

function CreateTypedArrayTypes() {
    var typedArrays = [];
    typedArrays[0] = Int8Array;
    typedArrays[1] = Uint8Array;
    typedArrays[2] = Int16Array;
    typedArrays[3] = Uint16Array;
    typedArrays[4] = Int32Array;
    typedArrays[5] = Uint32Array;
    typedArrays[6] = Float32Array;
    typedArrays[7] = Float64Array;

    //if(getHOSTMode() > IE11STANDARDSMODE)
    typedArrays[8] = Uint8ClampedArray;

    return typedArrays;
}

function CreateTypedArrayInstances(obj) {
    var typedArrays = [];
    typedArrays[0] = new Int8Array(obj);
    typedArrays[1] = new Uint8Array(obj);
    typedArrays[2] = new Int16Array(obj);
    typedArrays[3] = new Uint16Array(obj);
    typedArrays[4] = new Int32Array(obj);
    typedArrays[5] = new Uint32Array(obj);
    typedArrays[6] = new Float32Array(obj);
    typedArrays[7] = new Float64Array(obj);

    //if(getHOSTMode() > IE11STANDARDSMODE)
    typedArrays[8] = new Uint8ClampedArray(obj);

    return typedArrays;
}

function CreateIntegerTypedArrayTypes() {
    var typedArrays = [];
    typedArrays[0] = Int8Array;
    typedArrays[1] = Uint8Array;
    typedArrays[2] = Int16Array;
    typedArrays[3] = Uint16Array;
    typedArrays[4] = Int32Array;
    typedArrays[5] = Uint32Array;

    //if(getHOSTMode() > IE11STANDARDSMODE)
    typedArrays[6] = Uint8ClampedArray;

    return typedArrays;
}

function CreateIntegerTypedArrays(obj) {
    var typedArrays = [];
    typedArrays[0] = Int8Array.from(obj);
    typedArrays[1] = Uint8Array.from(obj);
    typedArrays[2] = Int16Array.from(obj);
    typedArrays[3] = Uint16Array.from(obj);
    typedArrays[4] = Int32Array.from(obj);
    typedArrays[5] = Uint32Array.from(obj);

    //if(getHOSTMode() > IE11STANDARDSMODE)
    typedArrays[6] = Uint8ClampedArray.from(obj);

    return typedArrays;
}

function CreateTypedRedcuedSetOfArrayTypes() {
    var typedArrays = [];
    typedArrays[0] = Float64Array;

    return typedArrays;
}

function CreateTypedRedcuedSetOfArrays(obj) {
    var typedArrays = [];
    typedArrays[0] = Float64Array.from(obj);

    return typedArrays;
}

function CreateTypedArraysFrom(obj) {
    var typedArrays = [];
    typedArrays[0] = Int8Array.from(obj);
    typedArrays[1] = Uint8Array.from(obj);
    typedArrays[2] = Int16Array.from(obj);
    typedArrays[3] = Uint16Array.from(obj);
    typedArrays[4] = Int32Array.from(obj);
    typedArrays[5] = Uint32Array.from(obj);
    typedArrays[6] = Float32Array.from(obj);
    typedArrays[7] = Float64Array.from(obj);

    //if(getHOSTMode() > IE11STANDARDSMODE)
    typedArrays[8] = Uint8ClampedArray.from(obj);

    return typedArrays;
}

function CreateTypedArraysOf(obj) {
    var typedArrays = [];
    typedArrays[0] = Int8Array.of(...obj);
    typedArrays[1] = Uint8Array.of(...obj);
    typedArrays[2] = Int16Array.of(...obj);
    typedArrays[3] = Uint16Array.of(...obj);
    typedArrays[4] = Int32Array.of(...obj);
    typedArrays[5] = Uint32Array.of(...obj);
    typedArrays[6] = Float32Array.of(...obj);
    typedArrays[7] = Float64Array.of(...obj);

    //if(getHOSTMode() > IE11STANDARDSMODE)
    typedArrays[8] = Uint8ClampedArray.of(...obj);

    return typedArrays;
}

function CreateTypedArraysFromMapFn(obj, mapFn) {
    var typedArrays = [];
    typedArrays[0] = Int8Array.from(obj, mapFn);
    typedArrays[1] = Uint8Array.from(obj, mapFn);
    typedArrays[2] = Int16Array.from(obj, mapFn);
    typedArrays[3] = Uint16Array.from(obj, mapFn);
    typedArrays[4] = Int32Array.from(obj, mapFn);
    typedArrays[5] = Uint32Array.from(obj, mapFn);
    typedArrays[6] = Float32Array.from(obj, mapFn);
    typedArrays[7] = Float64Array.from(obj, mapFn);

    //if(getHOSTMode() > IE11STANDARDSMODE)
    typedArrays[8] = Uint8ClampedArray.from(obj, mapFn);

    return typedArrays;
}

function CreateTypedArraysFromThisObj(obj, mapFn, thisArg) {
    var typedArrays = [];
    typedArrays[0] = Int8Array.from(obj, mapFn, thisArg);
    typedArrays[1] = Uint8Array.from(obj, mapFn, thisArg);
    typedArrays[2] = Int16Array.from(obj, mapFn, thisArg);
    typedArrays[3] = Uint16Array.from(obj, mapFn, thisArg);
    typedArrays[4] = Int32Array.from(obj, mapFn, thisArg);
    typedArrays[5] = Uint32Array.from(obj, mapFn, thisArg);
    typedArrays[6] = Float32Array.from(obj, mapFn, thisArg);
    typedArrays[7] = Float64Array.from(obj, mapFn, thisArg);

    //if(getHOSTMode() > IE11STANDARDSMODE)
    typedArrays[8] = Uint8ClampedArray.from(obj, mapFn, thisArg);

    return typedArrays;
}

function CreatestringsOf(obj) {
    var typedArrays = [];
    typedArrays[0] = Int8Array.of.call(String, ...obj);
    typedArrays[1] = Uint8Array.of.call(String, ...obj);
    typedArrays[2] = Int16Array.of.call(String, ...obj);
    typedArrays[3] = Uint16Array.of.call(String, ...obj);
    typedArrays[4] = Int32Array.of.call(String, ...obj);
    typedArrays[5] = Uint32Array.of.call(String, ...obj);
    typedArrays[6] = Float32Array.of.call(String, ...obj);
    typedArrays[7] = Float64Array.of.call(String, ...obj);

    //if(getHOSTMode() > IE11STANDARDSMODE)
    typedArrays[8] = new Uint8ClampedArray.call(String, obj);

    return typedArrays;
}

function CreateSignedTypedArrayInstances(obj) {
    var typedArrays = [];
    typedArrays[0] = new Int8Array(obj);
    typedArrays[1] = new Int16Array(obj);
    typedArrays[2] = new Int32Array(obj);
    typedArrays[3] = new Float32Array(obj);
    typedArrays[4] = new Float64Array(obj);

    return typedArrays;
}

function CreateUnSignedTypedArrayInstances(obj) {
    var typedArrays = [];
    typedArrays[0] = new Uint8Array(obj);
    typedArrays[1] = new Uint16Array(obj);
    typedArrays[2] = new Uint32Array(obj);

    //if(getHOSTMode() > IE11STANDARDSMODE)
    typedArrays[3] = new Uint8ClampedArray(obj);

    return typedArrays;
}
