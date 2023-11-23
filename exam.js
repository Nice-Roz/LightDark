"use strict"
// console.log('Hello Javascript world');
//var x = 2*27/3;
//console.log(x)
// 
// var i,j;
// var str = '';
// for(i=1;i<=5;i++){
    // for(j=1;j<=i;j++){
        // str+='*';
    // }
    // str+='\n';
// }
// console.log(str);
// console.log("-------------");
// var star='';
// var x,y;
// for(x=1;x<=5;x++){
    // for(y=5;y>=x;y--){
        // star+='*';
    // }
    // star+='\n';
// }
// console.log(star);
// console.log("-------------");
// 
// var result = '';
// var em,sr,p;
// for(p=1;p<=5;p++){
    // for(em=5;em>p;em--){
        // result+=' ';
    // }
        // for(sr=1;sr<=p;sr++){
            // result+='*'
        // }
    // 
    // result+='\n';
// }
// console.log(result);
// console.log("-------------");
// 
// var res = '';
// var e,s,b;
// for(b=1;b<=5;b++){
    // for(s=1;s<b;s++){
        // res+=' '
// }
// 
    // for(e=5;e>=b;e--){
        // res+='*';
    // }
    // res+='\n';
// }
// console.log(res);
// console.log("-------------");
// 
// const array =[1,23,true,'rozita'];
// array.splice(1,2,'milad','coding');
// console.log(array);
// const array1 =[1,23,true,'rozita'];
// const array2 = array1.slice(1,3)
// console.log(array2);
// console.log(array1);
// const array3 =[1,23,true,'rozita'];
//array3.splice(1);
// console.log(array3);
// const array4=array3.slice(1);
// console.log(array4);
// 
// const array_sort =['rozita','NazirAhamad','ramin','Yousufi','Homaira'];
// console.log(array_sort);
// array_sort.sort();
// console.log(array_sort);


//  const milad={};
//  milad.firstName = 'rozita';
//  console.log(milad);
//  milad.lastName='yousufi';
//  console.log(milad);
//  milad.coding=function(){
    // return 'rozita is coding';
//  }
//  console.log(milad);

//  const rozita ={};
//  const myObject = rozita;
//  console.log(rozita);
//  myObject.age=25;
//  console.log(rozita);

 //FOR of is for arrays
//  let myArray = [12,34,54,65,22,33];
//  for(let i = 0 ; i<=myArray.length-1;i++){
    // console.log(myArray[i]);
//  }
// console.log('----------')
//  for(let element of myArray){
    // console.log(element);
//  }

 //FOR in si for Objects

//  const myObject2 = {
    // Name : 'Rozita',
    // lastName : 'Yousufi',
    // age : 21,
    // coding :function(){
        // return 'rozitaIS CODING';
    // }
//  }
//  console.log(myObject2['Name']);
//  for(let x in myObject2){
    // console.log(myObject2[x]);
//  }


//---------------------------------------HW---------------------------------------

//FIRST HW
console.log("-- First HW --");
let country = 'Afghanistan';
let contienent ='Asia';
let population = 34e6;
console.log(country,contienent,population); 
const islsland =false;
let language ;
console.log(typeof country,typeof contienent,typeof population,typeof islsland,typeof language);

//SECOND HW
console.log("\n-- Second HW --");
var a =3;
var b =8;
var c = a;
a=b;
b=c;
console.log('a is '+a);
console.log('b is '+b);

//Third HW
console.log('\n-- Third HW & Fourth --');
let sonita_weights = 78;
let sonita_height = 1.69;
let sapida_wights = 92;
let sapida_heights = 1.95;
const sapida_BMI = (sapida_wights/(sapida_heights**2)).toFixed(2);
const sonita_BMI = sonita_weights/(sonita_height**2);
let higher_BMI = (sapida_BMI>sonita_BMI)? 
console.log(`Sonita's BMI(${sonita_BMI}) is higher than Sapidah's(${sapida_BMI})`):
console.log(`Sapidah BMI(${sapida_BMI}) is higher than Sonita's(${sonita_BMI})`);
//console.log(`Has sonita heigher BMI than sapideh ? ${higher_BMI}`);
//Fourth HW
if(sapida_BMI>sonita_BMI)
console.log('sapidah bmi is heigher than sonita');
else 
console.log('sonita bmi is higher than sapidah');

//FIFTH HW
console.log('\n-- Fifth HW --');
let avg_fahim = (96+108+89)/3;
let avg_zobair = (88+91+110)/3;
if(avg_fahim>avg_zobair && avg_fahim>=100)
console.log(`fahim win ${avg_fahim}`);
else if(avg_fahim<avg_zobair && avg_zobair>=100)
console.log(`Zobair win ${avg_zobair}`);
else if(avg_fahim===avg_zobair && avg_fahim>=100 && avg_zobair>=100)
console.log(`Both draw`);
else
console.log(`No throphy`);

//SIXTH HW
console.log('\n-- Sixth HW --');
let bill =275;
let tip = (bill>=50 && bill<=300)? bill*15/100 : bill*20/100;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill+tip}` );


//Seventh HW
console.log('\n-- Seventh HW --');
function aboutMyCountry(countryName, countryPopulation,capital){
    return `${countryName} has ${countryPopulation} million people and it's capital city is  ${capital}`
}

let afg = aboutMyCountry('Afghanistan',34,'Kabul');
console.log(afg);

//Eight HW
console.log('\n-- Eight HW --');
function MyCountry(countryName, countryPopulation){
    return `${countryName} has ${countryPopulation} million people,`
}
    let world_people = 7900;
function preOfUniverse1(population){
    let fun = MyCountry('Afghanistan',population);
   let percentage = (population/7900)*100;
    return `${fun} and it has ${percentage} of world's percentage`;
}
let dec_fun = preOfUniverse1(34);
console.log(dec_fun);
