import { API_Key } from "./key.js";


let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?${API_Key}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230418&base_time=0500&nx=55&ny=127`

console.log(url)

let nx = "55";
let ny = "127";

// let todayDate = date;

const dt = new Date();
const st = dt.toLocaleDateString();

console.dir(st)

let newStr = st.replace(/. /g, "").slice(0,-1);
console.log(newStr)

// let year = dt.getFullYear();

// function getMonth(value) {
//   if (dt.getMonth() + 1 < 10) {

//     let act = dt.getMonth() + 1;
//     let td = "0"
//     let month = td + act;

//     console.log(month);
//     return month;
//   }

// }
// getMonth();
// console.log(month)