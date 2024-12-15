/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    else{
         let xString = x.toString();
         let reversexString = xString.split("").reverse().join("");
         return xString === reversexString;
    }
};