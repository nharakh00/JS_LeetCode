let addTwoNumbers = function(l1, l2) {
    
    let l1Str = "";
    let l2Str = "";
    
    for(let i = l1.length - 1; i >= 0; i-- ){
        l1Str += l1[i].toString();
    } for(let j = l2.length - 1; j >= 0; j--){
        l2Str += l2[j].toString();
    }
    
    let l1Num = parseInt(l1Str);
    let l2Num = parseInt(l2Str);
    let combNum = l1Num+l2Num;
    let combString = combNum.toString();
    let newLL = [];
    
    for(let k = combString.length - 1; k >= 0; k-- ) {
        newLL.push(parseInt(combString[k]));
    }
    
    return newLL;
    
};