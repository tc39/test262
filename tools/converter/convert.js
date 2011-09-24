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

   /**
    * Extra in the sense that they are not redundant with the source,
    * but add information that should be present in the converted
    * source. So not test/suite/SputnikGlobalScope.js, since that is
    * actually derived from sources.
    */
   var EXTRA_GLOBAL_SCOPE_TESTS = [
     ['test', 'suite', 'IETCGlobalScope.js']
   ];

   /**
    * Try prepending this to a relPath if necessary to get an index
    * into EXTRA_GLOBAL_SCOPE_TESTS.
    */
   var EXTRANEOUS_PREFIXES = ['TestCases'];

   /**
    * Prepare for reading in the EXTRA_GLOBAL_SCOPE_TESTS, suppressing
    * the "new Array()" that inappropriately still appears in
    * IETCGlobalScope.js
    */
   global.GlobalScopeTests = global.GlobalScopeTests || {};
   global.EarlyErrorRePat = 'EarlyErrorRePat';
   global.NotEarlyErrorString = 'NotEarlyErrorString';

/////////////////////////////////////////////////////////////////

   var headerPattern = /(?:(?:\/\/.*)?\s*\n)*/;
   var captureCommentPattern = /\/\*\*?((?:\s|\S)*?)\*\/\s*\n/;
   var anyPattern = /(?:\s|\S)*/;
   var blanksPattern = /(?:\s|\n)*/;
   var captureStrictPattern = /\s*('use strict'|"use strict");/;

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
       // notice side effect by .shift()
       envelope.commentary = stripStars(propTexts.shift()),
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

     var strictMatch = captureStrictPattern.exec(envelope.rest);
     if (strictMatch) {
       envelope.testRecord.onlyStrict = '';
       // Note: does not remove or alter the "use strict"; directive
       // itself. We also make no use of the captured string so TODO:
       // stop capturing it.
     }

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

     // Uncomment to look for special cases
     //
     // var cebMatch = captureExprBodyPattern.exec(body);
     // if (cebMatch) {
     //   return 'assertTruthy(' + trim(cebMatch[1]) + ');';
     // }
     //
     // var cpMatch = capturePredicatePattern.exec(body);
     // if (cpMatch) {
     //   return 'assertTruthy(' + trim(cpMatch[1]) + ');';
     // }

     // General case

     return funcSrc + '\n' +
       'runTestCase(' + name + ');';
   }


   /**
    * If record[toName] is absent or empty and record[fromName] is
    * present, whether empty or not, then set record[toName] to the
    * current value of record[fromName] and delete record[fromName]
    */
   function transferProp(record, fromName, toName) {
     // Note that record[toName] is falsy whether toName is absent or
     // empty
     if (!record[toName] && fromName in record) {
       record[toName] = record[fromName];
       delete record[fromName];
     }
   }


   /**
    * Given an ietestcenter style test, this <b>evaluates</b> the
    * registration expression in order to gather the test record.
    */
   function gatherOne(envelope, name) {
     var testRecord = envelope.testRecord;

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
     var gatheredTestRecord = testRecords[0];
     forEach(keys(gatheredTestRecord), function(propName) {
       if (propName in testRecord &&
           testRecord[propName] !== gatheredTestRecord[propName]) {
         throw new Error('Conflicting "' + propName + '" in ' + name);
       }
       testRecord[propName] = gatheredTestRecord[propName];
     });

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
     if (!('onlyStrict' in testRecord) && testRecord.strict === 1) {
       testRecord.onlyStrict = '';
     }
     if (testRecord.strict === 1) {
       delete testRecord.strict;
     }

     if ('strict_mode_negative' in testRecord) {
       if (!('onlyStrict' in testRecord)) {
         testRecord.onlyStrict = '';
       }
       transferProp(testRecord, 'strict_mode_negative', 'negative');
     }
     transferProp(testRecord, 'strict_only', 'onlyStrict');
     transferProp(testRecord, 'non_strict_only', 'noStrict');

     transferProp(testRecord, 'errortype', 'negative');
     transferProp(testRecord, 'assertion', 'description');
     transferProp(testRecord, 'assertion', 'commentary');
   }
   t262.normalizeProps = normalizeProps;

   /**
    * If relPath is represented in the EXTRA_GLOBAL_SCOPE_TESTS,
    * retrieve the corresponding record. Otherwise, return undefined.
    */
   function getGlobalScopeRecord(relPath) {
     var key = toRelPathStr(relPath);
     var val = global.GlobalScopeTests[key];
     if (!val) {
       key = toRelPathStr(EXTRANEOUS_PREFIXES.concat(relPath));
       val = global.GlobalScopeTests[key];
     }
     return val;
   }
   t262.getGlobalScopeRecord = getGlobalScopeRecord;

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

     var globalScopeRecord = getGlobalScopeRecord(nextRelPath);
     if (globalScopeRecord) {
       forEach(keys(globalScopeRecord), function(key) {
         if (!(key in testRecord) && key !== 'precondition') {
           testRecord[key] = globalScopeRecord[key];
         }
       });
     }

     delete testRecord.id;
     delete testRecord.name;
     delete testRecord.section;
     testRecord.path = toRelPathStr(nextRelPath);
     testRecord.header = envelope.header;
     testRecord.commentary = envelope.commentary;

     normalizeProps(testRecord);
     return testRecord;
   }
   t262.parseTestRecord = parseTestRecord;

   // If we see any properties other than these after normalization,
   // we signal an error.
   var KNOWN_PROPS = ['path', 'description',
                      'noStrict', 'onlyStrict', 'negative'];

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
     if (testRecord.commentary) {
       result += ' * ' + testRecord.commentary.replace(/\n/g, '\n * ') +
         '\n *\n';
     }
     delete testRecord.commentary;
     forEach(KNOWN_PROPS, addProp);

     var remaining = keys(testRecord);
     if (remaining.length >= 1) {
       // If we wanted to preserve unrecognized properties, we'd
       // uncomment the following and comment out the next
       //forEach(remaining, addProp);
       throw new Error('unrecognized: ' + remaining);
     }

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
             [CONVERT_PATH].concat(EXTRA_GLOBAL_SCOPE_TESTS),
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
       delete testRecord.commentary;
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
           [CONVERT_PATH].concat(EXTRA_GLOBAL_SCOPE_TESTS),
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
