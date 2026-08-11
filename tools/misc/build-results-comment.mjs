import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ARTIFACTS_DIR = process.env.ARTIFACTS_DIR || 'artifacts';
const OUTPUT_FILE = process.env.OUTPUT_FILE || 'comment-body.txt';
const WORKFLOW_RUN_URL = process.env.WORKFLOW_RUN_URL;

function main() {
  const results = loadResults();
  const body = buildCommentBody(results);
  fs.writeFileSync(OUTPUT_FILE, body, 'utf8');
  console.log(`Wrote comment body to ${OUTPUT_FILE}`);
}

function loadResults() {
  const engines = [];
  /** @type {Map<TestPath, Record<EngineKey, { sloppy?: Result; strict?: Result; }>>} */
  const testResults = new Map();
  const errors = [];

  if (!fs.existsSync(ARTIFACTS_DIR)) {
    errors.push(`CI job artifacts path "${ARTIFACTS_DIR}" not found`);
    return { engines, testResults, errors };
  }

  const files = fs.readdirSync(ARTIFACTS_DIR).filter(
    f => f.startsWith('results-') && f.endsWith('.json')
  );

  if (files.length === 0) {
    errors.push(`No engine test results found in "${ARTIFACTS_DIR}"`);
    return { engines, testResults, errors };
  }

  for (const file of files) {
    const engineKey = file.slice('results-'.length, -'.json'.length);

    const filePath = path.join(ARTIFACTS_DIR, file);
    let data;
    try {
      data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
      errors.push(`**${engineKey}**: Failed to parse ${file}: ${err.message}`);
      continue;
    }

    if (!Array.isArray(data)) {
      errors.push(`**${engineKey}**: Unexpected format in ${file}, expected array`);
      continue;
    }

    engines.push(engineKey);

    for (const test of data) {
      const { relative, scenario, result } = test;
      if (!relative || !scenario || !result) {
        errors.push(`**${engineKey}**: Unexpected format of array entry in ${file} (${Object.keys(test)})`);
        continue;
      }
      let pathResults = testResults.get(relative);
      if (!pathResults) {
        pathResults = {};
        testResults.set(relative, pathResults);
      }
      const resultKey = scenario === 'strict mode' ? 'strict' : 'sloppy';
      let engineResults = pathResults[engineKey];
      if (!engineResults) {
        engineResults = {};
        pathResults[engineKey] = engineResults;
      }
      engineResults[resultKey] = {
        pass: !!result.pass,
        message: result.message,
      };
    }
  }

  const orderedEngines = engines.sort();
  return { orderedEngines, testResults, errors };
}

function buildCommentBody({ orderedEngines, testResults, errors }) {
  const errorList = errors.length ? "\n\nErrors encountered:" + errors.map(s => `\n- ${s}`).join("") : "";
  if (orderedEngines.length === 0) {
    return `No engine results were produced.${errorList}`;
  }

  const sortedTests = Array.from(testResults.keys()).sort();
  const table = buildMarkdownTable(sortedTests, orderedEngines, testResults);
  const summary =
    `${sortedTests.length} new or modified ${sortedTests.length === 1 ? "test" : "tests"} ` +
    `were run on ${orderedEngines.length} ${orderedEngines.length === 1 ? "engine" : "engines"}.`;
  const link = WORKFLOW_RUN_URL ? `\n\n[View workflow run](${WORKFLOW_RUN_URL})` : '';

  return `${summary}${link}${errorList}\n\n${table}`;
}

function buildMarkdownTable(tests, engines, testResults) {
  const header = ['Test', ...engines];
  const lines = ['| ' + header.join(' | ') + ' |'];
  lines.push('|' + header.map(() => ' --- ').join('|') + '|');

  for (const testPath of tests) {
    const results = testResults.get(testPath);
    const cells = engines.map(engineKey => {
      const result = results[engineKey];
      return formatCell(result);
    });
    lines.push('| ' + [testPath, ...cells].join(' | ') + ' |');
  }

  return lines.join('\n');
}

function formatCell(result) {
  if (!result) return '—';

  const { strict, sloppy } = result;

  if (sloppy && strict) {
    if (sloppy.pass && strict.pass) return '✅';
    if (!sloppy.pass && !strict.pass) {
      return formatFail(combineMessages(sloppy.message, strict.message));
    }
    if (sloppy.pass && !strict.pass) {
      return formatFail(`Passed in sloppy mode but failed in strict mode: ${strict.message}`);
    }
    return formatFail(`Passed in strict mode but failed in sloppy mode: ${sloppy.message}`);
  }

  const only = sloppy || strict;
  if (!only.pass) return formatFail(only.message);
  return '✅';
}

function combineMessages(sloppyMessage, strictMessage) {
  if (sloppyMessage && strictMessage) {
    // Future work: Can try to combine messages if the only difference is the
    // temporary JS file name
    if (sloppyMessage === strictMessage) {
      return sloppyMessage;
    }
    return `Sloppy: ${sloppyMessage}; Strict: ${strictMessage}`;
  }
  return sloppyMessage || strictMessage;
}

function formatFail(message) {
  if (!message) return '❌';
  return `[❌](## "${sanitizeTooltip(message)}")`;
}

// https://spec.commonmark.org/0.31.2/#links
function sanitizeTooltip(text) {
  let s = String(text);
  if (s.length > 500) s = s.slice(0, 500) + "…";
  return s
    // whitespace and control chars
    .replace(/[\u0000-\u001F\u007F]/g, (ch) => (ch === "\n" || ch === "\r" || ch === "\t" ? " " : "�"))
    // prevent HTML entities in the JS output from being expanded
    .replace(/&/g, "&amp;")
    // prevent existing backslashes from interfering with double quote escapes
    .replace(/\\/g, "\\\\")
    // escape double quotes
    .replace(/"/g, '\\"');
}

main();
