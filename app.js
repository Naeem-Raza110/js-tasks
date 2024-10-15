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
// let name  =  [ " ali " , " g " , " h"];
//   let result2 = name.push(  "khan");
//   console.log(name , result2 );
// // let num2 = [ 1, 3,5 , 8 , 9];
// // let result2 =  num2.reduce(( current , total) => {
// //     return current  + total ; // 0 , 1 , 3 , 5 , 8 , 9  ... current
// // })
// // console.log(result2)

// const container = document.getElementById('myContainer');

// container.addEventListener('click', () => {
//   console.log('You clicked me!');

// });

// container.addEventListener('dblclick', () => {
//   console.log('You double-clicked me!');
// });

// container.addEventListener('mouseover', () => {
//   console.log('You are hovering over me!');
// });

// container.addEventListener('mouseout', () => {
//   console.log('You are no longer hovering over me!');

// });

// const x = 1;
// x = 2;
// console.log(x);
///todo app
// Get elements from the DOM
// const titleInput = document.getElementById('title');
// const descriptionInput = document.getElementById('description');
// const addButton = document.getElementById('addButton');
// const todoList = document.getElementById('todoList');

// let todos = [];
// let isEditing = false;
// let currentTodoId = null;

// // Function to render the todo list
// function renderTodos() {
//   todoList.innerHTML = ''; // Clear the list
//   todos.forEach(todo => {
//     const li = document.createElement('li');

//     const title = document.createElement('h2');
//     title.innerText = todo.title;

//     const description = document.createElement('p');
//     description.innerText = todo.description;

//     const editButton = document.createElement('button');
//     editButton.innerText = 'Edit';
//     editButton.onclick = () => editTodo(todo.id);

//     const deleteButton = document.createElement('button');
//     deleteButton.className = 'delete';
//     deleteButton.innerText = 'Delete';
//     deleteButton.onclick = () => deleteTodo(todo.id);

//     li.appendChild(title);
//     li.appendChild(description);
//     li.appendChild(editButton);
//     li.appendChild(deleteButton);

//     todoList.appendChild(li);
//   });
// }

// // Function to add a new todo
// function addTodo() {
//   const title = titleInput.value;
//   const description = descriptionInput.value;

//   if (title && description) {
//     if (isEditing) {
//       // Update the todo
//       todos = todos.map(todo => todo.id === currentTodoId ? { id: currentTodoId, title, description } : todo);
//       isEditing = false;
//       currentTodoId = null;
//     } else {
//       const newTodo = {
//         id: Date.now(),
//         title,
//         description
//       };
//       todos.push(newTodo);
//     }
//     titleInput.value = '';
//     descriptionInput.value = '';
//     renderTodos();
//   }
// }

// // Function to delete a todo
// function deleteTodo(id) {
//   todos = todos.filter(todo => todo.id !== id);
//   renderTodos();
// }

// // Function to edit a todo
// function editTodo(id) {
//   const todo = todos.find(todo => todo.id === id);
//   titleInput.value = todo.title;
//   descriptionInput.value = todo.description;
//   isEditing = true;
//   currentTodoId = id;
// }

// // Event listener for adding a todo
// addButton.addEventListener('click', addTodo);
// 2nd todo app
// let title = document.getElementById("title");
// let addbtn = document.getElementById("addbtn");
// let todolist = document.getElementById("todolist");
// let description = document.getElementById("description");
// let editTodo = null;
// addbtn.addEventListener("click", () => {
//   if (title.value == "") {
//     alert("Please enter a valid title");
//     return false;
//   }
//   if (description.value == "") {
//     alert("Please enter a valid description");
//     return false;
//   }
//   if (editTodo !== null) {
//     editTodo.querySelector(".title").textContent = title.value;
//     editTodo.querySelector(".description").textContent = description.value;
//     editTodo = null;
//     addbtn.innerText = "Add New Post";
//   } else {
//     const li = document.createElement("li");
//     const titleSpan = document.createElement("span");
//     titleSpan.classList.add("title");
//     titleSpan.innerText = title.value;
//     li.appendChild(titleSpan);
//     const descSpan = document.createElement("span");
//     descSpan.classList.add("description");
//     descSpan.innerText = description.value;
//     li.appendChild(descSpan);
//     const editBtn = document.createElement("button");
//     editBtn.innerText = "Edit";
//     editBtn.classList.add("editBtn");
//     li.appendChild(editBtn);
//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "Delete";
//     deleteBtn.classList.add("deleteBtn");
//     li.appendChild(deleteBtn);
//     todolist.appendChild(li);
//   }
//   title.value = "";
//   description.value = "";
// });
// const updateTodo = (e) => {
//   if (e.target.innerText === "Delete") {
//     e.target.parentElement.remove();
//   }
//   if (e.target.innerText === "Edit") {
//     editTodo = e.target.parentElement;
//     title.value = editTodo.querySelector(".title").textContent;
//     description.value = editTodo.querySelector(".description").textContent;
//     addbtn.innerText = "Update";
//     title.focus();
//   }
// };
// todolist.addEventListener("click", updateTodo);

////end todo app

// function hello() {
// }
// hello( console.log("hello1"));
// function hello2() {
// }
// hello( console.log("hello2"));

// function hello3() {
// }
// hello( console.log("hello3"));

// function showPrompt(message) {
//   return prompt(message);
// }
// alert(showPrompt("Enter something:"));

