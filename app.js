//conditional  statemnts
// if statment  0dd/even
// else // false  statment ka leya istamal hota ha
// -> else if  statment -->
// switch statment --> excute karna ka leyu istamal hota ha
// tarnary oprators ---.compact
// a? b:c
// used to perform d/f action on the based of d/f condation //
//prompt
// alert
//if else
//  let age= 17;
//  if (age >= 18) {
//    console.log( "you can cast the vote");
//  }else{
//    console.log("you can not cost the vote ");}
//    ///2.
//    let data = 15;
//    if (data % 2 == 0){
//      console.log("even");
//    }else{
//      console.log("odd");
//    }
  //  let mode = "purple";
  //  let color;
  //  if (mode == "light"){
  //    color = "yellow";
  //    console.log("yellow ")
  //  }else if (mode == "red"){
  //      color = "red"
  //      console.log( color," red")
  //  }else if (mode == "green"){
  //    color = "red"
  //    console.log( color," green")
  //  }else {
  //    color = "white"
  //    console.log("white ")
  //  };



// let num = prompt("Enter a number:");

// if (num % 5 === 0){
//     console.log(num, " is multiple of 5");

// }else{
//     console.log(num, " is not multiple of 5");
// }

// let age= 20;

// if (age >= 18) {
//     console.log( "you can cast vote" );
// }else{
//     console.log( "you cannot cast vote" );

// }

// tarnary oprators ---.compact
// let num = prompt("Enter a number")
// let result = num % 5 == 0 ?  console.log(num, " is multiple of 5") :  console.log(num, " is not multiple of 5");



//switch statment
// let day = 1;
// switch (day) {
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("monday");
//     break;
//   case 3:
//     console.log("tuesday");
//     break;
//   case 4:
//     console.log("wednesday");
//     break;
//   case 5:
//     console.log("thursday");
//     break;
//   case 6:
//     console.log("friday");
//     break;
//   case 7:
//     console.log("saturday");
//     break;
//   default:
//     console.log("invalid day");
// }


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <link rel="stylesheet" href="styles.css" />
//   </head>
//     <body class="light-mode">
//       <button onclick="toggleMode()">Toggle Mode</button>
//       <script src="script.js"></script>
//   </body>
// </html>
// //css code
// body.dark-mode {
//     background-color: #333;
//     color: #fff;
//   }
//   body.light-mode {
//     background-color: #fff;
//     color: #000;
//   }
// //js code.
// // Data types
// // number
// //sting
// //boolean
// //undefined
// //conditional  statemnts
// // -> if statment  0dd/even
// // else // false  statment ka leya istamal hota ha
// // -> else if  statment -->
// // switch statment --> excute karna ka leyu istamal hota ha //weekdaay/
// // tarnary oprators ---.compact
// //a? b:c
// // used to perform d/f action on the based of d/f condation //
// //prompt
// // alert
// //if else
// // let age= 17;
// // if (age >= 18) {
// //   console.log( "you can cast the vote");//
// // }else{
// //   console.log("you can not cost the vote ");}//
// //   let data = 15;
// //   if (data % 2 == 0){
// //     console.log("even");
// //   }else{
// //     console.log("odd");
// //   }
// let mode = "preple";
// let color;
// switch (mode) {
//   case "yellow":
//     color = "yellow";
//     break;
//   case "red":
//     color = "red";
//     break;
//   case "green":
//     color = "green";
//     break;
//   default:
//     color = "white";
// }
// // alert(color);
// //tarnary oprators
// // let num = prompt("enter the number");
// // let result = num % 5 == 0 ? "multiple of the five " : "oNOT a multiple of the five ";
// // console.log(result);
// // switch statment
// let day = 0;
// console.log("please enter a relevant day(1-7)");
// switch (day) {
//   case 0:
//     //  alert("monday")
//     break;
//   case 1:
//     console.log("tuesday");
//     break;
//   case 2:
//     console.log("thursday");
//     break;
//   case 3:
//     console.log("friday");
//     break;
//   case 4:
//     console.log("saturday");
//     break;
//   case 5:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("invalid day");
//     break;
// }

