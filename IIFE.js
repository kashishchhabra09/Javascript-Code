(() => {
  console.log("Hello");
})();

function IIFE() {
  (() => {
    console.log("This is IIFE");
  })();
}
IIFE();
