//Make a pattern like this
// *****
// *****
// *****
// *****
// *****

const firstPattern = (n) => {
    for (let i=0; i<n; i++){
        let row = ''
      for (let j = 0; j < n; j++){
            row += "*"
        }
        console.log(row)
    }
    
}

// firstPattern(5)

//Second Patter
// *
// **
// ***
// ****
// *****

const secondPatter = (n) => {
    for(let i=1; i<=n; i++){
        let row = ""
        for(let j=1; j<=i; j++){
            row += j
        }
        console.log(row)
    }
}

// secondPatter(5)

//third Patter
// 1
// 22
// 333
// 4444
// 55555

const thirdPatter = (n) => {
    for(let i=1; i<=n; i++){
        let row = ""
        for(let j=1; j<=i; j++){
            row += i
        }
        console.log(row)
    }
}

// thirdPatter(5)

//fourth patter
const fourthPatter = (n) => {
    for(let i=n; i>=1; i--){
        let row = ""
        for(let j=1; j<=i; j++){
            row += j
        }
        console.log(row)
    }
}

// fourthPatter(5)