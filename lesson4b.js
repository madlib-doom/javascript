// Functions with parameters
 function greet(name){
    console.log("Hello ",name,". How have you been")
 }
 greet("Aaron")

 function country(c){
    console.log("My favourite country is:",c)
 }
 country("Kenya")
 country("Uganda")
 country("SA")

 function sum(num1,num2,num3){
    let total=num1+num2+num3
    console.log('The total is:',total)
 }

 sum(10,10,3)
 sum(499,893,883)

 function interest(principle,rate,time){
    let simple=(principle*rate*time)/100
    console.log("Your interst is:",simple)
 }
 interest(20000,7,9)
 interest(40000,7.8,12)
 interest(170000,12,8)