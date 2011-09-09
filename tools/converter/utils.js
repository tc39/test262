// Copyright 2011 by Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


/**
 * General conveniences, including some functionality available in ES5
 * but not ES3.
 *
 * <p>This file must be able to run in many browsers, and so should
 * assume the platform may be anything from ES3+Reality forward,
 * including somewhat non-conformant implementations. It must also be
 * able to run in a non-browser environment, such as from the command
 * line.
 *
 * <p>The conveniences that are analogs of similar ES5 features are
 * not full emulations, but only emulations of the portion of their
 * semantics we need.
 */
(function(global) {
   "use strict";

   global.t262 = global.t262 || {};

   var utils = global.t262.utils = global.t262.utils || {};

   ////////////////////////////////////////////////////////

   /**
    * Like ES5 call.bind([].forEach)(list, func), but supporting fewer
    * optional arguments.
    */
   function forEach(list, func) {
     for (var i = 0, len = list.length; i < len; i++) {
       func(list[i], i);
     }
   }
   utils.forEach = forEach;

   /**
    * Like ES5 call.bind([].map)(list, func), but supporting fewer
    * optional arguments.
    */
   function map(list, func) {
     var result = [];
     for (var i = 0, len = list.length; i < len; i++) {
       result.push(func(list[i], i));
     }
     return result;
   }
   utils.map = map;

   /**
    * Like ES5 call.bind([].filter)(list, pred), but supporting fewer
    * optional arguments.
    */
   function filter(list, pred) {
     var result = [];
     for (var i = 0, len = list.length; i < len; i++) {
       if (pred(list[i], i)) { result.push(list[i]); }
     }
     return result;
   }
   utils.filter = filter;

   /**
    * Like ES5 Object.keys(obj).
    */
   function keys(obj) {
     var result = [];
     var hop = {}.hasOwnProperty;
     for (var k in obj) {
       if (hop.call(obj, k)) { result.push(k); }
     }
     return result;
   }
   utils.keys = keys;

   /**
    * Like ES5 call.bind(''.trim)(string).
    */
   function trim(str) {
     return str.replace(/^\s*/, '').replace(/\s*$/, '');
   }
   utils.trim = trim;

   /**
    * Appends a bunch of RegExps together into a single RegExp,
    * solving both the RegExp-one-liner problem and the doubled
    * backslash problem when composing literal strings.
    *
    * <p>The arguments can be any mixture of RegExps and strings. By
    * expressing the portions that should be well formed regexps as
    * regexps, we catch well-formedness errors within such a portion
    * separately. The strings are added as is without escaping --
    * BEWARE. By not escaping the strings, we can use them to
    * represent the individually unbalanced fragments, like capturing
    * parens, around other regexps. If arguments[0] is a RegExp, we
    * use its flags on the resuting RegExp.
    *
    * <p>Not platform dependent, so does not really belong in this
    * file.
    */
   function regExp(var_args) {
     var args = [].slice.call(arguments, 0);
     var reSrc = map(args, function(arg) {
       return (typeof arg === 'string') ? arg : arg.source;
     }).join('');
     var flags = '';
     if (typeof args[0] === 'object') {
       var parts = (''+args[0]).split('/');
       flags = parts[parts.length -1];
     }
     return new RegExp(reSrc, flags);
   }
   utils.regExp = regExp;


 })(this);