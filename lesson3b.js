// while loop 
// used when the length of items is not known 
// structure :
// 1.initialization of variable 
// while keyword 
// condition to be checked 
// increment/decrement 

// let i=0;
// while(i<=10){
//     console.log(i)
//     i++
// }
// let num=10;
// while(i>=1){
//     console.log(i)
//     i--
// }
let i=1797
while(i<1810){
    if (i%4==0 )
    {
        console.log("The leap year is:",i)
    }
    else if(i%400==0){
console.log("The year is a leap year")
    }
    else if(i%100==0){
console.log(i)
    }
    else{
        console.log(i)
    }
   
    i++
}
