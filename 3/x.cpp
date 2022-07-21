#include <iostream>
#include <conio.h>
using namespace std;
string uncensor(string find, string missing);
int main()
{
    string find = "";
    string missing = "";
    cout << "Enter complete sentence :";
    getline(cin, find);
    cout << "Enter missing vowels :";
    getline(cin, missing);
    string complete = uncensor(find, missing);
    cout << complete;
    return 0;
}
string uncensor(string find, string missing)
{
    int j = 0;
    for (int i = 0; i < find.length(); i++)
    {
        if (find[i] == '*')
        {
            find[i] = missing[j];

            j++;
        }
    }
    return find;
}