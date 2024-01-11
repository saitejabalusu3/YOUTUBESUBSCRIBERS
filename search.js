import { clearDivebtns } from "./clearDiv.js";
import { api, parentDive } from "./log.js";
import { getSelectedImg } from "./addEventListenerToImages.js";

export function getUserNames() {
  clearDivebtns();
  let input = document.getElementById("nameOfYoutuber").value;
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&type=channel&key=${api}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("numberOfResults").textContent =
        data["pageInfo"]["totalResults"] > 0
          ? data["pageInfo"]["totalResults"]
          : "No results found";

      data["items"].forEach((data) => {
        const btn = document.createElement("btn");

        const value = data["snippet"]["channelId"];
        console.log(value);
        const imgUrl = data["snippet"]["thumbnails"]["default"]["url"];
        const channelTitle = data["snippet"]["channelTitle"];

        btn.innerHTML = `<img src=${imgUrl} id="${value}" alt="this is a image"><br><h1>${channelTitle}<h1>`;
        btn.classList = "selctImg";
        parentDive.appendChild(btn);
      });
      getSelectedImg();
      console.log("fetch is completed");
    })
    .catch((e) => {
      console.log(e);
    });
}
