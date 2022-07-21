#include <iostream>
#include <conio.h>
using namespace std;
int main()
{
    char original[] = "Exam  is   so      easy!";
    cout << "Raw String :" << original << endl;
    char required[] = "";
    int i = 0;
    int j = 0;
    while (original[i] != '\0')
    {
        required[j] = original[i];

        if (original[i] == ' ')
        {
            while (original[i + 1] == ' ')
            {
                // skip over any extra spaces
                i++;
            }
        }

        j++;
        i++;
    }
    // null-terminate output
    required[j] = '\0';
    cout << "required String :" << required;
    return 0;
}
