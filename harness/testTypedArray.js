// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Array containing every typed array constructor.
 */
var typedArrayConstructors = [
  Float64Array,
  Float32Array,
  Int32Array,
  Int16Array,
  Int8Array,
  Uint32Array,
  Uint16Array,
  Uint8Array,
  Uint8ClampedArray
];

/**
 * The %TypedArray% intrinsic constructor function.
 */
var TypedArray = Object.getPrototypeOf(Int8Array);

/**
 * Callback for testing a typed array constructor.
 *
 * @callback typedArrayConstructorCallback
 * @param {Function} Constructor the constructor object to test with.
 */

/**
 * Calls the provided function for every typed array constructor.
 *
 * @param {typedArrayConstructorCallback} f - the function to call for each typed array constructor.
 * @param {Array} selected - An optional Array with filtered typed arrays
 */
function testWithTypedArrayConstructors(f, selected) {
  var constructors = selected || typedArrayConstructors;
  for (var i = 0; i < constructors.length; ++i) {
    var constructor = constructors[i];
    try {
      f(constructor);
    } catch (e) {
      e.message += " (Testing with " + constructor.name + ".)";
      throw e;
    }
  }
}

/**
 * Helper for conversion operations on TypedArrays, the expected values
 * properties are indexed in order to match the respective value for each
 * TypedArray constructor
 * @param  {Function} fn - the function to call for each constructor and value.
 *                         will be called with the constructor, value and
 *                         expected value.
 */
