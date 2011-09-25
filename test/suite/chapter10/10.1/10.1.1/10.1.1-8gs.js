

/**
 * @path chapter10/10.1/10.1.1/10.1.1-8gs.js
 * @description Strict Mode - Use Strict Directive Prologue is ''use strict';' which appears twice in the code
 * @onlyStrict
 * @negative EarlyErrorRePat
 */

"use strict";
"use strict";
throw NotEarlyError;
var public = 1;
