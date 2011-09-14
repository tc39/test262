

/**
 * @path chapter13/13.0/13_4-17gs.js
 * @description Strict Mode - SourceElements is evaluated as strict mode code when a Function constructor is contained in strict mode code
 * @strict_only
 * @negative NotEarlyErrorString
 */


var _13_4_17_fun = new Function('eval = 42;');
throw NotEarlyError;
