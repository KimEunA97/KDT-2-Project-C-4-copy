
import b from './array.js';

const root = document.getElementById('root');
let maindiv = document.createElement('div');
root.appendChild(maindiv);
root.children[0].style.width=`500px`;
root.children[0].style.height=`500px`;
root.children[0].style.display="flex";
root.children[0].style.justifyContent="space-between";

let makebutton = document.createElement('button');
root.appendChild(makebutton);
root.children[1].style.width=`200px`;
root.children[1].style.height=`200px`;


for(let a=0; a<4; a++){
  let itemdiv = document.createElement('img');
  root.children[0].appendChild(itemdiv)
  root.children[0].children[a].style.width=`250px`;
  root.children[0].children[a].style.height=`250px`;
}

let capArray = []
let shirtArray = []
let pantsArray = []
let shoesArray = []





root.children[0].children[0].src=`./image/남_모자/${b}`;
// root.children[0].children[1].src=`./image/남_상의/티셔츠.png`;
// root.children[0].children[2].src=`./image/남_하의/free-icon-jeans-5258257.png`;
// root.children[0].children[3].src=`./image/남_신발/free-icon-boot-shoes-4908076.png`;

console.dir(root)

