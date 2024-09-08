#include<iostream>
#include<vector>

using namespace std;

vector<int> array1;

int main(void){
    int n;
    cout<<"Insert a number: ";
    cin >> n;
    for(int i=0; i<n; i++){
        array1.push_back(i);
    }
    array1.push_back(n);
    cout<<"Example: "<<n<<"\n";
    cout<<array1.size()<<"\n";
    for(int i=0; i<array1.size();i++){
        cout<<array1[i]<<" ";
    }
    return 0;
}