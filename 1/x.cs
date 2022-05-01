using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;



namespace Problem1
{
    internal class Program
    {
        static void Main()
        {
            string input = "";
            Console.WriteLine("Enter any string of alphabets: ");
            input = Console.ReadLine();
            for (int i = 0; i < input.Length; i++)
            {
                if (input[i] >= 97 && input[i] <= 97 + 26)
                {
                    Console.Write(input[i] - 96);
                }
                else if (input[i] >= 65 && input[i] <= 65 + 26)
                {
                    Console.Write(input[i] - 64);
                }
                Console.Write(',');
            }
        }
    }
}
