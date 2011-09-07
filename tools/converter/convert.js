
(function(global) {
   "use strict";

   var t262 = global.t262;
   var platform = t262.platform;
   var regExp = platform.regExp;

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

   var captureFuncBodyPattern =
     regExp(/^function(?:\s+\w*)?\(\s*\)\s*\{/,
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

   /**
    * Strip the left margin "*"s that are found in the body of a
    * multiline doc-comment like this one.
    */
   function stripStars(text) {
     return text.replace(/\s*\n\s*\*\s?/g, '\n').trim();
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
     envelope.header = envelopeMatch[1].trim();

     if (envelopeMatch[2]) {
       var propTexts = envelopeMatch[2].split(/\s*\n\s*\*\s*@/);
       envelope.comment = stripStars(propTexts.shift()), // notice side effect
       propTexts.forEach(function(propText) {
         var propName = propText.match(/^\w+/)[0];
         var propVal = propText.substring(propName.length);
         var propMatch = /^:?([^;]*);?\s*$/.exec(propVal);
         if (propMatch) { propVal = propMatch[1]; }
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
       envelope.rest = registerMatch[1].trim();
       envelope.registerExpr = registerMatch[2].trim();
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
    * Given a function, return the source for an expression that, when
    * evaluated in the environment the function assumes, will behave
    * the same as calling that function in that environment.
    */
   function expressionize(func) {
     var funcSrc = '' + func;
     var cfbMatch = captureFuncBodyPattern.exec(funcSrc);
     if (cfbMatch) {
       // Look for special cases
       var body = cfbMatch[1].trim();

       var cebMatch = captureExprBodyPattern.exec(body);
       if (cebMatch) { return '(' + cebMatch[1].trim() + ')'; }

       var cpMatch = capturePredicatePattern.exec(body);
       if (cpMatch) { return '(' + cpMatch[1].trim() + ')'; }

     } else {
       // signal an error?
     }
     return '(' + funcSrc + ').call(this)';
   }

   /**
    * Given an ietestcenter style test, this <b>evaluates</b> the
    * registration expression in order to gather the test record.
    */
   function gatherOne(envelope, name) {
     if (envelope.testRecord) {
       var propNames = Object.keys(envelope.testRecord);
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
       // We plan to lift this restriction in order to support test
       // generators.
       throw new Error('not singleton: ' + name);
     }
     var testRecord = testRecords[0];

     if (typeof testRecord.test === 'function') {
       testRecord.test = envelope.rest +
         'assertTrue(' + expressionize(testRecord.test) + ');\n';
     }
     if (typeof testRecord.precondition === 'function') {
       var precondition = expressionize(testRecord.precondition);
       if (precondition === '(true)') {
         delete testRecord.precondition;
       } else {
         testRecord.precondition = precondition;
       }
     }

     return testRecord;
   };

   /**
    * Normalizes the properties of testRecord to be the canonical
    * test262 style properties, that will be assumed by the new test
    * runners.
    */
   function normalizeProps(testRecord) {
     if (!testRecord.id && testRecord.name) {
       testRecord.id = testRecord.name;
       delete testRecord.name;
     }

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
   };
   t262.normalizeProps = normalizeProps;

   /**
    * Parses the source of a test262 test case file into a normalized
    * JSON test record.
    */
   function parseTestRecord(path, name) {
     var nextPath = path.concat([name]);

     var src = platform.read(nextPath);
     var testRecord;
     if (!src) { throw new Error('no src: ' + nextPath.join('/')); }
     var envelope = parseTestEnvelope(src, name);

     if (envelope.registerExpr) {
       testRecord = gatherOne(envelope, name);
     } else {
       testRecord = envelope.testRecord;
       if (!testRecord.test) {
         testRecord.test = envelope.rest;
       }
     }
     testRecord.header = envelope.header;
     testRecord.comment = envelope.comment;

     normalizeProps(testRecord);
     return testRecord;
   };
   t262.parseTestRecord = parseTestRecord;

   // The known ones will be rendered first, and in this order.
   var KNOWN_PROPS = ['id', 'section', 'path', 'description',
                      'strict_only', 'negative'];

   /**
    * Turns the (assumed) normalized test record into its string form
    * in canonical test262 style.
    *
    * NOTE: This is currently destructive of testRecord. Easy to fix
    *if it becomes a problem.
    */
   function formatTestRecord(testRecord) {
     var test = testRecord.test;
     delete testRecord.test;

     function addProp(pname) {
       if (pname in testRecord) {
         result += ' * @' + pname;
         if (testRecord[pname]) {
           result += ': ' + testRecord[pname].replace(/\n/g, '\n * ');
         }
         result += ';\n';
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
     KNOWN_PROPS.concat(['precondition']).forEach(addProp);
     Object.keys(testRecord).forEach(addProp);
     result += ' */\n\n' + test;
     return result;
   };
   t262.formatTestRecord = formatTestRecord;

   /**
    * Reads the test case at pathStr and returns the source of that
    * test case converted to canonical test262 style.
    */
   function convertTest(pathStr) {
     var path = platform.toPath(pathStr);
     var name = path.pop();
     var testRecord = parseTestRecord(path, name);
     var result = formatTestRecord(testRecord);
     return result;
   };
   t262.convertTest = convertTest;

   var SRC_DIRS = [
     ['test', 'suite', 'other'],
     ['test', 'suite', 'sputnik', 'Conformance'],
     ['test', 'suite', 'ietestcenter']
   ];

   var CONV_DIR = ['test', 'suite', 'converted'];

   var OUT_DIR = ['website', 'resources', 'scripts', 'testcases2'];

   var ME_PATH = platform.CONVERTER_PATH.concat('convert.js');

   /**
    * Convert all the testcases found at inBase+relDir to test cases
    * in canonical test262 style, to be stored at corresponding
    * positions in outBase+relPath.
    */
   function convertAll(inBase, outBase, relPath) {
     var inPath = inBase.concat(relPath);
     var outPath = outBase.concat(relPath);
     platform.mkdir(outPath);
     platform.ls(inPath).forEach(function(name) {
       var nextRelPath = relPath.concat([name]);
       if (platform.isDirectory(inBase.concat(nextRelPath))) {
         convertAll(inBase, outBase, nextRelPath);
       } else if (/\.js$/.test(name)) {
         var inFilePath = inPath.concat([name]);
         var outFilePath = outPath.concat([name]);
         platform.writeSpawn(
           [ME_PATH],
           't262.convertTest("' + platform.toPathStr(inFilePath) + '")',
           void 0,
           outFilePath);
       }
     });
   };
   t262.convertAll = convertAll;

   /**
    * Do all the conversions (from sputnik style, ietestcenter style,
    * or other to canonical test262 style) matching relPath.
    */
   function convert(opt_relPath) {
     SRC_DIRS.forEach(function(srcDir) {
       convertAll(srcDir, CONV_DIR, opt_relPath || []);
     });
   };
   t262.convert = convert;

   /**
    * Reads all the test case records for the section corresponding to
    * the directory at pathStr, and return a JSON record for a test
    * case section, as would be uploaded to a browser-based test
    * runner.
    */
   function buildSection(pathStr) {
     var path = platform.toPath(pathStr);
     if (!platform.isDirectory(path)) { throw new Error('not dir: ' + path); }

     var jsFiles = platform.ls(path).filter(function(name) {
       return /\.js$/.test(name);
     });
     var testRecords = jsFiles.map(function(name) {
       var testRecord = parseTestRecord(path, name);

       delete testRecord.header;
       delete testRecord.comment;
       return testRecord;
     });
     testRecords = testRecords.filter(function(testRecord) {
       return testRecord !== null;
     });
     return {
       testCollection: {
         name: path[path.length -1],
         numTests: testRecords.length,
         tests: testRecords
       }
     };
   };
   t262.buildSection = buildSection;

   /**
    * Use the test cases at inBase+relPath to build the test
    * collection portion of the website, at outBase.
    */
   function buildAll(inBase, outBase, relPath) {
     var inPath = inBase.concat(relPath);
     var hasJS = false;
     platform.ls(inPath).forEach(function(name) {
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
       platform.writeSpawn(
         [ME_PATH],
         't262.asJSONTxt(t262.buildSection("' +
           platform.toPathStr(inPath) + '"))',
         void 0,
         outFilePath);
     }
   };
   t262.buildAll = buildAll;

   /**
    * Build those test case files for the website corresponding to the
    * test cases matching relPath.
    *
    * <p>Right now it's building from the pre-converted test
    * files. Once we switch over to converted as the maintained
    * sources, we should change this.
    */
   function buildWebSite(opt_relPath) {
     SRC_DIRS.forEach(function(srcDir) {
       buildAll(srcDir, OUT_DIR, opt_relPath || []);
     });
//     buildAll(CONV_DIR, OUT_DIR, opt_relPath || []);
   };
   t262.buildWebSite = buildWebSite;

 })(this);
