

/**
 * @path chapter12/12.10/12.10.1/12.10.1-11gs.js
 * @description Strict Mode - SyntaxError is thrown when using with statement
 * @onlyStrict
 * @negative ^((?!NotEarlyError).)*$
 */

"use strict";
throw NotEarlyError;
with ({}) { }
