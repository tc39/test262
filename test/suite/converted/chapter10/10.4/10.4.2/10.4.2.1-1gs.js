

/**
 * @path chapter10/10.4/10.4.2/10.4.2.1-1gs.js
 * @description Strict Mode - eval code cannot instantiate variable in the variable environment of the calling context that invoked the eval if the code of the calling context is strict code
 * @strict_only
 * @negative EarlyErrorRePat
 */


eval("var x = 7;");
x = 9;
throw NotEarlyError;
