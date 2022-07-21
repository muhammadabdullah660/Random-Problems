#include <iostream>
#include <conio.h>
using namespace std;
int trim(char *original);
int main()
{
    char original[] = "Exam   is    so      easy!";
    cout << "Raw String :" << original << endl;
    int count = trim(original);
    cout << "String after removing spaces : " << original << endl
         << "Count is : " << count;

    return 0;
}
int trim(char *original)
{
    int i = 0;
    int j = 0;
    int count = 0;
    while (original[i] != '\0')
    {
        original[j] = original[i];

        if (original[i] == ' ')
        {
            while (original[i + 1] == ' ')
            {
                // skip over any extra spaces
                i++;
                count++;
            }
        }

        j++;
        i++;
    }
    // null-terminate output
    original[j] = '\0';
    return count;
}