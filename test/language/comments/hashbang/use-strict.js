#!"use strict"
/*---
esid: pending
description: >
    Hashbang comments should not be interpreted and should not generate DirectivePrologues.
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
flags: [raw]
features: [hashbang]
---*/

with ({}) {}
