
import "./mystyles.css";
const logoImg = require("./content/logo_1.png");


let sampleNummber : number = null;

const sampleNummer = 6;
console.log(`hello from sample ${sampleNummer}`);

const img = document.createElement("img");
img.src=logoImg;

document.getElementById('imgContainer').appendChild(img)