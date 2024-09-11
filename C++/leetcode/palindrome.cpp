#include <iostream>
#include <vector>

using namespace std;

bool isPalindrome(int x);

int main() 
{
  cout<<isPalindrome(121);
  return 0;
}

bool isPalindrome(int x) {
    // if the number is negative or is a multiple of 10
    if(x<0 || (x != 0 && x%10 == 0)){
        return false;
    }else if(x<10){
        return true;
    }else{
        int rev = 0;
        while(x > rev){
            rev = rev * 10 + x % 10;
            x/=10;
        }
        //need to check the not even numbers such as 121 and eliminate the center digit from the comparison
        return (x == rev) || (x == rev / 10);
    }
}