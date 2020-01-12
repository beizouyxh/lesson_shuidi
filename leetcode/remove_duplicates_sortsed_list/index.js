//删除排序数组中的重复项
var removeDuplicates = function(nums) {
    const size = nums.length; //计算数组长度
    // console.log(size);
    let slowP = 0; //慢指针
    for (let fastP = 0; fastP < size; fastP++) { //快指针
        // console.log(nums[fastP]);
        if (nums[fastP] != nums[slowP]) { //从同一个位置0
            slowP++; //不一样
            //slowp 挪窝了，新的位置确立新的数，cur指向的数
            nums[slowP] = nums[fastP]; //设置每个位置，不重复的数，确立了地位

        }
    }
    return slowP + 1; //slowP 停下来的地方

}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))