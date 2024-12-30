import foo from "./foo";

console.log("Hello World from JS&TS");

foo();

const image = document.getElementById("theImage") as HTMLImageElement;
const button = document.getElementById("buttonActual") as HTMLButtonElement;
button.addEventListener("click", function () {
  button.onclick = () => {
    image.src =
      "https://cdn.shopify.com/s/files/1/0106/1539/0266/files/Collection_Banner_b9a9c9fb-6540-4032-bfaa-5bb6ef163392.jpg?v=1642797548";
  };
});