function testTypedArrayConversions(fn) {
  var values = [
    127,         // 2 ** 7 - 1
    128,         // 2 ** 7
    32767,       // 2 ** 15 - 1
    32768,       // 2 ** 15
    2147483647,  // 2 ** 31 - 1
    2147483648,  // 2 ** 31
    255,         // 2 ** 8 - 1
    256,         // 2 ** 8
    65535,       // 2 ** 16 - 1
    65536,       // 2 ** 16
    4294967295,  // 2 ** 32 - 1
    4294967296,  // 2 ** 32
    1.1,
    0.1,
    undefined,
    -1,
    -0,
    -0.1,
    -1.1,
    NaN,
    -127,        // - ( 2 ** 7 - 1 )
    -128,        // - ( 2 ** 7 )
    -32767,      // - ( 2 ** 15 - 1 )
    -32768,      // - ( 2 ** 15 )
    -2147483647, // - ( 2 ** 31 - 1 )
    -2147483648, // - ( 2 ** 31 )
    -255,        // - ( 2 ** 8 - 1 )
    -256,        // - ( 2 ** 8 )
    -65535,      // - ( 2 ** 16 - 1 )
    -65536,      // - ( 2 ** 16 )
    -4294967295, // - ( 2 ** 32 - 1 )
    -4294967296, // - ( 2 ** 32 )
  ];

  var expected = {
    Int8Array: [
      127,  // 127
      -128, // 128
      -1,   // 32767
      0,    // 32768
      -1,   // 2147483647
      0,    // 2147483648
      -1,   // 255
      0,    // 256
      -1,   // 65535
      0,    // 65536
      -1,   // 4294967295
      0,    // 4294967296
      1,    // 1.1
      0,    // 0.1
      0,    // undefined
      -1,   // -1
      0,    // -0
      0,    // -0.1
      -1,   // -1.1
      0,    // NaN
      -127, // -127
      -128, // -128
      1,    // -32767
      0,    // -32768
      1,    // -2147483647
      0,    // -2147483648
      1,    // -255
      0,    // -256
      1,    // -65535
      0,    // -65536
      1,    // -4294967295
      0,    // -4294967296
    ],
    Uint8Array: [
      127, // 127
      128, // 128
      255, // 32767
      0,   // 32768
      255, // 2147483647
      0,   // 2147483648
      255, // 255
      0,   // 256
      255, // 65535
      0,   // 65536
      255, // 4294967295
      0,   // 4294967296
      1,   // 1.1
      0,   // 0.1
      0,   // undefined
      255, // -1
      0,   // -0
      0,   // -0.1
      255, // -1.1
      0,   // NaN
      129, // -127
      128, // -128
      1,   // -32767
      0,   // -32768
      1,   // -2147483647
      0,   // -2147483648
      1,   // -255
      0,   // -256
      1,   // -65535
      0,   // -65536
      1,   // -4294967295
      0,   // -4294967296
    ],
    Uint8ClampedArray: [
      127, // 127
      128, // 128
      255, // 32767
      255, // 32768
      255, // 2147483647
      255, // 2147483648
      255, // 255
      255, // 256
      255, // 65535
      255, // 65536
      255, // 4294967295
      255, // 4294967296
      1,   // 1.11,
      0,   // 0.1
      0,   // undefined
      0,   // -1
      0,   // -0
      0,   // -0.1
      0,   // -1.1
      0,   // NaN
      0,   // -127
      0,   // -128
      0,   // -32767
      0,   // -32768
      0,   // -2147483647
      0,   // -2147483648
      0,   // -255
      0,   // -256
      0,   // -65535
      0,   // -65536
      0,   // -4294967295
      0,   // -4294967296
    ],
    Int16Array: [
      127,    // 127
      128,    // 128
      32767,  // 32767
      -32768, // 32768
      -1,     // 2147483647
      0,      // 2147483648
      255,    // 255
      256,    // 256
      -1,     // 65535
      0,      // 65536
      -1,     // 4294967295
      0,      // 4294967296
      1,      // 1.1
      0,      // 0.1
      0,      // undefined
      -1,     // -1
      0,      // -0
      0,      // -0.1
      -1,     // -1.1
      0,      // NaN
      -127,   // -127
      -128,   // -128
      -32767, // -32767
      -32768, // -32768
      1,      // -2147483647
      0,      // -2147483648
      -255,   // -255
      -256,   // -256
      1,      // -65535
      0,      // -65536
      1,      // -4294967295
      0,      // -4294967296
    ],
    Uint16Array: [
      127,   // 127
      128,   // 128
      32767, // 32767
      32768, // 32768
      65535, // 2147483647
      0,     // 2147483648
      255,   // 255
      256,   // 256
      65535, // 65535
      0,     // 65536
      65535, // 4294967295
      0,     // 4294967296
      1,     // 1.1
      0,     // 0.1
      0,     // undefined
      65535, // -1
      0,     // -0
      0,     // -0.1
      65535, // -1.1
      0,     // NaN
      65409, // -127
      65408, // -128
      32769, // -32767
      32768, // -32768
      1,     // -2147483647
      0,     // -2147483648
      65281, // -255
      65280, // -256
      1,     // -65535
      0,     // -65536
      1,     // -4294967295
      0,     // -4294967296
    ],
    Int32Array: [
      127,         // 127
      128,         // 128
      32767,       // 32767
      32768,       // 32768
      2147483647,  // 2147483647
      -2147483648, // 2147483648
      255,         // 255
      256,         // 256
      65535,       // 65535
      65536,       // 65536
      -1,          // 4294967295
      0,           // 4294967296
      1,           // 1.1
      0,           // 0.1
      0,           // undefined
      -1,          // -1
      0,           // -0
      0,           // -0.1
      -1,          // -1.1
      0,           // NaN
      -127,        // -127
      -128,        // -128
      -32767,      // -32767
      -32768,      // -32768
      -2147483647, // -2147483647
      -2147483648, // -2147483648
      -255,        // -255
      -256,        // -256
      -65535,      // -65535
      -65536,      // -65536
      1,           // -4294967295
      0,           // -4294967296
    ],
    Uint32Array: [
      127,        // 127
      128,        // 128
      32767,      // 32767
      32768,      // 32768
      2147483647, // 2147483647
      2147483648, // 2147483648
      255,        // 255
      256,        // 256
      65535,      // 65535
      65536,      // 65536
      4294967295, // 4294967295
      0,          // 4294967296
      1,          // 1.1
      0,          // 0.1
      0,          // undefined
      4294967295, // -1
      0,          // -0
      0,          // -0.1
      4294967295, // -1.1
      0,          // NaN
      4294967169, // -127
      4294967168, // -128
      4294934529, // -32767
      4294934528, // -32768
      2147483649, // -2147483647
      2147483648, // -2147483648
      4294967041, // -255
      4294967040, // -256
      4294901761, // -65535
      4294901760, // -65536
      1,          // -4294967295
      0,          // -4294967296
    ],
    Float32Array: [
      127,                  // 127
      128,                  // 128
      32767,                // 32767
      32768,                // 32768
      2147483648,           // 2147483647
      2147483648,           // 2147483648
      255,                  // 255
      256,                  // 256
      65535,                // 65535
      65536,                // 65536
      4294967296,           // 4294967295
      4294967296,           // 4294967296
      1.100000023841858,    // 1.1
      0.10000000149011612,  // 0.1
      NaN,                  // undefined
      -1,                   // -1
      -0,                   // -0
      -0.10000000149011612, // -0.1
      -1.100000023841858,   // -1.1
      NaN,                  // NaN
      -127,                 // -127
      -128,                 // -128
      -32767,               // -32767
      -32768,               // -32768
      -2147483648,          // -2147483647
      -2147483648,          // -2147483648
      -255,                 // -255
      -256,                 // -256
      -65535,               // -65535
      -65536,               // -65536
      -4294967296,          // -4294967295
      -4294967296,          // -4294967296
    ],
    Float64Array: [
      127,         // 127
      128,         // 128
      32767,       // 32767
      32768,       // 32768
      2147483647,  // 2147483647
      2147483648,  // 2147483648
      255,         // 255
      256,         // 256
      65535,       // 65535
      65536,       // 65536
      4294967295,  // 4294967295
      4294967296,  // 4294967296
      1.1,         // 1.1
      0.1,         // 0.1
      NaN,         // undefined
      -1,          // -1
      -0,          // -0
      -0.1,        // -0.1
      -1.1,        // -1.1
      NaN,         // NaN
      -127,        // -127
      -128,        // -128
      -32767,      // -32767
      -32768,      // -32768
      -2147483647, // -2147483647
      -2147483648, // -2147483648
      -255,        // -255
      -256,        // -256
      -65535,      // -65535
      -65536,      // -65536
      -4294967295, // -4294967295
      -4294967296, // -4294967296
    ]
  };

  testWithTypedArrayConstructors(function(TA) {
    return values.forEach(function(value, index) {
      fn(TA, value, expected[TA.name][index]);
    });
  });
}
