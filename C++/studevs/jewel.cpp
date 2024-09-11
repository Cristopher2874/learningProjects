/*
1 z n z 40
*/

#include <iostream>

using namespace std;

int n, c, e1, e2, e3, e4;


int main() {
    cin>>n;
    int arr[n][n];
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
           cin>>c;
           arr[i][j] = c;
        }
    }
    e1 = arr[0][0];
    e2 = arr[0][n-1];
    e3 = arr[n-1][0];
    e4 = arr[n-1][n-1];
    if(e1>e2&&e1>e3&&e1>e4){
        cout<<2;
    }else if(e4>e1&&e4>e2&&e4>e3){
        cout<<0;
    }else if(e2>e1&&e2>e3&&e2>e4){
        cout<<3;
    }else{
        cout<<1;
    }

    return 0;
}