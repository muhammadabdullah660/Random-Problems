using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;



namespace Problem
{
    internal class Program
    {
        static void Main()
        {
            string find = "";
            string missing = "";
            Console.WriteLine("Enter complete sentence :");
            find = Console.ReadLine();
            Console.WriteLine("Enter missing vowels :");
            missing = Console.ReadLine();
            string complete = uncensor(find, missing);
            Console.WriteLine(complete);
        }
        static string uncensor(string find, string missing)
        {
            int j = 0;
            char[] findArray = find.ToCharArray();

            for (int i = 0; i < find.Length; i++)
            {
                if (findArray[i] == '*')
                {
                    findArray[i] = missing[j];

                    j++;
                }
            }
            find = new string(findArray);
            return find;
        }
    }
}
