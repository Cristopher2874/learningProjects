#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() 
{
  int target = 6;
  vector<int> nums = {3,2,4};
  vector<int> result;
 
  for(int i = 0; i<nums.size(); i++){
    int complement = target - nums[i];
    auto it = find(nums.begin()+i+1, nums.end(), complement);
    if(it != nums.end()){
        result.push_back(i);
        result.push_back(distance(nums.begin(), it));
        break;
    }
  }
  for(int i : result) {
    cout << i << " ";
  }
  return 0;
}

vector<int> twoSum(vector<int>& nums, int target){
    vector<int> result;
    
    for(int i = 0; i<nums.size(); i++){
        int complement = target - nums[i];
        auto it = find(nums.begin()+i+1, nums.end(), complement);
        if(it != nums.end()){
            result.push_back(i);
            result.push_back(distance(nums.begin(), it));
            break;
        }
    }
    return result;
}