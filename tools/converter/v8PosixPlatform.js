// Copyright 2011 by Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


/**
 * Each implementation of *Platform.js abstracts the underlying OS and JS
 * engine peculiarities.
 *
 * <p>The implementation here is specific to the v8 shell running on a
 * Posix platform. Therefore, it may legitimately use ES5 features,
 * although it generally avoids them for consistency with the rest of
 * test262.
 */
(function (global) {
   "use strict";

   /////////////////// Development Switches /////////////////

   var VERBOSE = true;

   // Affects side effecting os operations,
   // currently only platform.writeSpawn and platform.mkdir.
   var DRY_RUN = false;

   // When converting paths to path strings, should the pathstring be
   // relative to the TEST262_ROOT, or should it be relative to the
   // current working directory?
   var ABSOLUTE_PATHSTR = false;

   ////////////////////////////////////////////////////////

   global.t262 = global.t262 || {};

   var platform = global.t262.platform = {};

   var utils = global.t262.utils;
   var forEach = utils.forEach;
   var map     = utils.map;
   var keys    = utils.keys;
   var trim    = utils.trim;

   try {
     read('tools/converter/v8PosixPlatform.js');
   } catch (err) {
     throw new Error('Must run in a test262 source root');
   }

   var ABS_ROOT = trim(os.system('pwd', ['-P'])).split('/');

   var TEST262_ROOT = ABSOLUTE_PATHSTR ? ABS_ROOT : [];

   var TEST262_ROOT_STR = TEST262_ROOT.join('/');

   var HARNESS_DIR = ['test', 'harness'];
   platform.HARNESS_DIR = HARNESS_DIR;

   var CONVERTER_DIR = ['tools', 'converter'];
   platform.CONVERTER_DIR = CONVERTER_DIR;

   var PLATFORM_PATHS = [
     CONVERTER_DIR.concat('utils.js'),
     CONVERTER_DIR.concat('v8PosixPlatform.js')
   ];

   ////////////////// Needed for building and running test //////////////

   /**
    *
    */
   function validatePath(path) {
     var pathStr = path.join('/');
     forEach(path, function(segment) {
       if (segment === '') {
         throw new Error('A path cannot have empty segments: ' + pathStr);
       }
       if (segment === '/') {
         throw new Error('Path insufficiently parsed: ' + pathStr);
       }
       if (segment === '..') {
         throw new Error('Cannot use "..": ' + pathStr);
       }
     });
     return path;
   }

   /**
    * Converts a relPath to a relPathStr.
    *
    * A relPath is an array of filenames relative to some base onto
    * which it will be concatenated before use.
    */
   function toRelPathStr(relPath) {
     validatePath(relPath);
     return relPath.join('/');
   }
   platform.toRelPathStr = toRelPathStr;

   /**
    * Converts a path to a pathStr.
    *
    * A path is an array of filenames relative to TEST262_ROOT. A
    * pathStr is a (possibly fully qualified string) for referring to
    * that file on the current platform, according to the operations
    * in this *Platform.js file.
    */
   function toPathStr(path) {
     validatePath(path);
     return TEST262_ROOT.concat(path).join('/');
   }
   platform.toPathStr = toPathStr;

   /**
    * Returns the text found at path, with newlines normalized and
    * any initial BOM (Unicode Byte Order Mark) removed.
    */
   function getText(path) {
     var text = read(toPathStr(path));
     text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
     if (text.charCodeAt(0) === 0xfeff) { return text.substring(1); }
     return text;
   }
   platform.getText = getText;

   /**
    * How one JavaScript script possibly spawns another and possibly
    * redirects its printed form to a chosen file (or resource).
    *
    * <p>For example, if !DRY_RUN, then<pre>
    *   platform.writeSpawn([],
    *                       't262.show(+arguments[0] + +arguments[1]);',
    *                       ['3', '5'])
    * </pre>
    * should emit string "8" to stdout.
    *
    * <p>To spawn a platform distinct from the present one -- for
    * example, as outer v8-based driver can drive a rhino-based child
    * -- create a distinct object representing that other platform and
    * invoke its writeSpawn method.
    *
    * @param scriptPaths An array of path arrays of JavaScript source
    * files to be loaded into the spawned JS engine, after
    * PLATFORM_PATHS, if we are indeed spawning.
    * @param opt_src A Program to be evaluated in an environment in
    * which "arguments" is bound to the list of strings provided by
    * opt_args. If spawned, the result is whatever the program writes
    * to its stdout. On platforms (like SES) where this can be a
    * safely confining evaluation, it should be. The implementation
    * here is not safe.
    * @param opt_args A list of strings to be bound to top-level
    * 'arguments' both in opt_src and in the possibly spawed scripts.
    * @param opt_targetPath A path array naming a file where the
    * result of opt_src should be written. On v8 currently, if this is
    * provided, then writeSpawn will spawn, since we have no other way
    * to implement this functionality. In the browser context, the
    * result is PUT (or should that be POST), using XHR, to the target
    * resource.
    * @param opt_spawn_required If truthy, forces spawning.
    * @returns If there is a target, then the null string. Otherwise,
    * the string result of evaluating opt_src.
    */
   function writeSpawn(scriptPaths,
                       opt_src,
                       opt_args,
                       opt_targetPath,
                       opt_spawn_required,
                       opt_forceNonStrict) {
     if (opt_src && !opt_targetPath && !opt_spawn_required) {
       var str = '(function(/*var_args*/) { ';
       if (opt_forceNonStrict !== 'forceNonStrict') {
         str += '"use strict"; ';
       }
       str += opt_src + '\n})';
       return ''+(1,eval)(str).apply(void 0, opt_args || []);
     }

     var allScriptPaths = PLATFORM_PATHS.concat(scriptPaths);
     var cmd = 'v8 ' + map(allScriptPaths, toPathStr).join(' ');

     if (opt_src) {
       cmd += ' -e ' + JSON.stringify(opt_src);
     }
     if (opt_args) {
       cmd += ' -- ' + map(opt_args, JSON.stringify).join(' ');
     }
     if (opt_targetPath) {
       cmd += ' > ' + toPathStr(opt_targetPath);
     }
     if (VERBOSE || DRY_RUN) { print(cmd); }
     if (DRY_RUN) { return ''; }
     try {
       return os.system('bash', ['-c', cmd]);
     } catch (err) {
       if (opt_targetPath) {
         // The error we catch is almost certainly less interesting
         // than the one unfortunately written to the target file.
         var message = 'failed: ' + cmd + '\n' + getText(opt_targetPath);
         os.system('rm', [toPathStr(opt_targetPath)]);
         throw new Error(message);
       }
       throw err;
     }
   }
   platform.writeSpawn = writeSpawn;


   ////////////////// Only needed for building tests /////////////////////

   /**
    * Calls a non-strict indirect eval function on exprSrc.
    *
    * <p>On platforms (like SES) where this can be a safely confining
    * evaluation, it should be. The implementation here is not safe.
    */
   function evalExprIn(exprSrc, env, opt_forceNonStrict) {
     var varNames = keys(env);
     var str = '(function(' + varNames.join(',') + ') {';
     if (opt_forceNonStrict !== 'forceNonStrict') {
       str += '"use strict";';
     }
     str += ' return (' + exprSrc + '); })';
     var vals = map(varNames, function(varName) { return env[varName]; });
     return (1,eval)(str).apply(void 0, vals);
   }
   platform.evalExprIn = evalExprIn;

   /**
    * Converts a relPathStr to a relPath.
    *
    * <p>See toRelPathStr.
    */
   function toRelPath(relPathStr) {
     return validatePath(relPathStr.split('/'));
   }
   platform.toRelPath = toRelPath;

   /**
    * Converts a pathStr to a path.
    *
    * <p>See toPathStr.
    */
   function toPath(pathStr) {
     if (pathStr[0] === '/') {
       if (pathStr.indexOf(TEST262_ROOT_STR + '/') !== 0) {
         throw new Error('"' + pathStr + '" must start with "' +
                         TEST262_ROOT_STR + '/"');
       }
       pathStr = pathStr.substring(TEST262_ROOT_STR.length + 1);
     }
     return validatePath(pathStr.split('/'));
   }
   platform.toPath = toPath;

   /**
    * Does path name a directory?
    */
   function isDirectory(path) {
     try {
       os.system('test', ['-d', toPathStr(path)]);
       return true;
     } catch (x) {
       return false;
     }
   }
   platform.isDirectory = isDirectory;

   /**
    * A list of the filenames found in path, which must name a
    * directory.
    */
   function ls(path) {
     var pathStr = toPathStr(path);
     if (!isDirectory(path)) { return []; }
     var lines;
     try {
       lines = trim(os.system('ls', [pathStr]));
     } catch (err) {
       throw err;
     }
     if (lines === '') { return []; }
     return lines.split('\n');
   }
   platform.ls = ls;

   /**
    * If the directory does not yet exist, create it.
    */
   function mkdir(path) {
     var pathStr = toPathStr(path);
     if (DRY_RUN) {
       print('mkdir ' + pathStr);
       return;
     }
     try {
       os.mkdirp(pathStr);
     } catch (err) {
       print('***could not mkdir: ' + pathStr);
       throw err;
     }
   }
   platform.mkdir = mkdir;

   /**
    * Emits the text itself followed by a newline.
    *
    * <p>On the v8 shell, this is identical to "print".
    */
   var show = global.t262.show = print;

   /**
    * Emits the jsonRecord serialized as JSON, either compactly or
    * readably according to VERBOSE.
    */
   function showJSON(jsonRecord) {
     if (VERBOSE) {
       print(JSON.stringify(jsonRecord, void 0, ' '));
     } else {
       print(JSON.stringify(jsonRecord));
     }
   }
   global.t262.showJSON = platform.showJSON = showJSON;


   ////////////////// Only needed for running tests //////////////////////


 })(this);
