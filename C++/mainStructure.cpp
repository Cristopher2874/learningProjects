//library definition
#include<iostream>
#include<vector>

//name space
using namespace std;

// function skeleton
float f1(int, char);
char f2(int, float);
void f3();

//structures defined
vector<int> array1;

//global variables and constants
const float PI = 3.141596;

//main program
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