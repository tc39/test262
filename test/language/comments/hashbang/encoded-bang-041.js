#\041
/*---
esid: pending
description: >
    Hashbang comments should not be allowed to have encoded characters \041
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
flags: [raw]
negative:
  phase: parse
  type: SyntaxError
features: [hashbang]
---*/

$DONOTEVALUATE();
