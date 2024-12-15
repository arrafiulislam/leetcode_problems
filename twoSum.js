/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let hashMap = new Map();

    for(let i = 0;i < nums.length;i++){
        let neededNum = target - nums[i];

        if(hashMap.has(neededNum)){
            return [ i, hashMap.get(neededNum)];
        }
        hashMap.set(nums[i], i);
    }
    
};