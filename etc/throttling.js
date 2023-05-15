window.addEventListener("resize", trottleFn(handleWindowResize, 5000));

function handleWindowResize() {
  console.log("I'm working now!");
}

function trottleFn(callbackFn, timer) {
  let flag = true;
  return function () {
    if (flag) {
      callbackFn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, timer);
    }
  };
}
