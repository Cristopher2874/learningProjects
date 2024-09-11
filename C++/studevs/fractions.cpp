/*
1 z n z 40
*/

#include <iostream>

using namespace std;

int n, a=1, b=2,c;

int main() {
    
    cin>>n;
    if(n==0||n==1){
        cout << 1;
    }else{
        for(int i=2; i<n; i++){
                c = a+b;
                a = b;
                b = c;
            }
        cout << b;
    }
    return 0;
}