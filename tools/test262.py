#!/usr/bin/python
# Copyright 2009 the Sputnik authors.  All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.


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


class Test262Error(Exception):

  def __init__(self, message):
    self.message = message


def ReportError(s):
  raise Test262Error(s)


def BuildOptions():
  result = optparse.OptionParser()
  result.add_option("--command", default=None, help="The command-line to run")
  result.add_option("--tests", default=path.abspath('.'), 
                    help="Path to the tests")
  result.add_option("--cat", default=False, action="store_true",
                    help="Print test source code")
  result.add_option("--summary", default=False, action="store_true",
                    help="Print summary after running tests")
  result.add_option("--full-summary", default=False, action="store_true",
                    help="Print summary and test output after running tests")
  result.add_option("--enable-strict-mode", default=False, action="store_true", 
                    help="Run the mode also in ES5 strict mode")

  return result


def ValidateOptions(options):
  if not options.command:
    ReportError("A --command must be specified.")
  if not path.exists(options.tests):
    ReportError("Couldn't find test path '%s'" % options.tests)


_PLACEHOLDER_PATTERN = re.compile(r"\{\{(\w+)\}\}")
_INCLUDE_PATTERN = re.compile(r"\$INCLUDE\(\"(.*)\"\);")
_SPECIAL_CALL_PATTERN = re.compile(r"\$([A-Z]+)(?=\()")


_SPECIAL_CALLS = {
  'ERROR': 'testFailed',
  'FAIL': 'testFailed',
  'PRINT': 'testPrint'
}


def IsWindows():
  p = platform.system()
  return (p == 'Windows') or (p == 'Microsoft')


def StripHeader(str):
  while str.startswith('//') and "\n" in str:
    str = str[str.index("\n")+1:]
  return str.lstrip()


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
        text = self.text
    )

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
    if self.HasUnexpectedOutcome():
      if self.case.IsNegative():
        print "%s was expected to fail but didn't" % name
      elif (self.case.strict_mode and self.case.IsStrictModeNegative()):
        print "%s was expected to fail in strict mode, but didn't" % name
      else:
        if long_format:
          print "=== %s failed ===" % name
        else:
          print "%s: " % name
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
      print "%s failed as expected" % name
    elif self.case.strict_mode:
      if self.case.IsStrictModeNegative():
        print "%s failed in strict mode as expected" % name
      else: 
        print "%s passed in strict mode" % name
    else:
      print "%s passed" % name

  def HasFailed(self):
    return self.exit_code != 0

  def HasUnexpectedOutcome(self):
    if self.case.IsNegative():
       return not self.HasFailed()
    if self.case.IsStrictModeNegative():
       return not self.HasFailed()
    else:
       return self.HasFailed()


class TestCase(object):

  def __init__(self, suite, name, full_path, strict_mode=False):
    self.suite = suite
    self.name = name
    self.full_path = full_path
    self.contents = None
    self.is_negative = None
    self.strict_mode = strict_mode
    self.is_strict_mode_negative = None

  def GetName(self):
    return path.join(*self.name)

  def GetPath(self):
    return self.name

  def GetRawContents(self):
    if self.contents is None:
      f = open(self.full_path)
      self.contents = f.read()
      f.close()
    return self.contents

  def IsNegative(self):
    if self.is_negative is None:
      self.is_negative = ("@negative" in self.GetRawContents())
    return self.is_negative

  def IsStrictModeNegative(self):
    if self.strict_mode and self.is_strict_mode_negative is None:
      self.is_strict_mode_negative = \
          ("@strict_mode_negative" in self.GetRawContents())
    return self.is_strict_mode_negative

  def GetSource(self):
    source = self.suite.GetInclude("framework.js", False)
    source += StripHeader(self.GetRawContents())
    def IncludeFile(match):
      return self.suite.GetInclude(match.group(1))
    source = _INCLUDE_PATTERN.sub(IncludeFile, source)
    def SpecialCall(match):
      key = match.group(1)
      return _SPECIAL_CALLS.get(key, match.group(0))
    if self.strict_mode:
      source = '"use strict";\nvar strict_mode = true;\n' + \
          _SPECIAL_CALL_PATTERN.sub(SpecialCall, source)
    else:
      source =  "var strict_mode = false; \n" + \
          _SPECIAL_CALL_PATTERN.sub(SpecialCall, source)
    return source

  def InstantiateTemplate(self, template, params):
    def GetParameter(match):
      key = match.group(1)
      return params.get(key, match.group(0))
    return _PLACEHOLDER_PATTERN.sub(GetParameter, template)

  def RunTestIn(self, command_template, tmp):
    tmp.Write(self.GetSource())
    tmp.Close()
    command = self.InstantiateTemplate(command_template, {
      'path': tmp.name
    })
    (code, out, err) = self.Execute(command)
    return TestResult(code, out, err, self)

  def Execute(self, command):
    if IsWindows():
      args = '"%s"' % command
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

  def __init__(self, root, stric_mode):
