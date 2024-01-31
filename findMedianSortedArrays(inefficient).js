
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {

    let len1 = nums1.length; 
    let len2 = nums2.length;
    
    totNums = nums1.concat(nums2);
      totNums.sort(function(a, b) {
    return a - b;
});
    
    
    let newLength = totNums.length; 
    
    if(newLength % 2 === 0 ) {
        let halfWay = newLength/2 -1;
        let sum = totNums[halfWay] + totNums[halfWay + 1];
        
        return sum/2
    } else {
        console.log(totNums);
        console.log(Math.floor(newLength/2));
        return totNums[Math.floor(newLength/2)];
    }  
};