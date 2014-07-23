#!/usr/bin/env python
# Copyright 2009 the Sputnik authors.  All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

# This is derived from sputnik.py, the Sputnik console test runner,
# with elements from packager.py, which is separately
# copyrighted. TODO: Refactor so there is less duplication between
# test262.py and packager.py.


import logging
import optparse
import os
from os import path
import platform
import re
import subprocess
import sys
import tempfile
import time
import xml.dom.minidom
import datetime
import shutil
import json
import stat
import xml.etree.ElementTree as xmlj
import unicodedata


from parseTestRecord import parseTestRecord, stripHeader

from packagerConfig import *

class Test262Error(Exception):
  def __init__(self, message):
    self.message = message

def ReportError(s):
  raise Test262Error(s)



if not os.path.exists(EXCLUDED_FILENAME):
    print "Cannot generate (JSON) test262 tests without a file," + \
        " %s, showing which tests have been disabled!" % EXCLUDED_FILENAME
    sys.exit(1)
EXCLUDE_LIST = xml.dom.minidom.parse(EXCLUDED_FILENAME)
EXCLUDE_REASON = EXCLUDE_LIST.getElementsByTagName("reason")
EXCLUDE_LIST = EXCLUDE_LIST.getElementsByTagName("test")
EXCLUDE_LIST = [x.getAttribute("id") for x in EXCLUDE_LIST]


def BuildOptions():
  result = optparse.OptionParser()
  result.add_option("--command", default=None, help="The command-line to run")
  result.add_option("--tests", default=path.abspath('.'), 
                    help="Path to the tests")
  result.add_option("--cat", default=False, action="store_true",
                    help="Print packaged test code that would be run")
  result.add_option("--summary", default=False, action="store_true",
                    help="Print summary after running tests")
  result.add_option("--full-summary", default=False, action="store_true",
                    help="Print summary and test output after running tests")
  result.add_option("--strict_only", default=False, action="store_true", 
                    help="Test only strict mode")
  result.add_option("--non_strict_only", default=False, action="store_true", 
                    help="Test only non-strict mode")
  # TODO: Once enough tests are made strict compat, change the default
  # to "both"
  result.add_option("--unmarked_default", default="non_strict", 
                    help="default mode for tests of unspecified strictness")
  result.add_option("--logname", help="Filename to save stdout to")
  result.add_option("--junitname", help="Filename to save test results in JUnit XML format")
  result.add_option("--loglevel", default="warning",
                    help="sets log level to debug, info, warning, error, or critical") 
  result.add_option("--print-handle", default="", help="Command to print from console")
  return result


def ValidateOptions(options):
  if not options.command:
    ReportError("A --command must be specified.")
  if not path.exists(options.tests):
    ReportError("Couldn't find test path '%s'" % options.tests)


placeHolderPattern = re.compile(r"\{\{(\w+)\}\}")


def IsWindows():
  p = platform.system()
  return (p == 'Windows') or (p == 'Microsoft')


class TempFile(object):

  def __init__(self, suffix="", prefix="tmp", text=False):
    self.suffix = suffix
    self.prefix = prefix
    self.text = text
    self.fd = None
    self.name = None
    self.is_closed = False
    self.Open()

  def Open(self):
    (self.fd, self.name) = tempfile.mkstemp(
        suffix = self.suffix,
        prefix = self.prefix,
        text = self.text)

  def Write(self, str):
    os.write(self.fd, str)

  def Read(self):
    f = file(self.name)
    result = f.read()
    f.close()
    return result

  def Close(self):
    if not self.is_closed:
      self.is_closed = True
      os.close(self.fd)

  def Dispose(self):
    try:
      self.Close()
      os.unlink(self.name)
    except OSError, e:
      logging.error("Error disposing temp file: %s", str(e))


