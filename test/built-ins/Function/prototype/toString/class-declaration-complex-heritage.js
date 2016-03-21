// Copyright (C) 2016 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-bindingclassdeclarationevaluation
description: Function.prototype.toString on a class declaration (with complex heritage)
---*/

/* before */class /* a */ A /* b */ extends /* c */ function /* d */ ( /* e */ ) /* f */ { /* g */ } /* h */ { /* i */ }/* after */

assert.sameValue(A.toString(), "class /* a */ A /* b */ extends /* c */ function /* d */ ( /* e */ ) /* f */ { /* g */ } /* h */ { /* i */ }");
