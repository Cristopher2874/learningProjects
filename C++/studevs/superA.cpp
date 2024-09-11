/*
1 z n z 40
*/

#include <iostream>
#include <vector>
#include <cstring>

using namespace std;

int main() {
    int n, g;
    cin >> n;
    cin >> g;
    vector<vector<char>> arr(n, vector<char>(g));
    vector<int> police;
    vector<int> place;
    int a = 0; // Initialize a to 0

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < g; j++) {
            char c;
            cin >> c;
            arr[i][j] = c;
            if (arr[i][j] == 'G') {
                police.push_back(i);
            }else if (arr[i][j] == '.') {
                place.push_back(i);
            }
        }
    }
    cout << place.back();
    return 0;
}

/*Entrada
5 5
G..#.
##.G.
G...#
....#
#####*/