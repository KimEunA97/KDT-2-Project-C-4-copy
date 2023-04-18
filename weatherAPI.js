import { API_Key } from "./key.js";


// https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=IGgBVJ%2BLESbzNUr3Zgld1TwbaTgjXjyTynsCnEDUeuwNeQbN7wrVenFaMf%2Bu%2FfDDDE0G4voIAFzA%2Fw9s37mTmw%3D%3D&pageNo=1&numOfRows=1000&dataType=json&base_date=20230418&base_time=0500&nx=55&ny=127




//좌표
let nx = "55";
let ny = "127";

//날짜 230418 형식
const dt = new Date();
const year = dt.getFullYear();
const month = (dt.getMonth() + 1 < 10 ? '0' : '') + (dt.getMonth() + 1);
const day = (dt.getDate() + 1 < 10 ? '0' : '') + dt.getDate();
const theDate = `${year}${month}${day}`

let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey="+API_Key+"&pageNo=1&numOfRows=1000&dataType=JSON&base_date="+theDate+"&base_time=0500&nx=55&ny=127"

console.log(url)
