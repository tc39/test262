

/**
 * @path chapter15/15.3/15.3.5/15.3.5-2gs.js
 * @description StrictMode - error is thrown when reading the 'caller' property of a function object
 * @strict_only
 * @negative EarlyErrorRePat
 */


function _15_3_5_1_gs() {}
_15_3_5_1_gs.caller;
throw NotEarlyError;
