#!"use strict"
/*---
esid: pending
description: >
    Hashbang comments should not be interpretted and should not generate DirectivePrologues.
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
---*/

with ({}) {}
