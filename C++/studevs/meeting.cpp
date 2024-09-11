/*
N boss in meeting
same time for each speech
1 minute pause

1 z N z 100     number of directors
1 z K z 1000    K x= N  duration of the meeting
*/
#include <iostream>

using namespace std;

int main() {
    int n,k;
    cin>>n;
    cin>>k;
    if(n == 1){
        cout<<k;
    }else if(n == 0){
        cout<<0;
    }else{
        int maxL = k - (n - 1); // subtract (n - 1) pauses of 1 minute each
        int len = maxL / n; // calculate length of each speech
        cout << len;
    }
    return 0;
}