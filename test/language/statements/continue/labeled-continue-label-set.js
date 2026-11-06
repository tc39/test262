// Copyright (C) 2026 Hanzhi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-loopcontinues
description: >
  `continue` with any label of the label set of an iteration statement
  continues that statement
info: |
  LabelledStatement : LabelIdentifier : LabelledItem

  1. Let label be the StringValue of LabelIdentifier.
  2. Let newLabelSet be the list-concatenation of labelSet and « label ».
  3. Let stmtResult be Completion(LabelledEvaluation of LabelledItem with argument newLabelSet).

  LoopContinues ( completion, labelSet )

  1. If completion is a normal completion, return true.
  2. If completion is not a continue completion, return false.
  3. If completion.[[Target]] is empty, return true.
  4. If labelSet contains completion.[[Target]], return true.
  5. Return false.
---*/

var count, i;

count = 0;
a: b: for (i = 0; i < 3; i++) {
  count++;
  continue a;
}
assert.sameValue(count, 3, "for, continue to the first label");
assert.sameValue(i, 3, "for, continue to the first label: final i");

count = 0;
a: b: for (i = 0; i < 3; i++) {
  count++;
  continue b;
}
assert.sameValue(count, 3, "for, continue to the second label");

count = 0;
a: b: c: for (i = 0; i < 3; i++) {
  count++;
  continue b;
}
assert.sameValue(count, 3, "for, continue to the middle of three labels");

count = 0;
i = 0;
a: b: while (i < 3) {
  i++;
  count++;
  continue a;
}
assert.sameValue(count, 3, "while, continue to the first label");

count = 0;
i = 0;
a: b: do {
  i++;
  count++;
  continue a;
} while (i < 3);
assert.sameValue(count, 3, "do-while, continue to the first label");

count = 0;
a: b: for (var key in { x: 0, y: 0, z: 0 }) {
  count++;
  continue a;
}
assert.sameValue(count, 3, "for-in, continue to the first label");

count = 0;
a: b: for (var value of [0, 0, 0]) {
  count++;
  continue a;
}
assert.sameValue(count, 3, "for-of, continue to the first label");
