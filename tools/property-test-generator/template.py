# Copyright (C) 2025 André Bargull. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

# Template types defined in ECMA-262.

# https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard
NativeErrors = {
    "EvalError": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "EvalError"),
        "message": ("string", ""),
        "name": ("string", "EvalError"),
    },
    "RangeError": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "RangeError"),
        "message": ("string", ""),
        "name": ("string", "RangeError"),
    },
    "ReferenceError": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "ReferenceError"),
        "message": ("string", ""),
        "name": ("string", "ReferenceError"),
    },
    "SyntaxError": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "SyntaxError"),
        "message": ("string", ""),
        "name": ("string", "SyntaxError"),
    },
    "TypeError": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "TypeError"),
        "message": ("string", ""),
        "name": ("string", "TypeError"),
    },
    "URIError": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "URIError"),
        "message": ("string", ""),
        "name": ("string", "URIError"),
    },
}

# https://tc39.es/ecma262/#table-the-typedarray-constructors
TypedArrayConstructors = {
    "Int8Array": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "Int8Array"),
        "BYTES_PER_ELEMENT": ("number", "1"),
    },
    "Uint8Array": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "Uint8Array"),
        "BYTES_PER_ELEMENT": ("number", "1"),
    },
    "Uint8ClampedArray": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "Uint8ClampedArray"),
        "BYTES_PER_ELEMENT": ("number", "1"),
    },
    "Int16Array": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "Int16Array"),
        "BYTES_PER_ELEMENT": ("number", "2"),
    },
    "Uint16Array": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "Uint16Array"),
        "BYTES_PER_ELEMENT": ("number", "2"),
    },
    "Int32Array": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "Int32Array"),
        "BYTES_PER_ELEMENT": ("number", "4"),
    },
    "Uint32Array": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "Uint32Array"),
        "BYTES_PER_ELEMENT": ("number", "4"),
    },
    "BigInt64Array": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "BigInt64Array"),
        "BYTES_PER_ELEMENT": ("number", "8"),
    },
    "BigUint64Array": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "BigUint64Array"),
        "BYTES_PER_ELEMENT": ("number", "8"),
    },
    "Float16Array": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "Float16Array"),
        "BYTES_PER_ELEMENT": ("number", "2"),
    },
    "Float32Array": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "Float32Array"),
        "BYTES_PER_ELEMENT": ("number", "4"),
    },
    "Float64Array": {
        "prototype": ("prototype", None),
        "constructor": ("intrinsic", "Float64Array"),
        "BYTES_PER_ELEMENT": ("number", "8"),
    },
}
