#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<string> list1 = {"hola", "hojamiento", "hole", "honoresalabandera", "holograma", "human"};

string longestCommonPrefix(vector<string>& strs);

int main() 
{
  string longest = *max_element(list1.begin(), list1.end(), [](const string& a, const string& b) {
    return a.length() < b.length();
  });

  string lst2 = longest;
  
  for (int i = 0; i < list1.size(); i++) {
    string temp = list1[i];
    if(temp==lst2){continue;}

    if(longest.size()<=temp.size()){
      temp.erase(longest.size());
    }

    while(longest != temp){
      if (longest.size()>=temp.size()) {
        longest.pop_back();
      }else{
        temp.pop_back();
      }
    }
  }
  cout<<longestCommonPrefix(list1);
  return 0;
}

string longestCommonPrefix(vector<string>& strs) {
  if (strs.size()==0) return ""; //add base case, use the if instead of empty for time reasons
  if(strs.size()==1) return strs[0];

  const string& longest = strs[0]; //reference to save memory usage of the string needed.

  for (size_t j = 0; j < longest.size(); ++j) { //move through the first string
    for (size_t i = 1; i < strs.size(); ++i) { //compare the first letter from the string to the letter of each word
      if (strs[i][j] != longest[j]) {
        return longest.substr(0, j); // if there is a difference in any word, there is no need to continue
        //use of substr for remain without changes
      }
    }
  }

  return longest;
}