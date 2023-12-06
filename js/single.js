"use strict";
console.log("single.js file was loaded");
const baseUrl = "http://localhost:5000";
let currentPostId = "8374820193847912";
const postsUrl = `${baseUrl}/posts`;
const els = {};

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
    .then((rez) => {
      console.log(rez);
      fillHtmlPage(rez);
    })
    .catch((error) => {
      console.warn("negavom duomenu", error);
    });
}
getSinglePost(`${postsUrl}/${currentPostId}`);

function fillHtmlPage() {}
