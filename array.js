import fs from 'fs'

let b;
let array =[]
fs.readdir("./image/남_모자", (err,file)=>{
    array.push(file)
    let capArrayRandomNumber = Math.floor(Math.random() * array[0].length + 1);
    b = array[0][capArrayRandomNumber-1];    
    console.log(b);
    
})
export default b;
