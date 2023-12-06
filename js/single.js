"use strict";
console.log("single.js file was loaded");
const baseUrl = "http://localhost:5000";
let currentPostId = "8374820193847912";
const postsUrl = `${baseUrl}/posts`;
const els = {
  title: document.getElementById("title"),
  image: document.getElementById("image"),
  body: document.getElementById("body"),
  author: document.getElementById("author"),
  date: document.getElementById("date"),
  tags: document.getElementById("tags"),
};
console.log("els ===", els);

// gauti id is url
const urlParamsObj = new URLSearchParams(window.location.search);
console.log("urlParamsObj ===", urlParamsObj.get("postId"));
currentPostId = urlParamsObj.get("postId");

if (currentPostId === null) {
  console.warn("nera post id");
}
// su funkcija parsiusti ir isconsolinti konkretu post

function getSinglePost(address) {
  fetch(address)
    .then((resp) => {
      if (resp.status === 200) {
        console.log("gavom pavyko");
      } else {
        console.log("gauti  nepavyko");
      }
      return resp.json();
    })
    .then((obj) => {
      console.log(obj);
      fillHtmlPage(obj);
    })
    .catch((error) => {
      console.warn("negavom duomenu", error);
    });
}
getSinglePost(`${postsUrl}/${currentPostId}`);

function fillHtmlPage(rez) {
  els.title.textContent = rez.title;
  els.image.src = rez.image;
  els.body.textContent = rez.body;
  els.author.textContent = rez.author;
  els.date.textContent = rez.date;
  els.tags.innerHTML = "";
  console.log("els.tags ===", els.tags);
  rez.tags.forEach((obj) => {
    const liEl = document.createElement("li");
    liEl.classList.add("badge", "rounded-pill", "text-bg-success", "fs-5");
    liEl.textContent = obj;
    els.tags.append(liEl);
  });
}
