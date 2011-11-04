/**
 * @path ch07/7.8/7.8.4/7.8.4-1gs.js
 * @description Strict Mode - OctalEscapeSequence(\0110) is forbidden in strict mode
 * @onlyStrict
 * @negative ^((?!NotEarlyError).)*$
 */
﻿"use strict";
throw NotEarlyError;
var _7_8_4_2 = '100abc\0110def';