

/**
 * @path chapter07/7.8/7.8.3/7.8.3-1gs.js
 * @description Strict Mode - octal extension(010) is forbidden in strict mode
 * @strictOnly
 * @negative EarlyErrorRePat
 */

"use strict";
throw NotEarlyError;
var y = 010;
