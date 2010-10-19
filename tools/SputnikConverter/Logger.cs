using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Configuration;

namespace Microsoft.Sputnik.Interop.ParserEngine
{
    public class Logger
    {
        private static string logFileDir = string.Empty;
        private StreamWriter writer;

        private static Logger logger;

        private Logger()
        {
            logFileDir = ConfigurationManager.AppSettings[ResourceClass.LogFileDirectorySettingKey].ToString();
            string filename = Path.Combine(logFileDir, string.Concat(DateTime.Now.ToString("MM-dd-yyyy"), ".log"));
            writer = File.CreateText(filename);
        }

        private static Logger GetLoggerInstance()
        {
            if (logger == null)
            {
                logger = new Logger();
            }
            return logger;
        }

        public static void WriteToLog(string logText)
        {
            Logger logger = GetLoggerInstance();
            logger.Write(logText);
        }

        private void Write(string logText)
        {
            try
            {
                writer.WriteLine(logText);
            }
            catch (IOException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }


        private void Write(string format, params string[] args)
        {
            try
            {
                writer.WriteLine(format, args);
            }
            catch (FormatException ex)
            {
                Console.WriteLine(ex.Message);
            }
            catch (IOException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        /// <summary>
        /// Method to write execution progress information to the log file
        /// </summary>
        /// <param name="format">The format.</param>
        /// <param name="args">The args.</param>
        public static void WriteToLog(string format, params string[] args)
        {
            Logger logger = GetLoggerInstance();
            logger.Write(format, args);
        }

        public static void Dispose()
        {
            Logger logger = GetLoggerInstance();
            logger.DisposeWriter();
        }

        private void DisposeWriter()
        {
            if (writer != null)
            {
                writer.Dispose();
            }
        }
    }
}
