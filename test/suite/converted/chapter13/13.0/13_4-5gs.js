

/**
 * @path chapter13/13.0/13_4-5gs.js
 * @description Strict Mode - SourceElements is evaluated as strict mode code when a FunctionDeclaration is contained in strict mode code
 * @strict_only
 * @negative EarlyErrorRePat
 */


throw NotEarlyError;
function _13_0_4_5_fun() { eval = 42; };
