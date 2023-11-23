//function


//Arithmatic , Geometric or No pattern
function mathsequences(arr){
let arith =new Set();
let geo =new Set();

for(let i=1;i<arr.length;i++){
    let number = arr[i]-arr[i-1];
    arith.add(number);
    let number2 = arr[i]/arr[i-1];
    geo.add(number2);
}
if(arith.size=== 1){
    return `Arithmatic`;
}
if(geo.size=== 1){
    return `Geometric`;
}
return -1;

}
console.log(mathsequences([2,4,6,8]));//Arithmatic
console.log(mathsequences([3,9,27]));//Geometric
console.log(mathsequences([2,314,24]));//-1
