"use strict";
console.log("main.js file was loaded");

const baseUrl = "http://localhost:5000";
const postsUrl = `${baseUrl}/posts`;
const els = {
  postListEl: document.querySelector("#postList"),
};

// sukurti funkcija kuri parsiuncia ir iskonsolina visus postus

init();
async function init() {
  let mainPostsArr = await getPosts();
  console.log("mainPostsArr ===", mainPostsArr);
  // console.log(JSON.stringify(mainPostsArr[0]));
  makePostsHtml(mainPostsArr);
}
async function getPosts() {
  try {
    const response = await fetch(postsUrl);
    const posts = await response.json();
    // console.log(posts);
    return posts;
  } catch (error) {
    console.log(error);
  }
}

// sugeneruoti postus HTMLe i ID postList
function makePostsHtml(arr) {
  arr.forEach((postObj) => {
    const singlePostEl = createSinglePostEl(postObj);
    els.postListEl.append(singlePostEl);
  });
}

function createSinglePostEl(singlePostObj) {
  const liEl = document.createElement("li");
  const innerDiv = `
  <div class="card">
            <div class="card-body">
              <h5 class="card-title">${singlePostObj.title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
              ${singlePostObj.author}
              </h6>
              <p class="card-text">
              ${singlePostObj.body.slice(0, 75)}...
              </p>
              <a href="single-post.html" class="btn btn-primary card-link">Read more</a>
            </div>
          </div>`;
  liEl.innerHTML = innerDiv;
  return liEl;
}
