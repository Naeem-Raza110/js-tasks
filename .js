// 3. Fetching Data from an API

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
}

fetchData();
// 4. Error Handling with try/catch

async function getDataWithErrorHandling() {
  try {
    let response = await fetch('https://nonexistent-api.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getDataWithErrorHandling();
// 5. async/await with Multiple Promises

async function getMultipleData() {
  const [post1, post2] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/posts/2').then(res => res.json())
  ]);

  console.log(post1, post2);
}

getMultipleData();
// 6. Using await Inside a Loop

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function processNumbers() {
  for (let i = 1; i <= 5; i++) {
    await wait(1000); // wait 1 second between each iteration
    console.log(i);
  }
}

processNumbers();
// 7. Chaining async Functions

async function getName() {
  return "John Doe";
}

async function greetUser() {
  let name = await getName();
  console.log(`Hello, ${name}!`);
}

greetUser(); // Output: "Hello, John Doe!"
// 8. Returning Promises with async/await

async function delayedPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
}

async function handlePromise() {
  let result = await delayedPromise();
  console.log(result);
}

handlePromise();
// 9. Handling Rejected Promises

async function fetchWithError() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/bad-url');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error caught:", error.message);
  }
}

fetchWithError(); // Output: "Error caught: 404"
// 10. async/await with Promise.race()

async function racePromises() {
  const p1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 won!"), 1000));
  const p2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 won!"), 500));

  let winner = await Promise.race([p1, p2]);
  console.log(winner); // Output: "Promise 2 won!"
}

racePromises();