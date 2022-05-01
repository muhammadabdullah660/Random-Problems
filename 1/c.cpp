#include <iostream>
#include <conio.h>
using namespace std;
int main()
{
    string input = "";
    cout << "Enter any string of alphabets: " << endl;
    cin >> input;
    for (int i = 0; i < input.length(); i++)
    {
        if (input[i] >= 97 && input[i] <= 97 + 26)
        {
            cout << input[i] - 96;
        }
        else if (input[i] >= 65 && input[i] <= 65 + 26)
        {
            cout << input[i] - 64;
        }
        cout << ',';
    }
    return 0;
}
