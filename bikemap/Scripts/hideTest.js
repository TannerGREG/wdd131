

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  return x
}
const apiKey = getText(" .env");
console.log(apiKey);



