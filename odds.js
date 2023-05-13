let arr = [1,2,3,4,5,6,7,8,9,10]

// let odds = arr.filter(n => n%2)
let res=[]
// console.log(odds)
let odd= (arr)=>{
    for(let x of arr){
        if(x%2!=0){
            res.push(x)
            
        }
    }
    return res
}
console.log(odd(arr));