class TestResult(object):

  def __init__(self, exit_code, stdout, stderr, case):
    self.exit_code = exit_code
    self.stdout = stdout
    self.stderr = stderr
    self.case = case

  def ReportOutcome(self, long_format):
    name = self.case.GetName()
    mode = self.case.GetMode()
    if self.HasUnexpectedOutcome():
      if self.case.IsNegative():
        print "=== %s was expected to fail in %s, but didn't ===" % (name, mode)
      else:
        if long_format:
          print "=== %s failed in %s ===" % (name, mode)
        else:
          print "%s in %s: " % (name, mode)
        out = self.stdout.strip()
        if len(out) > 0:
          print "--- output ---"
          print out
        err = self.stderr.strip()
        if len(err) > 0:
          print "--- errors ---"
          print err
        if long_format:
          print "==="
    elif self.case.IsNegative():
      print "%s failed in %s as expected" % (name, mode)
    else:
      print "%s passed in %s" % (name, mode)
    
  def XmlAssemble(self, result):
    test_name = self.case.GetName()
    test_mode = self.case.GetMode()
    testCaseElement = xmlj.Element("testcase")
    testpath = self.TestPathManipulation(test_name)
    testCaseElement.attrib["classname"] = "%s.%s" % (testpath[0] , testpath[1]) 
    testCaseElement.attrib["name"] = "%s %s" % (testpath[2].replace('.','_') , test_mode)
    if self.HasUnexpectedOutcome():
      failureElement = xmlj.Element("failure")
      out = self.stdout.strip().decode('utf-8')
      err = self.stderr.strip().decode('utf-8')
      if len(out) > 0:
        failureElement.text = out
      if len(err) > 0:
        failureElement.text = err
      testCaseElement.append(failureElement)
    return testCaseElement

  def TestPathManipulation(self, test_name):
    testdirlist = test_name.split('/')
    testcase = testdirlist.pop()
    testclass = testdirlist.pop()
    testclass = testclass.replace('.','_')
    if len(testdirlist) >= 1:
       testpackage = testdirlist.pop(0)
    else:
       testpackage = testclass
    return(testpackage,testclass,testcase)
  
  def HasFailed(self):    
    return self.exit_code != 0

  def AsyncHasFailed(self):   
    return 'Test262:AsyncTestComplete' not in self.stdout

  def HasUnexpectedOutcome(self):
    if self.case.IsAsyncTest():		
	return self.AsyncHasFailed() or self.HasFailed()
    elif self.case.IsNegative():      
       return not self.HasFailed()
    else:      
       return self.HasFailed()

class TestCase(object):

  def __init__(self, suite, name, full_path, strict_mode):
    self.suite = suite
    self.name = name
    self.full_path = full_path
    self.strict_mode = strict_mode
    f = open(self.full_path)
    self.contents = f.read()
    f.close()
    testRecord = parseTestRecord(self.contents, name)
    self.test = testRecord["test"]
    del testRecord["test"]
    del testRecord["header"]
    testRecord.pop("commentary", None)    # do not throw if missing
    self.testRecord = testRecord;
    

  def GetName(self):
    return path.join(*self.name)

  def GetMode(self):
    if self.strict_mode:
      return "strict mode"
    else:
      return "non-strict mode"

  def GetPath(self):
    return self.name

  def IsNegative(self):
    return 'negative' in self.testRecord

  def IsOnlyStrict(self):
    return 'onlyStrict' in self.testRecord

  def IsNoStrict(self):
    return 'noStrict' in self.testRecord

  def IsAsyncTest(self):	
	return '$DONE' in self.test

  def GetIncludeList(self):
    if self.testRecord['includes']:
      return self.testRecord['includes']
    return re.findall('\$INCLUDE\([\'"]([^\)]+)[\'"]\)', self.test)

  def GetAdditionalIncludes(self):
    return '\n'.join([self.suite.GetInclude(include) for include in self.GetIncludeList()])

  def GetSource(self):
    # "var testDescrip = " + str(self.testRecord) + ';\n\n' + \
    source = self.suite.GetInclude("cth.js") + \
        self.suite.GetInclude("sta.js") + \
        self.suite.GetInclude("ed.js")

    if self.IsAsyncTest():
      source = source + \
               self.suite.GetInclude("timer.js") + \
               self.suite.GetInclude("doneprintHandle.js").replace('print', self.suite.print_handle)

    source = source + \
        self.GetAdditionalIncludes() + \
        self.test + '\n'

    if self.strict_mode:
      source = '"use strict";\nvar strict_mode = true;\n' + source
    else:
      source =  "var strict_mode = false; \n" + source
    return source

  def InstantiateTemplate(self, template, params):
    def GetParameter(match):
      key = match.group(1)
      return params.get(key, match.group(0))
    return placeHolderPattern.sub(GetParameter, template)

  def Execute(self, command):
    if IsWindows():
      args = '%s' % command
    else:
      args = command.split(" ")
    stdout = TempFile(prefix="test262-out-")
    stderr = TempFile(prefix="test262-err-")
    try:
      logging.info("exec: %s", str(args))
      process = subprocess.Popen(
        args,
        shell = IsWindows(),
        stdout = stdout.fd,
        stderr = stderr.fd
      )
      code = process.wait()
      out = stdout.Read()
      err = stderr.Read()
    finally:
      stdout.Dispose()
      stderr.Dispose()
    return (code, out, err)

  def RunTestIn(self, command_template, tmp):
    tmp.Write(self.GetSource())
    tmp.Close()
    command = self.InstantiateTemplate(command_template, {
      'path': tmp.name
    })
    (code, out, err) = self.Execute(command)
    return TestResult(code, out, err, self)

  def Run(self, command_template):
    tmp = TempFile(suffix=".js", prefix="test262-", text=True)
    try:
      result = self.RunTestIn(command_template, tmp)
    finally:
      tmp.Dispose()
    return result

  def Print(self):
    print self.GetSource()


