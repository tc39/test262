// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getfloat32
es6id: 24.2.4.5
description: >
  Return NaN values
info: |
  24.2.4.5 DataView.prototype.getFloat32 ( byteOffset [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? GetViewValue(v, byteOffset, littleEndian, "Float32").

  24.2.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

  ...
  14. Let bufferIndex be getIndex + viewOffset.
  15. Return GetValueFromBuffer(buffer, bufferIndex, type, isLittleEndian).
  ...

  24.1.1.5 GetValueFromBuffer ( arrayBuffer, byteIndex, type [ , isLittleEndian
  ] )

  ...
  7. If isLittleEndian is not present, set isLittleEndian to either true or
  false. The choice is implementation dependent and should be the alternative
  that is most efficient for the implementation. An implementation must use the
  same value each time this step is executed and the same value must be used for
  the corresponding step in the SetValueInBuffer abstract operation.
  8. If isLittleEndian is false, reverse the order of the elements of rawValue.
  ...
features: [DataView.prototype.setFloat32]
---*/

var buffer = new ArrayBuffer(4);
var sample = new DataView(buffer, 0);

sample.setFloat32(0, NaN);

assert.sameValue(sample.getFloat32(0), NaN);
assert.sameValue(sample.getFloat32(0, false), NaN);
