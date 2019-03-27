import "../styles/index.scss";

console.log("webpack starterkit");

const images = ["1.jpg", "2.jpg", "3.jpg", "4.png"];
const random = items => items[Math.floor(Math.random() * items.length)];

const el = document.createElement("img");

let image = "";

const getImage = (imageElement, images) => {
  image = random(images.filter(i => i !== image));
  imageElement.src = `./public/images/${image}`;
};

const wrapper = document.getElementById("place");
wrapper.appendChild(el);
wrapper.onclick = () => getImage(el, images);

getImage(el, images);