class ProgressIndicator(object):

  def __init__(self, count):
    self.count = count
    self.succeeded = 0
    self.failed = 0
    self.failed_tests = []

  def HasRun(self, result):
    result.ReportOutcome(True)
    if result.HasUnexpectedOutcome():
      self.failed += 1
      self.failed_tests.append(result)
    else:
      self.succeeded += 1


def MakePlural(n):
  if (n == 1):
    return (n, "")
  else:
    return (n, "s")

class TestSuite(object):

  def __init__(self, root, strict_only, non_strict_only, unmarked_default, print_handle):
    # TODO: derive from packagerConfig.py
    self.test_root = path.join(root, 'test', 'suite')
    self.lib_root = path.join(root, 'test', 'harness')
    self.strict_only = strict_only
    self.non_strict_only = non_strict_only
    self.unmarked_default = unmarked_default
    self.print_handle = print_handle
    self.include_cache = { }
	

  def Validate(self):
    if not path.exists(self.test_root):
      ReportError("No test repository found")
    if not path.exists(self.lib_root):
      ReportError("No test library found")

  def IsHidden(self, path):
    return path.startswith('.') or path == 'CVS'

  def IsTestCase(self, path):
    return path.endswith('.js')

  def ShouldRun(self, rel_path, tests):
    if len(tests) == 0:
      return True
    for test in tests:
      if test in rel_path:
        return True
    return False

  def GetInclude(self, name):
    if not name in self.include_cache:
      static = path.join(self.lib_root, name)
      if path.exists(static):
        f = open(static)
        contents = stripHeader(f.read())
        contents = re.sub(r'\r\n', '\n', contents)
        self.include_cache[name] = contents + "\n"
        f.close()
      else:
        ReportError("Can't find: " + static)
    return self.include_cache[name]

  def EnumerateTests(self, tests):
    logging.info("Listing tests in %s", self.test_root)
    cases = []
    for root, dirs, files in os.walk(self.test_root):
      for f in [x for x in dirs if self.IsHidden(x)]:
        dirs.remove(f)
      dirs.sort()
      for f in sorted(files):
        if self.IsTestCase(f):
          full_path = path.join(root, f)
          if full_path.startswith(self.test_root):
            rel_path = full_path[len(self.test_root)+1:]
          else:
            logging.warning("Unexpected path %s", full_path)
            rel_path = full_path
          if self.ShouldRun(rel_path, tests):
            basename = path.basename(full_path)[:-3]
            name = rel_path.split(path.sep)[:-1] + [basename]
            if EXCLUDE_LIST.count(basename) >= 1:
              print 'Excluded: ' + basename
            else:
              if not self.non_strict_only:
                strict_case = TestCase(self, name, full_path, True)
                if not strict_case.IsNoStrict():
                  if strict_case.IsOnlyStrict() or \
                        self.unmarked_default in ['both', 'strict']:
                    cases.append(strict_case)
              if not self.strict_only:
                non_strict_case = TestCase(self, name, full_path, False)
                if not non_strict_case.IsOnlyStrict():
                  if non_strict_case.IsNoStrict() or \
                        self.unmarked_default in ['both', 'non_strict']:
                    cases.append(non_strict_case)
    logging.info("Done listing tests")
    return cases

  def PrintSummary(self, progress, logfile):
    print
    if logfile:
       self.logf.write("=== Summary === \n")
    print "=== Summary ==="
    count = progress.count
    succeeded = progress.succeeded
    failed = progress.failed
    if logfile:
      self.logf.write(" - Ran %i test%s \n" % MakePlural(count))
    print " - Ran %i test%s" % MakePlural(count)
    if progress.failed == 0:
      if logfile:
        self.logf.write(" - All tests succeeded \n")
      print " - All tests succeeded"
   
    else:
      percent = ((100.0 * succeeded) / count,)
      if logfile:
        self.logf.write(" - Passed %i test%s (%.1f%%)\n" % (MakePlural(succeeded) + percent))
      print " - Passed %i test%s (%.1f%%)" % (MakePlural(succeeded) + percent)
      percent = ((100.0 * failed) / count,)
      if logfile:
        self.logf.write(" - Failed %i test%s (%.1f%%) \n" % (MakePlural(failed) + percent))
      print " - Failed %i test%s (%.1f%%)" % (MakePlural(failed) + percent)
      positive = [c for c in progress.failed_tests if not c.case.IsNegative()]
      negative = [c for c in progress.failed_tests if c.case.IsNegative()]
      if len(positive) > 0:
        print
        if logfile:
          self.logf.write("Failed Tests \n") 
        print "Failed tests"
        for result in positive:
          if logfile:
            self.logf.write("  %s in %s \n" % (result.case.GetName(), result.case.GetMode()))
          print "  %s in %s" % (result.case.GetName(), result.case.GetMode())
      if len(negative) > 0:
        print
        print "Expected to fail but passed ---"
        for result in negative:
          if logfile:
            self.logfile.append(" %s in %s \n" % (result.case.GetName(), result.case.GetMode()))
          print " %s in %s" % (result.case.GetName(), result.case.GetMode())

  def PrintFailureOutput(self, progress, logfile):
    for result in progress.failed_tests:
      if logfile:
        self.WriteLog(result)
      print
      result.ReportOutcome(False)

  def Run(self, command_template, tests, print_summary, full_summary, logname, junitfile):
    if not "{{path}}" in command_template:
      command_template += " {{path}}"
    cases = self.EnumerateTests(tests)
    if len(cases) == 0:
      ReportError("No tests to run")
    progress = ProgressIndicator(len(cases))
    if logname:
      self.logf = open(logname, "w")
    if junitfile:
      self.outfile = open(junitfile, "w")
      TestSuiteElement = xmlj.Element("testsuite")
      TestSuiteElement.attrib["name "] = "test262"
      for x in range(len(EXCLUDE_LIST)):
        if self.ShouldRun (unicode(EXCLUDE_LIST[x].encode('utf-8','ignore')), tests):
          SkipCaseElement = xmlj.Element("testcase")
          SkipCaseElement.attrib["classname"] = unicode(EXCLUDE_LIST[x]).encode('utf-8','ignore')
          SkipCaseElement.attrib["name"] = unicode(EXCLUDE_LIST[x]).encode('utf-8','ignore')
          SkipElement = xmlj.Element("skipped")
          SkipElement.attrib["message"] = unicode(EXCLUDE_REASON[x].firstChild.nodeValue)
          SkipCaseElement.append(SkipElement)
          TestSuiteElement.append(SkipCaseElement)
       
    for case in cases:
      result = case.Run(command_template)
      if junitfile:
        TestCaseElement = result.XmlAssemble(result)
        TestSuiteElement.append(TestCaseElement)
        if case == cases[len(cases)-1]:
             xmlj.ElementTree(TestSuiteElement).write(junitfile, "UTF-8")
      if logname:
        self.WriteLog(result)
      progress.HasRun(result)
    
    if print_summary:
      self.PrintSummary(progress, logname)
      if full_summary:
        self.PrintFailureOutput(progress, logname)
      else:
        print
        print "Use --full-summary to see output from failed tests"
    print
    return progress.failed

  def WriteLog(self, result):
    name = result.case.GetName()
    mode = result.case.GetMode()
    if result.HasUnexpectedOutcome():
       if result.case.IsNegative():
          self.logf.write("=== %s was expected to fail in %s, but didn't === \n" % (name, mode))
       else:
          self.logf.write("=== %s failed in %s === \n" % (name, mode))
          out = result.stdout.strip()
          if len(out) > 0:
             self.logf.write("--- output --- \n %s" % out)
          err = result.stderr.strip()
          if len(err) > 0:
             self.logf.write("--- errors ---  \n %s" % err)
             self.logf.write("=== \n")
    elif result.case.IsNegative():
       self.logf.write("%s failed in %s as expected \n" % (name, mode))
    else:
       self.logf.write("%s passed in %s \n" % (name, mode))

  def Print(self, tests):
    cases = self.EnumerateTests(tests)
    if len(cases) > 0:
      cases[0].Print()

def Main():
  code = 0
  parser = BuildOptions()
  (options, args) = parser.parse_args()
  ValidateOptions(options)
  test_suite = TestSuite(options.tests, 
                         options.strict_only, 
                         options.non_strict_only,
                         options.unmarked_default,
			 options.print_handle)
  test_suite.Validate()
  if options.loglevel == 'debug':
    logging.basicConfig(level=logging.DEBUG)
  elif options.loglevel == 'info':
    logging.basicConfig(level=logging.INFO)
  elif options.loglevel == 'warning':
    logging.basicConfig(level=logging.WARNING)
  elif options.loglevel == 'error':
    logging.basicConfig(level=logging.ERROR)
  elif options.loglevel == 'critical':
    logging.basicConfig(level=logging.CRITICAL)
  if options.cat:
    test_suite.Print(args)
  else:
    code = test_suite.Run(options.command, args,
                          options.summary or options.full_summary,
                          options.full_summary,
                          options.logname,
                          options.junitname)
  return code
       
if __name__ == '__main__':
  try:
    code = Main()
    sys.exit(code)
  except Test262Error, e:
    print "Error: %s" % e.message
    sys.exit(1)
