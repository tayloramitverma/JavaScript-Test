var message = "Hello, World!";

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  const isError = false;
  setTimeout(() => {
    if (isError) {
      reject("An error occurred in promise2");
    } else {
      resolve("Promise2 resolved successfully");
    }
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promise1
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

function handlePromises() {
    console.log("start");
  Promise.all([promise1, promise2, promise3])
    .then((responses) => {
      console.log("All promises resolved:", responses);
    })
    .catch((error) => {
      console.error("One of the promises failed:", error);
    })
    .finally(() => {
      console.log("All promises have been handled.");
    });
    console.log("end");
}

handlePromises();

console.log("message:", message);