// async function showPrompt(message) {
//   return new Promise((resolve) => {
//     const userInput = prompt(message); // Synchronous prompt
//     resolve(userInput);  // Resolve the input
//   });
// }

// async function main() {
//   const result = await showPrompt("Enter something:"); // Wait for user input
//   alert(result);  // Display the result
// }

// main();  // Call the asynchronous function

// async function showPrompt(message) {
//   return new Promise((resolve) => {
//     const userInput = prompt(message);  // Synchronous prompt
//     resolve(userInput);  // Resolve the input
//   });
// }

// async function delayAlert(message, time) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       alert(message);  // Show alert after the delay
//       resolve();
//     }, time);  // Delay time in milliseconds
//   });
// }

// async function main() {
//   const result = await showPrompt("Enter something:");
//   await delayAlert(result, 2000);  // Delay of 3 seconds before showing the alert
// }

// main();  // Call the asynchronous function

// function getData(dataID, getNextData){
//   setTimeout(() => {
//     console.log("data" , dataID);
//     getNextData(dataID)

//   }, 2000);
// }

// getData(1, ()=>{
//   getData(2, ()=>{
//     getData(3, ()=>{})
//   })
// })

// function hello() {
//   console.log("hello");
// }
// setTimeout(()=>{
//   console.log("hello")
// }, 2000);

// function getData(dataID, getNextData){
//   setTimeout(()=>{
//     console.log("data",dataID);
//     getNextData();
//   },2000);
// }

// getData(1, ()=> {
//   getData(2)
// })

// const examplePromise = new Promise((resolve, reject) => {
//     let success = false;
//     console.log("Promise Status: Pending...");
//     if (success) {
//       setTimeout(() => resolve("Operation was successful!"), 4000);
//     } else {
//       setTimeout(() => reject("Operation failed!"), 3000);
//     }
//   });

//   examplePromise.then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((error) => {
//     console.log("Promise Status: Rejected");
//     console.log(error);

//   })

//   examplePromise.then((resolve) => {
//       console.log(resolve);
//     })
//     .catch((error) => {
//       console.log("Promise Status: Rejected");
//       console.log(error);
//     });

// let examplePromise =  Promise((resolve, reject) => {
//     examplePromise = "true ";
//     console.log("Promise Status: Pending...");
//     if (true) {
//         console.log("Promise Status: Resolved");
//     }
//     else (reject)
//     console.log("Promise Status: Rejected");
// })

// examplePromise.then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((error) => {
//     console.log("Promise Status: Rejected");
//     console.log(error);
//   });

// async function fetchApiData() {
//   try {
//     console.log("Requesting data from API...");
//     const data = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("API data received successfully!");
//       }, 3000);
//     });
//     console.log("Response:", data);
//   } catch (error) {
//     console.error("API Request Failed:", error);
//   }
// }
// fetchApiData();

///10 examples of JavaScript promises to help you understand how they work:

//1. Basic Promise Example
// let myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//       resolve("Task completed successfully");
//     } else {
//       reject("Task failed");
//     }
//   });

//   myPromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

///2. Promise with setTimeout

// let delayedPromise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Executed after 2 seconds");
//     }, 2000);
//   });

//   delayedPromise.then(result => console.log(result));

///3. Chaining Promises
// let chainPromise = new Promise((resolve) => {
//     resolve(10);
//   });

//   chainPromise
//     .then(result => result * 2)
//     .then(result => result + 5)
//     .then(result => console.log(result)); // Output: 25

/////4. Promise with fetch API
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log("Fetch error: ", error));

///5. Promise with async/await Syntax

// async function fetchData() {
//     try {
//       let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//       let data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   }

//   fetchData();

///6. Promise.all() Example
// let p1 = Promise.resolve(10);
// let p2 = new Promise((resolve) => setTimeout(() => resolve(20), 1000));
// let p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3])
//   .then(values => console.log(values)) // Output: [10, 20, 30]
//   .catch(error => console.log(error));

//7. Promise.race() Example
// let p1 = new Promise((resolve) => setTimeout(() => resolve("First!"), 500));
// let p2 = new Promise((resolve) => setTimeout(() => resolve("Second!"), 1000));

// Promise.race([p1, p2])
//   .then(result => console.log(result)); // Output: "First!"

//8. Rejecting a Promise

//   let rejectPromise = new Promise((resolve, reject) => {
//     reject("Error occurred");
//   });

//   rejectPromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error)); // Output: "Error occurred"

//9. Promise with AJAX (XHR Request)

// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//       let xhr = new XMLHttpRequest();
//       xhr.open("GET", url);
//       xhr.onload = () => resolve(xhr.responseText);
//       xhr.onerror = () => reject("Request failed");
//       xhr.send();
//     });
//   }

//   fetchData("https://jsonplaceholder.typicode.com/posts/1")
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

//10. Promise.finally() Example

// let examplePromise = new Promise((resolve, reject) => {
//     let isSuccess = true;
//     if (isSuccess) {
//       resolve("Success!");
//     } else {
//       reject("Failed!");
//     }
//   });

//   examplePromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Promise completed.")); // This runs whether resolved or rejected.





//10 examples of using async/await  illustrating how to work with asynchronous operations more cleanly:

///1. Basic async/await Example
// async function getData() {
//   return "Hello, World!";
// }

// getData().then(data => console.log(data)); // Output: "Hello, World!"



//2. Using await with setTimeout
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedMessage() {
  console.log("Waiting...");
  await delay(2000); // wait for 2 seconds
  console.log("2 seconds passed!");
}

delayedMessage();

