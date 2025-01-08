import os
import sys
from ..check import Check


def load_module_2(dirname, module_name):
    import imp

    f = None
    try:
        (f, pathname, description) = imp.find_module(module_name, [dirname])
        module = imp.load_module(module_name, f, pathname, description)
        return module
    except:
        raise ImportError("Can't load " + module_name)
    finally:
        if f:
            f.close()


def load_module_3(dirname, module_name):
    import importlib.machinery
    import importlib.util

    # Create a FileFinder to load Python source files.
    loader_details = (
        importlib.machinery.SourceFileLoader,
        importlib.machinery.SOURCE_SUFFIXES,
    )
    finder = importlib.machinery.FileFinder(dirname, loader_details)

    # Find the module spec.
    spec = finder.find_spec(module_name)
    if spec is None:
        raise RuntimeError("Can't load " + module_name)

    # Create and execute the module.
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)

    # Return the executed module
    return module


def load_parse_test_record():
    checks_dir = os.path.dirname(os.path.realpath(__file__))
    packing_dir = os.path.join(checks_dir, "../../../packaging")
    module_name = "parseTestRecord"

    # The "imp" module is deprecated in Python 3.4 and will be removed in
    # Python 3.12. Use it only if the current Python version is too old to use
    # the "importlib" module.
    if sys.version_info < (3, 4):
        return load_module_2(packing_dir, module_name)

    return load_module_3(packing_dir, module_name)


parse_test_record = load_parse_test_record().parseTestRecord


class CheckParseTestRecord(Check):
    '''Ensure tests can be parsed using parseTestRecord.py'''
    ID = 'ParseTestRecord'

    def run(self, name, meta, source):
        # Skip if not a test file.
        if not meta:
            return None

        errors = []
        test_rec = parse_test_record(source, name, lambda e: errors.append(e))

        # Return if parse_test_record encountered errors.
        if errors:
            return "\n".join(errors)

        # Ensure all flags in `test_rec` are consistent with `meta`.
        if "flags" in meta:
            if "flags" not in test_rec:
                return "Flags not present in parseTestRecord"

            if meta["flags"] != test_rec["flags"]:
                return "Flags don't match parseTestRecord"

            for flag in meta["flags"]:
                if flag not in test_rec:
                    return "Flag not present in parseTestRecord: " + flag
        elif "flags" in test_rec:
            return "Unexpected flags present in parseTestRecord"

        # Ensure all features in `test_rec` are consistent with `meta`.
        if "features" in meta:
            if "features" not in test_rec:
                return "Features not present in parseTestRecord"

            if meta["features"] != test_rec["features"]:
                return "Features don't match parseTestRecord"
        elif "features" in test_rec:
            return "Unexpected features present in parseTestRecord"

        return None