// let num = prompt("enter the number");
// let result =
//   num % 5 == 0
//     ? console.log("multiple of the five ")
//     : console.log("oNOT a multiple of the five ");





/////////////loops //////
// let num = 0 ;
// for (let i = 1; i <= 5; i++) {
//   num += i;
// }
// alert(num);
// while loop//
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// do while loop
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 6);
//for in loop // string or arry use karta haa
// const obj = {a: 1, b: 4, c: 7};
// for (let prop in obj) {
//   console.log(prop + ': ' + obj[prop]);
// }
/// for of loop  ////  use karta ha object ka leya istamal hota ha
//  const arr = {
//   name : "sami",
//   age : 22 ,
//   clss : "10th"
//  };
//  for (let val in arr) {
//    console.log(val);
//  }
// for of loop
// const arr = [1, 2, 3];
// for (let val of arr) {
//   console.log(val);
// }
// let string = "hello";
// for (let val of string) {
//   console.log(val);
// }
// condation in loop/// task
//
//example2//m block scope and global scope
// let sum =0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
//   console.log(i);
// }
// let  i = 1;
// while(i <= 5) {
//   console.log(i);
//   i++;
// }
// do loop
// let i = 1;
// do {
//   console.log(i); /// sami collen lazmi ha .
//   i++;
// } while (i <= 5);
// dowhile loop
//  let i = 0;
//  do {
//    console.log(i);
//   i++;
//  } while (i <= 6);

// Q-1-print all even number form 0 to 100


// let num = 0;
// for (let i = 1; i <= 100;  i++) {
//   if(i % 2 == 0) {
//      console.log("even number" , i);
//   }else (i % 2 !== 0)  
//   {
//     console.log( "old number" , i);
//   }

// }


// let num = Number(prompt("Enter a first  number:"));
// let num2 = Number(prompt("Enter a second number"));
// if ((num) && (num2)){
//     console.log(num + num2);
// }
//or
// let num = (prompt("Enter the first number:"));
// let num2 =(prompt("Enter the second number:"));

// let result  = Number(num) +  Number(num2)
// alert(result);

// let num1 = Number(prompt("Enter the first number:"));
// let operator = prompt("Enter operator");
// let num2 = Number(prompt("Enter the second number:"));

// let result;

// switch (operator) {
//   case '+':
//     result = num1 + num2;
//     break;
//   case '-':
//     result = num1 - num2;
//     break;
//   case '*':
//     result = num1 * num2;
//     break;
//   case "/":
//     result = num1 / num2;

// }
// alert(result);

// let num = "i love you";
// for (let i = 1; i <= 100; i++) {
//   console.log(i + ": " + num);
// }

// let obj ={
//     name :"kash",
//     number:123,
//     age:19,
// }
// console.log(`name = ${obj.name}`)

///String Methods

// 1 .String length (is ma array ma sa one by one count karta ha )
// let text = ["fdhkv", "fss", "lkh"];
// let length = text.length;
// console.log(length);

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";(ya indexes ma kitna num ha count karta ha)
// let length = text.length;
// console.log(length);

//2.String charAt()  ()
// let text = "HELLO WORLD";
// let char = text.charAt(2);
// console.log(char);

/// 3.String Slice   (slice indexes ma jo num dia ha us sa phela wala nhi lata ha)
// let text = "fsfBananaKiwi";
// let part = text.slice(5);
// console.log(part);

// 4.at string (postive or negtive indexes karta ha)
// const name = "W3Schools";
// let letter = name.at(-1);
// console.log(letter);

// 5.concat string (ya two variables ko add karta ha)
// let text1 = "Hello";
// let text2 = "kjhgfd";
// let text3 = text2.concat( text1);
// console.log(text3);

