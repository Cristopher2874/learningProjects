#include <iostream>
#include <map>
#include <unordered_map>

using namespace std;

string num;
int sum,idx;

int main() 
{
  map<char, int> key;
  key['I']=1;
  key['V']=5;
  key['X']=10;
  key['L']=50;
  key['C']=100;
  key['D']=500;
  key['M']=1000;
  cin>>num;
  for(int i=0;i<num.size();i++){
    if(key[num[i]]<key[num[i+1]]){
      idx+=key[num[i+1]]-key[num[i]];
      i++;
    }else{
      idx+=key[num[i]];
    } 
  }
  cout<<idx;
  return 0;
}

int romanToInt(string s) {
    unordered_map<char, int> key;
    int idx=0;
    key['I']=1;
    key['V']=5;
    key['X']=10;
    key['L']=50;
    key['C']=100;
    key['D']=500;
    key['M']=1000;
    for(int i=0;i<s.size();i++){
        if(key[s[i]]<key[s[i+1]]){
            idx+=key[s[i+1]]-key[s[i]];
            i++;
        }else{
            idx+=key[s[i]];
        } 
    }
    return idx;
}