

/**
 * @path chapter12/12.14/12.14.1/12.14.1-1gs.js
 * @description Strict Mode - SyntaxError is thrown if a TryStatement with a Catch occurs within strict code and the Identifier of the Catch production is eval
 * @strict_only
 * @negative EarlyErrorRePat
 */


throw NotEarlyError;
try { } catch (eval) { }
