using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Configuration;
using System.IO;

//this version has been modified to not split each #check into an individual test

namespace Microsoft.Sputnik.Interop.ParserEngine
{
    public static class ES5TestScript
    {
        private static int fileCounter;
        private static string[] templates = {
           ES5TestScript.GetTemplateFile(ResourceClass.BasicTemplate_FileName),
           ES5TestScript.GetTemplateFile(ResourceClass.BasicPrereqTemplate_FileName),
           ES5TestScript.GetTemplateFile(ResourceClass.BasicNegativeTemplate_FileName),
           ES5TestScript.GetTemplateFile(ResourceClass.BasicNegativePrereqTemplate_FileName)
         };

        /// <summary>
        /// Output files counter
        /// </summary>
        public static int OutputFileCounter
        {
            get
            {
                return fileCounter;
            }
            set
            {
                fileCounter = value;
            }
        }
        /// <summary>
        /// Method to save the sputnik scripts in ES5 format
        /// </summary>
        /// <param name="script">SputnikTestScript Object which will have all the details to be written to the file</param>
        /// <param name="destinationPath">Is the destination folder path</param>
        public static void Save(SputnikTestScript script, string root, string destinationPath)
        {
            int indexOfRoot = script.FullPath.IndexOf(root, StringComparison.InvariantCulture);
            string pathFromRoot = script.FullPath.Substring(indexOfRoot, script.FullPath.Length - indexOfRoot);
            string destDir = Path.Combine(destinationPath, Path.GetDirectoryName(pathFromRoot));
 //           int fileCounter = 0;
            string buildContent = string.Empty;
            string destFullPath = string.Empty;
            string preCondition = string.IsNullOrEmpty(script.PreConditionCode) ? String.Empty : script.PreConditionCode;
            int templateIndex = string.IsNullOrEmpty(preCondition) ? 0 : 1;
            string body = script.Body;
            if (script.IsNegative)
            {
                templateIndex += 2;
                if (!body.Contains("eval(")) body = WrapWithEval(body);
            }
            string template = templates[templateIndex];
            Logger.WriteToLog("=====================================================================================");
            Logger.WriteToLog("Source file={0}\n", script.FullPath);
 //           Logger.WriteToLog("Possible CHECK#s={0}\n", script.PossibleChecksCount.ToString());
 //           Logger.WriteToLog("Actual CHECK#s found={0}\n", script.Checks.Length.ToString());
            Logger.WriteToLog("Destination(s)=");
            if (script.Id == "")
            {
                Console.Write(script.Header);
                Console.WriteLine();
            }

  //          OutputFileCounter = OutputFileCounter + script.ConvertedFileCount;
  //          foreach (string check in script.Checks)
  //          {
                string[] args = { script.Header,script.Id, script.SectionName, InsertStringEscapes(script.Description), script.ReplicationCode, body, preCondition };
 //               ++fileCounter;
//                if (script.Checks.Length > 1)
 //               {
 //                   destFullPath = Path.Combine(destDir, string.Format(@"{0}-{1}.js", script.Id, fileCounter.ToString()));
 //                   args[0] = args[0] + "-" + fileCounter.ToString();
//                }
//                else
//                {
                    destFullPath = Path.Combine(destDir, string.Format(@"{0}.js", script.Id));
//                }
                try
                {
                    buildContent = string.Format(template, args);
                    string dirPath = Path.GetDirectoryName(destFullPath);
                    if (!Directory.Exists(dirPath))
                        Directory.CreateDirectory(dirPath);
                    using (TextWriter writeTestCase = File.CreateText(destFullPath))
                    {
                        writeTestCase.WriteLine(buildContent);
                        writeTestCase.Flush();
                        writeTestCase.Close();
                        OutputFileCounter++;
                    }
                    Logger.WriteToLog(destFullPath);
                }
                catch (ArgumentException ex)
                {
                    Logger.WriteToLog(ResourceClass.IOException, ex.Message);
                }
                catch (IOException ex)
                {
                    Logger.WriteToLog(ResourceClass.IOException, ex.Message);
                }
 //           }
        }

        private static string WrapWithEval(string s)
        {
            return InsertStringEscapes(s, true);
        }

        private static string InsertStringEscapes(string s, bool wrapWithEval=false)
        {
            StringReader rdr=new StringReader(s);
            StringWriter wtr = new StringWriter();
            int intChar;
            char nextChar;
            if (wrapWithEval) wtr.Write("eval(\"");
            while (true)
            {
                intChar = rdr.Read();
                if (intChar == -1) break;
                nextChar = Convert.ToChar(intChar);
                switch (nextChar)
                {
                    case '\\':
                    case '\'':
                    case '"':
                        wtr.Write('\\');
                        wtr.Write(nextChar);
                        break;
                    case '\n':
                        wtr.Write("\\n");
                        break;
                    case '\r':
                        wtr.Write("\\r");
                        break;
                    case '\u2028':
                        wtr.Write("\\u2028");
                        break;
                    case '\u2029':
                        wtr.Write("\\u2029");
                        break;
                    default:
                        wtr.Write(nextChar);
                        break;
                }
            }
            if (wrapWithEval) wtr.Write("\")");
            return wtr.ToString();
        }

        /// <summary>
        /// Method to read the templates which are used to generate a ES5 format files.
        /// </summary>
        /// <returns></returns>
        private static string GetTemplateFile(string configSetting)
        {
            string inputTemplatePath = ConfigurationManager.AppSettings[configSetting].ToString();
            return  (new StreamReader(inputTemplatePath)).ReadToEnd();
        }
    }
}
