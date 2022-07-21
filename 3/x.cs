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
            int[] array = new int[] { 1, 1, 2, 3, 3, 3, 4, 5, 6, 6 };
            rptUnrpt(array);
        }
        static void rptUnrpt(int[] array)
        {
            int count = 0;
            int j = 0;
            for (int i = 0; i < array.Length; i += count)
            {
                //yi += count;
                count = 0;
                for (j = i + 1; j < array.Length; j++)
                {
                    if (array[i] == array[j])
                    {
                        count++;

                    }
                }
                for (int x = 0; x < count; x++)
                {
                    Console.Write(array[i]);

                }

                //Console.WriteLine();
            }

        }
    }
}
