/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    
    let record = 0;
    let flag = 0;
    let subStrArr = [];
    
    for(let i = 0; i < s.length; i++) {
        for(let j = i+1; j < s.length + 1; j++) {
            let newSubStr = s.substring(i,j);
            subStrArr.push(newSubStr);
        }
    }
     
    for(let ss of subStrArr) {
        flag = 1;
            for(let k = 0; k < ss.length; k++) {
                for(let l = k + 1; l < ss.length; l++) {
                    if(ss[k] === ss[l]) {
                        flag = 0;
                        break;
                    } 
                }
            }
            if(flag === 1 && ss.length > record) {
                    record = ss.length;
                }
        }
        return record;
};