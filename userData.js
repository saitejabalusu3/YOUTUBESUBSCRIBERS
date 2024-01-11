import { clearDivebtns } from "./clearDiv.js";
import { api, userData } from "./log.js";

export async function selectedImg(event) {
  console.log(event.target.id);
  clearDivebtns();
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${event.target.id}&fields=items%2Fsnippet%2Ftitle&key=${api}`
  );
  const data = await response.json();

  const channelTitle = data["items"][0]["snippet"]["title"];

  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${event.target.id}&key=${api}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      userData.innerHTML = `<h1>${channelTitle}</h1>
                                <br>
                                <p> subscribers "${data["items"][0].statistics.subscriberCount}"views count"${data["items"][0].statistics.viewCount}"noumber of video upload"${data["items"][0].statistics.videoCount}"</p>`;
    })
    .catch((e) => console.log(e));
}
