import { api, parentDive, userData } from "./log.js";
import { getUserNames } from "./search.js";
import { selectedImg } from "./userData.js";
// const api="AIzaSyAwHmk3OIz9jG2pJgrj1ywMRcv6nIA5gDc";
// console.log(api);
// let input;
// const parentDive=document.getElementById("population");
// const userData=document.getElementById("metrics");

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", getUserNames);
let selctImg;
// let  selctImg=document.getElementById("selctImg");

// function clearDivebtns(){
//     document.querySelectorAll("#population > btn").forEach(e=>e.remove());
// }

// async function selectedImg(channelId){
//     async function selectedImg(event){
//         console.log(event.target.id);
//       clearDivebtns();
//       const response= await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${event.target.id}&fields=items%2Fsnippet%2Ftitle&key=${api}`);
//       const data= await response.json();

//     const channelTitle=data['items'][0]['snippet']['title'];

//      fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${event.target.id}&key=${api}`)
//         .then(response => {
//             return response.json()
//         })
//         .then(data => {
//             console.log(data);
//             userData.innerHTML=`<h1>${channelTitle}</h1>
//                                    <br>
//                                    <p> subscribers "${data["items"][0].statistics.subscriberCount}"views count"${data["items"][0].statistics.viewCount}"noumber of video upload"${data["items"][0].statistics.videoCount}"</p>`;
//         }).catch((e)=> console.log(e));

// }

// function getUserNames()
// {
//     clearDivebtns();
//     input=document.getElementById("nameOfYoutuber").value;
//     fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&type=channel&key=${api}`).then(response => {
//         return response.json();
//     }).then(
//         data=>{
//             document.getElementById("numberOfResults").textContent=data['pageInfo']['totalResults']>0?data['pageInfo']['totalResults']:"No results found";

//             data['items'].forEach(data => {
//                 const btn=document.createElement("btn");

//                 const value =data["snippet"]["channelId"];
//                 console.log(value);
//                 const imgUrl=data["snippet"]["thumbnails"]["default"]["url"];
//                 const channelTitle=data["snippet"]["channelTitle"];

//                 btn.innerHTML=`<img src=${imgUrl} id="${value}" alt="this is a image"><br><h1>${channelTitle}<h1>`
//                 // btn.setAttribute("onclick",`selectedImg("${value}")`);
//                 // btn.setAttribute("id","selctImg")
//                 btn.classList="selctImg"
//                 parentDive.appendChild(btn);
//             });
//             getSelectedImg();
//             console.log("fetch is completed");
//         }
//     ).catch((e)=>{console.log(e);})

// }
