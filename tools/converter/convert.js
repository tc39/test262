// Copyright 2011 by Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


(function(global) {
   "use strict";

   var t262 = global.t262;

   var platform = t262.platform;
   var toRelPathStr = platform.toRelPathStr;
   var toPathStr    = platform.toPathStr;
   var toRelPath    = platform.toRelPath;
   var toPath       = platform.toPath;

   var utils = t262.utils;
   var forEach = utils.forEach;
   var map     = utils.map;
   var filter  = utils.filter;
   var keys    = utils.keys;
   var trim    = utils.trim;
   var regExp  = utils.regExp;

   var CONTRIB_DIRS = [
     ['test', 'suite', 'other'],
     ['test', 'suite', 'sputnik', 'Conformance'],
     ['test', 'suite', 'ietestcenter']
   ];

   var CONVERTED_DIR = ['test', 'suite', 'converted'];

   var OUT_DIR = ['website', 'resources', 'scripts', 'testcases2'];

   var CONVERT_PATH = platform.CONVERTER_DIR.concat('convert.js');

/////////////////////////////////////////////////////////////////

   var headerPattern = /(?:(?:\/\/.*)?\s*\n)*/;
   var captureCommentPattern = /\/\*\*?((?:\s|\S)*?)\*\/\s*\n/;
   var anyPattern = /(?:\s|\S)*/;
   var blanksPattern = /(?:\s|\n)*/;

   // Should match anything
   var testEnvelopePattern =
     regExp('^(', headerPattern,
            ')(?:', captureCommentPattern,
            ')?(', anyPattern,
            ')$');

   var registerPattern =
     regExp('^(', anyPattern, '?)(',
            /ES5Harness\.registerTest\s*\(\s*\{/, anyPattern,
            /\}\s*\)/, ')',
            /\s*;?(?:\s|\n)*$/);

   // Matches a named function. Captures both the name and the body.
   var captureFuncNameBodyPattern =
     regExp(/^function\s+(\w*)\(\s*\)\s*\{/,
            '(', anyPattern, ')',
            /;?/, blanksPattern,
            /\}$/);

   var captureExprBodyPattern =
     regExp(/^return\s+/,
            '(', anyPattern, '?)',
            /;$/);

   var capturePredicatePattern =
     regExp(/^if\s+\((.*?)\)\s*\{/, blanksPattern,
            /return\s+true;?/, blanksPattern,
            /\}$/);

/////////////////////////////////////////////////////////////////

   /**
    * Strip the left margin "*"s that are found in the body of a
    * multiline doc-comment like this one.
    */
   function stripStars(text) {
     return trim(text.replace(/\s*\n\s*\*\s?/g, '\n'));
   }

   /**
    * Parses the source of a test262 test case file into a JSON
    * envelope record.
    *
    * <p>The input can be in old sputnik or ietestcenter style, or in
    * the canonical test262 style. In all cases, we have an optional
    * header, an optional "/*" comment possibly containing properties
    * of the form<pre>
    *   @propName: propValue;
    * </pre>which populate the test record. This is followed by the
    * rest of the text, which is the test itself. In the case of an
    * ietestcenter style test, this is followed by a call to
    * <code>ES5Harness\.registerTest</code> to register a test record.
    */
   function parseTestEnvelope(src, name) {
     var envelope = { testRecord: {} };
     var envelopeMatch = testEnvelopePattern.exec(src);
     if (!envelopeMatch) {
       // Can't happen?
       throw new Error('unrecognized: ' + name);
     }
     envelope.header = trim(envelopeMatch[1]);

     if (envelopeMatch[2]) {
       var propTexts = envelopeMatch[2].split(/\s*\n\s*\*\s*@/);
       envelope.comment = stripStars(propTexts.shift()), // notice side effect
       forEach(propTexts, function(propText) {
         var propName = propText.match(/^\w+/)[0];
         var propVal = propText.substring(propName.length);
         // strip optional initial colon or final semicolon.
         // The initial colon is only stripped if it comes immediately
         // after the identifier with no intervening whitespace.
         propVal = propVal.replace(/^:\s*/, '').replace(/;\s*$/, '');
         propVal = stripStars(propVal);
         if (propName in envelope.testRecord) {
           throw new Error('duplicate: ' + propName);
         }
         envelope.testRecord[propName] = propVal;
       });
     }
     envelope.rest = envelopeMatch[3]; // Do not trim

     var registerMatch = registerPattern.exec(envelope.rest);
     if (registerMatch) {
       envelope.rest = trim(registerMatch[1]);
       envelope.registerExpr = trim(registerMatch[2]);
     } else if (envelope.rest.indexOf('ES5Harness.registerTest') >= 0) {
       print(' \n--header---\n|' + envelope.header +
             '|\n--rest-----\n|' + envelope.rest +
             '|\n--harness--\n|' + envelope.registerExpr +
             '|\n-----------\n');
       throw new Error('Malformed harness? ' + name);
     }
     return envelope;
   }

   /**
    * Given a function that indicates success by returning a truthy
    * value, return the source for a Program that, when evaluated in
    * the environment the function assumes, will behave the same as
    * calling that function in that environment and asserting the
    * truthiness of the result.
    *
    * <p>Programs do not conveniently return any value, even their
    * completion value, so Programs in canonical test262 style instead
    * indicate success simply by completing normally, i.e., without
    * throwing anything. The conversion assumes a one argument
    * <code>runTestCase</code> function which calls it function
    * argument and throws an indication of test failure iff that
    * function returns a falsy argument.
    *
    * <p>Unless it specifies otherwise, the Program source may be
    * executed strict and/or non-strict, and it may be exeuted within
    * the try block of a try/catch or try/catch finally, i.e., as a
    * Block rather than as a Program.
    */
   function functionToProgramSrc(func) {
     var funcSrc = '' + func;
     var cfnbMatch = captureFuncNameBodyPattern.exec(funcSrc);
     if (!cfnbMatch) {
       throw new Error('Could not recognize: "' + funcSrc + '"');
     }
     var name = trim(cfnbMatch[1]);
     var body = trim(cfnbMatch[2]);

     // Look for special cases

     var cebMatch = captureExprBodyPattern.exec(body);
     if (cebMatch) {
       return 'assertTruthy(' + trim(cebMatch[1]) + ');';
     }

     var cpMatch = capturePredicatePattern.exec(body);
     if (cpMatch) {
       return 'assertTruthy(' + trim(cpMatch[1]) + ');';
     }

     // General case

     return funcSrc + '\n' +
       'runTestCase(' + name + ');';
   }

   /**
    * Given an ietestcenter style test, this <b>evaluates</b> the
    * registration expression in order to gather the test record.
    */
   function gatherOne(envelope, name) {
     if (envelope.testRecord) {
       var propNames = keys(envelope.testRecord);
       if (propNames.length >= 1) {
         // This need not be an error. It's just here so we notice the
         // first time it happens. This would happen if an
         // ietestcenter style test also had a comment with "@"
         // property definitions.
         throw new Error('unexpected in ' + name + ': ' + propNames);
       }
     }
     var testRecords = [];

     // Evaluating!!!!
     platform.evalExprIn(envelope.registerExpr,
                         {
                           ES5Harness: {
                             registerTest: function(testRecord) {
                               testRecords.push(testRecord);
                             }
                           }
                         },
                        'forceNonStrict');

     if (testRecords.length !== 1) {
       // We may lift this restriction in order to support test
       // generators.
       throw new Error('not singleton: ' + name);
     }
     var testRecord = testRecords[0];

     if (typeof testRecord.test === 'function') {
       testRecord.test = envelope.rest + '\n' +
         functionToProgramSrc(testRecord.test);
     }
     if ('precondition' in testRecord) {
       // Only ietestcenter tests currently have preconditions, and they
       // plan to drop them. So canonical test262 style omits
       // them.
       delete testRecord.precondition;
     }

     return testRecord;
   }

   /**
    * Normalizes the properties of testRecord to be the canonical
    * test262 style properties, that will be assumed by the new test
    * runners.
    */
   function normalizeProps(testRecord) {
     if (!('strict_only' in testRecord) && testRecord.strict === 1) {
       testRecord.strict_only = '';
       delete testRecord.strict;
     }

     if ('strict_mode_negative' in testRecord) {
       if (!('strict_only' in testRecord)) {
         testRecord.strict_only = '';
       }
       if (!'negative' in testRecord) {
         testRecord.negative = testRecord.strict_mode_negative;
         delete testRecord.strict_mode_negative;
       }
     }

     // Note that testRecord.negative is falsy whether negative is
     // absent or empty.
     if (!testRecord.negative && 'errortype' in testRecord) {
       testRecord.negative = testRecord.errortype;
       delete testRecord.errortype;
     }

     if (!testRecord.description && testRecord.assertion) {
       testRecord.description = testRecord.assertion;
       delete testRecord.assertion;
     }
     if (!testRecord.comment && testRecord.assertion) {
       testRecord.comment = testRecord.assertion;
       delete testRecord.assertion;
     }
   }
   t262.normalizeProps = normalizeProps;

   /**
    * Parses the source of a test262 test case file into a normalized
    * JSON test record.
    */
   function parseTestRecord(inBase, relPath, name) {
     var nextRelPath = relPath.concat([name]);
     var nextPath = inBase.concat(nextRelPath);

     var src = platform.getText(nextPath);
     var testRecord;
     if (!src) {
       throw new Error('no src: ' + toPathStr(nextPath));
     }
     var envelope = parseTestEnvelope(src, name);

     if (envelope.registerExpr) {
       testRecord = gatherOne(envelope, name);
     } else {
       testRecord = envelope.testRecord;
       if (!testRecord.test) {
         testRecord.test = envelope.rest;
       }
     }
     delete testRecord.id;
     delete testRecord.name;
     testRecord.path = toRelPathStr(nextRelPath);
     testRecord.header = envelope.header;
     testRecord.comment = envelope.comment;

     normalizeProps(testRecord);
     return testRecord;
   }
   t262.parseTestRecord = parseTestRecord;

   // The known ones will be rendered first, and in this order.
   var KNOWN_PROPS = ['section', 'path', 'description',
                      'strict_only', 'negative'];

   /**
    * Turns the (assumed) normalized test record into its string form
    * in canonical test262 style.
    *
    * NOTE: This is currently destructive of testRecord. Easy to fix
    * if it becomes a problem.
    */
   function formatTestRecord(testRecord) {
     var test = testRecord.test;
     delete testRecord.test;

     function addProp(pname) {
       if (pname in testRecord) {
         result += ' * @' + pname;
         if (testRecord[pname]) {
           result += ' ' + testRecord[pname].replace(/\n/g, '\n * ');
         }
         result += '\n';
         delete testRecord[pname];
       }
     }

     var result = testRecord.header + '\n\n';
     delete testRecord.header;
     result +=  '/**\n';
     if (testRecord.comment) {
       result += ' * ' + testRecord.comment.replace(/\n/g, '\n * ') + '\n *\n';
     }
     delete testRecord.comment;
     forEach(KNOWN_PROPS, addProp);
     forEach(keys(testRecord), addProp);
     result += ' */\n\n' + test;
     return result;
   }
   t262.formatTestRecord = formatTestRecord;

   /**
    * Reads the test case at inBaseStr+relPathStr and returns the
    * source of that test case converted to canonical test262 style.
    */
   function convertTest(inBaseStr, relPathStr) {
     var inBase = toPath(inBaseStr);
     var relPath = platform.toRelPath(relPathStr);
     var name = relPath.pop();
     var testRecord = parseTestRecord(inBase, relPath, name);
     var result = formatTestRecord(testRecord);
     return result;
   }
   t262.convertTest = convertTest;

   var writeSpawnFailures = [];

   /**
    * Convert all the testcases found at inBase+relDir to test cases
    * in canonical test262 style, to be stored at corresponding
    * positions in outBase+relPath.
    */
   function convertAll(inBase, outBase, relPath) {
     var inPath = inBase.concat(relPath);
     var outPath = outBase.concat(relPath);
     platform.mkdir(outPath);
     forEach(platform.ls(inPath), function(name) {
       var nextRelPath = relPath.concat([name]);
       if (platform.isDirectory(inBase.concat(nextRelPath))) {
         convertAll(inBase, outBase, nextRelPath);
       } else if (/\.js$/.test(name)) {
         var outFilePath = outPath.concat([name]);
         try {
           platform.writeSpawn(
             [CONVERT_PATH],
             't262.show(t262.convertTest("' + toPathStr(inBase) +
               '", "' + toRelPathStr(nextRelPath) + '"));',
             void 0,
             outFilePath);
         } catch (err) {
           writeSpawnFailures.push({
             error: err,
             relPath: relPath
           });
         }
       }
     });
   }
   t262.convertAll = convertAll;

   /**
    * Do all the conversions (from sputnik style, ietestcenter style,
    * or other to canonical test262 style) matching relPath.
    */
   function convert(opt_relPathStr) {
     var relPath = opt_relPathStr ? toRelPath(opt_relPathStr) : [];
     writeSpawnFailures = [];
     forEach(CONTRIB_DIRS, function(srcDir) {
       convertAll(srcDir, CONVERTED_DIR, relPath);
     });
     if (writeSpawnFailures.length >= 1) {
       print('********* failures **********');
       forEach(writeSpawnFailures, function(failure) {
         print(failure.error + ': ' + toRelPathStr(failure.relPath));
       });
       throw writeSpawnFailures[0].error;
     }
   }
   t262.convert = convert;

   /**
    * Reads all the test case records for the section corresponding to
    * the directory at pathStr, and return a JSON record for a test
    * case section, as would be uploaded to a browser-based test
    * runner.
    */
   function buildSection(inBaseStr, relPathStr) {
     var inBase = toPath(inBaseStr);
     var relPath = platform.toRelPath(relPathStr);
     var path = inBase.concat(relPath);
     if (!platform.isDirectory(path)) { throw new Error('not dir: ' + path); }

     var jsFiles = filter(platform.ls(path), function(name) {
       return /\.js$/.test(name);
     });
     var testRecords = map(jsFiles, function(name) {
       var testRecord = parseTestRecord(inBase, relPath, name);

       delete testRecord.header;
       delete testRecord.comment;
       return testRecord;
     });
     testRecords = filter(testRecords, function(testRecord) {
       return testRecord !== null;
     });
     return {
       testCollection: {
         name: path[path.length -1],
         numTests: testRecords.length,
         tests: testRecords
       }
     };
   }
   t262.buildSection = buildSection;

   /**
    * Use the test cases at inBase+relPath to build the test
    * collection portion of the website, at outBase.
    */
   function buildAll(inBase, outBase, relPath) {
     var inPath = inBase.concat(relPath);
     var hasJS = false;
     forEach(platform.ls(inPath), function(name) {
       var nextRelPath = relPath.concat([name]);
       if (platform.isDirectory(inBase.concat(nextRelPath))) {
         buildAll(inBase, outBase, nextRelPath);
       } else if (/\.js$/.test(name)) {
         hasJS = true;
       }
     });
     if (hasJS) {
       var name = relPath[relPath.length -1] + '.json';
       var outFilePath = outBase.concat([name]);
       try {
         platform.writeSpawn(
           [CONVERT_PATH],
           't262.showJSON(t262.buildSection("' + toPathStr(inBase) +
               '", "' + toRelPathStr(nextRelPath) + '"));',
           void 0,
           outFilePath);
       } catch (err) {
         writeSpawnFailures.push({
           error: err,
           path: relPath
         });
       }
     }
   }
   t262.buildAll = buildAll;

   /**
    * Build those test case files for the website corresponding to the
    * test cases matching relPath.
    *
    * <p>Right now it's building from the pre-converted test
    * files. Once we switch over to converted as the maintained
    * sources, we should change this.
    */
   function buildWebSite(opt_relPathStr) {
     var relPath = opt_relPathStr ? toRelPath(opt_relPathStr) : [];
     writeSpawnFailures = [];
     forEach(CONTRIB_DIRS, function(srcDir) {
       buildAll(srcDir, OUT_DIR, relPath);
     });
//   buildAll(CONVERTED_DIR, OUT_DIR, relPath);
     if (writeSpawnFailures.length >= 1) {
       print('********* failures **********');
       forEach(writeSpawnFailures, function(failure) {
         print(failure.error + ': ' + toRelPathStr(failure.relPath));
       });
       throw writeSpawnFailures[0].error;
     }
   }
   t262.buildWebSite = buildWebSite;

 })(this);
