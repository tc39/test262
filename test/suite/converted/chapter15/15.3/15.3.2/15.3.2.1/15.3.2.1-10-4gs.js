

/**
 * @path chapter15/15.3/15.3.2/15.3.2.1/15.3.2.1-10-4gs.js
 * @description Strict Mode - SyntaxError is thrown if a function using the Function constructor has two identical parameters in (global) strict mode
 * @onlyStrict
 * @negative NotEarlyErrorString
 */

"use strict";
throw NotEarlyError;
var _15_3_2_1_10_4_fun = new Function('param_1', 'param_2', 'param_1', '"use strict"; return 0;');
