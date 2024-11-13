//Count Digits
// Input:N = 12345
// Output:5

const countDigits = (n) => {
    let numStr = n + ""
    let len = numStr.split("")
    return len.length
}

// console.log(countDigits(7789))

//Reverse number
// Note: If a number has trailing zeros, then its reverse will not include them. For e.g., reverse of 10400 will be 401 instead of 00401.

// Input:N = 12345
// Output:54321

const reverseNumber = (n) => {
    let strNum = n + ""
    let strArr = strNum.slice("")
    let res = []
    let left = 0 

    for (let i=strArr; i>=0; i--){
        if(strArr[left] === "0"){
            left += 1 
        }
       else {
        res.push(strArr[left])
       }
    }
    return res.join("")
}

console.log(reverseNumber(10400))