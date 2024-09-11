/*
1 z n z 40
*/

#include <iostream>
#include <vector>
#include <set>

using namespace std;

int diff=0, temp, idx;

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
    set<int> set2(place.begin(), place.end());
    place.assign(set2.begin(), set2.end());

    set<int> set(police.begin(), police.end());
    police.assign(set.begin(), set.end());

    if(place.size()>police.size()){
        cout << place.back() <<"\n";
    }else if(place.size()<police.size()){
        cout << place[0] <<"\n";
    }else{
        for (int i = 0; i < place.size(); i++) {
            temp = place[i] - police[i];
            if(diff<temp){
                diff = temp;
                idx = i;
            }
        }
        cout<<idx;
    }
    return 0;
}