//example (add concat and length)
//  let  text1 = prompt("Enter your name");
//  let text2 = "@";
//  let text3 = text2.concat(text1)
//  let text4 = text1.length;
//  alert(text3.concat(text4)); //or alert (text3.tex4)
 

 

// 6.trim string (trim string ma qutision or word ka dirman space ko khatam karta ha)
// let str = " Hello, World!   ";
// let trimmedStr = str.trim();

// console.log(trimmedStr); 



////Array methods
//1. tostring method
// let students = ["ali", "naeem", "nadeem"]

// console.log(students.toString);

//2.push method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let = fruits.push("Kiwi");
// alert(fruits)

 ///3.Array copyWithin()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 0);
// console.log(fruits);




////function 
///1.add to numbers
// function myfunction(a, b) {
//   return a + b ;
// }
// let result = myfunction(6, 5);

// console.log(result);

// let add = myfunction(4, -5)

// console.log(add);

///2.multiply two numbers
// function multiplyNumbers(a, b) {
// return a * b  ;
// }
// console.log(multiplyNumbers(4, 5)); 
//3. convertMinutesToSeconds
// function convertMinutesToSeconds(minutes) {
//   const seconds = minutes * 60;
//   return seconds; 
// }

// console.log(convertMinutesToSeconds(1));
// console.log(convertMinutesToSeconds(2)); 

//4.finds the largest 
// function findLargestNumber(a, b, c, e) {
//   const largest = Math.max(a, b, c, e);
//   return largest; 
// }
// console.log(findLargestNumber(3, 9, 6, 4));
// console.log(findLargestNumber(15, 8, 12, 5)); 


///arrrow function


// function arriow = (a, b, c, e) => {
//   let largest = Math.max(a, b, c, e);
//   return largest; 
// }
// console.log(findLargestNumber(3, 9, 6, 4)) ;
// console.log(findLargestNumber(15, 8, 12, 5)); 


// function countVowels(str) {
//   const vowels = 'aeiouAEIOU';
//   let count = 0;

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countVowels("Hello World")); 

///arrow function :
// const countVowelsArrow = (str) => {
//   const vowels = 'aeiouAEIOU';
//   let count = 0;

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countVowelsArrow("Hello World"));

// function getVowels(str) {
//   let vowelsInString = '';
//   const vowels = "aeiouAEIOU";
//   for (let char of str) {
//       if (vowels.includes(char)) {
//           vowelsInString += char;
          
//       }
//   }
//   return vowelsInString;
// }

// function getVowels(str) {
//   let vowelsInString = '';
//   for (let char of str) {
    
//     if (
//       char === 'a' || char === 'e' || char === 'i' || 
//       char === 'o' || char === 'u' || char === 'A' || 
//       char === 'E' || char === 'I' || char === 'O' || 
//       char === 'U'
//     ) {
//       vowelsInString += char;  // Concatenation happens here
//     }
//   }
//   return vowelsInString;
// }

// console.log(getVowels("Hello World"));


///array methods
//1.forEach method
// let num = [1, 2, 3, 4]  /////is ma array ko loop ma print karata ha
// num.forEach(function myfun(value){
// console.log(value **2);
// // or
// // console.log(vale * value);
// }
// )

////2.map merhod 
// let num = [1, 2, 3, 4]    /////map array ko nhi chata ha or new array banaka us ko print karta ha
// num.map(function myfun(value){
// console.log(value **2);
// })


//.3 filter method
// let num = [1, 2, 3, 4, 5, 6, 7,]    /////map array ko nhi chata ha or new array banaka us ko print karta ha
// let num1= num.filter((val)=>{
// return val % 2 ==0;  ////print even number
// })
// console.log(num1);


// 4.reduce method

// let num = [1, 2, 3, 4, 5, 6, 7, 12]    /////map array ko nhi chata ha or new array banaka us ko print karta ha
// let num1= num.reduce((total, num)=>{    /////total inatia valve ha or num us sa add ho ka ana wala value ha
// return total + num;                  ////print even number
// // return total > num ? total : num;      ///print larger number from above numbers
// })
// console.log(num1);


