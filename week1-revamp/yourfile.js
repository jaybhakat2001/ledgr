// const demo = async ()=>{
//     console.log("Before Calling Fetch")
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const data = await res.json()
//     console.log("Got the data")
// }

// console.log("Before calling demo()");
// demo();
// console.log("2. This line runs before the fetch finishes!");


const getTodosSafely = async () => {
  try {
    const response = await fetch("https://not-a-real-site-at-all.fake/todos");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
};

getTodosSafely();