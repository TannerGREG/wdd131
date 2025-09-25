const newP = document.createElement("p");
newP.textContent = "This is a new paragraph was added by Javascript.";
document.body.append(newP);

const newImg = document.createElement("img");
newImg.src ='https://picsum.photos/200';
newImg.alt ='Random Image';
document.body.append(newImg);

const myList = ["one","Two","Three"];
const newDiv = document.createElement("div");
newDiv.innerHTML = " <ul>

"