#    self.test_root = path.join(root, 'test', 'suite', 'Sputnik', 'Conformance')
#    self.test_root = path.join(root, 'test', 'suite', 'other')
    self.test_root = path.join(root, 'test', 'suite', 'converted')
    self.lib_root = path.join(root, 'test', 'harness')
    self.strict_mode = stric_mode
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

  def GetTimeZoneInfoInclude(self):
    dst_attribs = GetDaylightSavingsAttribs()
    if not dst_attribs:
      return None
    lines = []
    for key in sorted(dst_attribs.keys()):
      lines.append('var $DST_%s = %s;' % (key, str(dst_attribs[key])))
    localtz = time.timezone / -3600
    lines.append('var $LocalTZ = %i;' % localtz)
    return "\n".join(lines)

  def GetSpecialInclude(self, name):
    if name == "environment.js":
      return self.GetTimeZoneInfoInclude()
    else:
      return None

  def GetInclude(self, name, strip_header=True):
    key = (name, strip_header)
    if not key in self.include_cache:
      value = self.GetSpecialInclude(name)
      if value:
        self.include_cache[key] = value
      else:
        static = path.join(self.lib_root, name)
        if path.exists(static):
          f = open(static)
          contents = f.read()
          if strip_header:
            contents = StripHeader(contents)
          self.include_cache[key] = contents + "\n"
          f.close()
        else:
         self.include_cache[key] = ""
    return self.include_cache[key]

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
            cases.append(TestCase(self, name, full_path, False))
            if self.strict_mode:
              cases.append(TestCase(self, name, full_path, True))
    logging.info("Done listing tests")
    return cases

  def PrintSummary(self, progress):
    print
    print "=== Summary ==="
    count = progress.count
    succeeded = progress.succeeded
    failed = progress.failed
    print " - Ran %i test%s" % MakePlural(count)
    if progress.failed == 0:
      print " - All tests succeeded"
    else:
      percent = ((100.0 * succeeded) / count,)
      print " - Passed %i test%s (%.1f%%)" % (MakePlural(succeeded) + percent)
      percent = ((100.0 * failed) / count,)
      print " - Failed %i test%s (%.1f%%)" % (MakePlural(failed) + percent)
      positive = [c for c in progress.failed_tests if not c.case.IsNegative()]
      negative = [c for c in progress.failed_tests if c.case.IsNegative()]
      if len(positive) > 0:
        print
        print "Failed tests"
        for result in positive:
          print "  %s" % result.case.GetName()
      if len(negative) > 0:
        print
        print "Expected to fail but passed ---"
        for result in negative:
          print " %s" % result.case.GetName()

  def PrintFailureOutput(self, progress):
    for result in progress.failed_tests:
      print
      result.ReportOutcome(False)

  def Run(self, command_template, tests, print_summary, full_summary):
    if not "{{path}}" in command_template:
      command_template += " {{path}}"
    cases = self.EnumerateTests(tests)
    if len(cases) == 0:
      ReportError("No tests to run")
    progress = ProgressIndicator(len(cases))
    for case in cases:
      result = case.Run(command_template)
      progress.HasRun(result)
    if print_summary:
      self.PrintSummary(progress)
      if full_summary:
        self.PrintFailureOutput(progress)
      else:
        print
        print "Use --full-summary to see output from failed tests"
    print

  def Print(self, tests):
    cases = self.EnumerateTests(tests)
    if len(cases) > 0:
      cases[0].Print()


def GetDaylightSavingsTimes():
  # Is the given floating-point time in DST?
  def IsDst(t):
    return time.localtime(t)[-1]
  # Binary search to find an interval between the two times no greater than
  # delta where DST switches, returning the midpoint.
  def FindBetween(start, end, delta):
    while end - start > delta:
      middle = (end + start) / 2
      if IsDst(middle) == IsDst(start):
        start = middle
      else:
        end = middle
    return (start + end) / 2
  now = time.time()
  one_month = (30 * 24 * 60 * 60)
  # First find a date with different daylight savings.  To avoid corner cases
  # we try four months before and after today.
  after = now + 4 * one_month
  before = now - 4 * one_month
  if IsDst(now) == IsDst(before) and IsDst(now) == IsDst(after):
    logging.warning("Was unable to determine DST info.")
    return None
  # Determine when the change occurs between now and the date we just found
  # in a different DST.
  if IsDst(now) != IsDst(before):
    first = FindBetween(before, now, 1)
  else:
    first = FindBetween(now, after, 1)
  # Determine when the change occurs between three and nine months from the
  # first.
  second = FindBetween(first + 3 * one_month, first + 9 * one_month, 1)
  # Find out which switch is into and which if out of DST
  if IsDst(first - 1) and not IsDst(first + 1):
    start = second
    end = first
  else:
    start = first
    end = second
  return (start, end)


def GetDaylightSavingsAttribs():
  times = GetDaylightSavingsTimes()
  if not times:
    return None
  (start, end) = times
  def DstMonth(t):
    return time.localtime(t)[1] - 1
  def DstHour(t):
    return time.localtime(t - 1)[3] + 1
  def DstSunday(t):
    if time.localtime(t)[2] > 15:
      return "'last'"
    else:
      return "'first'"
  def DstMinutes(t):
    return (time.localtime(t - 1)[4] + 1) % 60
  attribs = { }
  attribs['start_month'] = DstMonth(start)
  attribs['end_month'] = DstMonth(end)
  attribs['start_sunday'] = DstSunday(start)
  attribs['end_sunday'] = DstSunday(end)
  attribs['start_hour'] = DstHour(start)
  attribs['end_hour'] = DstHour(end)
  attribs['start_minutes'] = DstMinutes(start)
  attribs['end_minutes'] = DstMinutes(end)
  return attribs


def Main():
  parser = BuildOptions()
  (options, args) = parser.parse_args()
  ValidateOptions(options)
  test_suite = TestSuite(options.tests, options.enable_strict_mode)
  test_suite.Validate()
  if options.cat:
    test_suite.Print(args)
  else:
    test_suite.Run(options.command, args,
                   options.summary or options.full_summary,
                   options.full_summary)


if __name__ == '__main__':
  try:
    Main()
    sys.exit(0)
  except Test262Error, e:
    print "Error: %s" % e.message
    sys.exit(1)
