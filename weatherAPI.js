import { API_Key } from "./key.js";


let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?${API_Key}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230418&base_time=0500&nx=55&ny=127`

console.log(url)

let nx = "55";
let ny = "127";


const dt = new Date();
const year = dt.getFullYear();
const month = (dt.getMonth() + 1 < 10 ? '0' : '') + (dt.getMonth() + 1);
const day = (dt.getMonth() + 1 < 10 ? '0' : '') + dt.getDate();

console.log(month)