////////////////////////for each function in array////////////////
//  function abc (){
//   console.log("hellow")
//  }
//  function myfun(abc ){ //// uper us fucntion ko call kia ha isa  calback function khata ha ///  kese dusara function ko arhument ki tara pas kia ha isa ham callback function kahat ha
//   return abc ;
//  }
//  let array = ["ali " , "auhd" , "uadhwe" ,"ade"]
//  array.forEach( function myfun(val , indx , arr){ ///high oder function:kasi function ma dusira function ko add karna ko khata ha parrameter ka under add karta ha
//   console.log (val.toUpperCase() , indx ,arr)
//  });
////////////////////////////task ////////////////////////////
//  let arrnum  =[ 2 , 3 , 4, , 6 ];
//  arrnum.forEach( (num) =>{
//   console.log(num * num ) /////num **2
//  }
// )
/////////////////////////map method /////////////////////////////  simillar with the for each method but diffeeren is that it wil give new array
// let mapnum = [ 2 , 3 , 4, , 6 ];
// let result = mapnum.map( (num) =>{ // use to create new aarray with new value used based  return value
// return num * num ;
// });
// console.log(result)
//////////////////filter array //////////////////////////////////
// let filterNum = [ 2 , 3 , 4,  6  , 7, 8, 9, 0, 1];
// let result = filterNum.filter( (num) =>{
//     return num % 2 ===0 ;
// });
// console.log(result)
/////////////////////// reduce  arrya method /////////////////
// let reduceNum = [2, 3, 4, 6, 7, 8, 120, 0, 1];
// let result2 = reduceNum.reduce((total, num) => {
//     return  total > num ? total : num
//     // return total + num ;
// });
// console.log(result2);

///task

//Q1: Filter out the marks of students who scored 90+
// const marks = [88, 95, 73, 92, 85, 90, 99]; 
// const highScorers = marks.filter(mark => mark >= 90 & mark <= 100);
// console.log(highScorers);  
////Q2: Create an array of numbers from 1 to n (input from user)
// const n = parseInt(prompt("Enter a number: ")); 
// const numberArray = Array.from({ length: n }, (_, i) => i + 1);
// console.log(numberArray);  
//or
// let num =prompt("enter a number")
// let array = []

// for(let i = 1; i <= num; i++){
//   array.push(i);
// }
// console.log(array);


////Q4: Use the reduce method to calculate the product of all numbers in the array
// const numbers = [1, 2, 3, 4, 5]; 
// const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// console.log(product);  

///Q5: Use the reduce method to calculate the sum of all numbers in the array

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); 


// let marks =  [ 66 , 77 , 93 , 100 , 61 , 90 , 110] ;
//   let  result = marks.filter ((val) => {
//       return val >= 90 & val <= 100 ;
// });
// console.log(result);
// let num =  prompt("enter the number");
// let array = [];
// for (let i = 0; i <= num; i++) {
//     array.push(i); //'/  0 1 2 3 4 5
// }
// console.log(array);
let name  =  [ " ali " , " g " , " h"];
  let result2 = name.push(  "khan");
  console.log(name , result2 );
// let num2 = [ 1, 3,5 , 8 , 9];
// let result2 =  num2.reduce(( current , total) => {
//     return current  + total ; // 0 , 1 , 3 , 5 , 8 , 9  ... current
// })
// console.log(result2)

const container = document.getElementById('myContainer');

container.addEventListener('click', () => {
  console.log('You clicked me!');

});

container.addEventListener('dblclick', () => {
  console.log('You double-clicked me!');
});

container.addEventListener('mouseover', () => {
  console.log('You are hovering over me!');
});


container.addEventListener('mouseout', () => {
  console.log('You are no longer hovering over me!'); 
  
});

// const x = 1;
// x = 2;
// console.log(x);

