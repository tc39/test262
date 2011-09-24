

/**
 * @path chapter07/7.6/7.6.1/7.6.1.2-1gs.js
 * @description Strict Mode - SyntaxError is thrown when FutureReservedWord 'implements' occurs in strict mode code
 * @strictOnly
 * @negative EarlyErrorRePat
 */

"use strict";
throw NotEarlyError;
var implements = 1;
