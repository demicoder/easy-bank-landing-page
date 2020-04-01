// Functions
const postHeaderImage = post =>
  (post.style.backgroundImage = `url("../${post.dataset.image}")`);

// DOM Elements
const posts = document.querySelectorAll('.post__header');

// Delegation
[...posts].forEach(post => postHeaderImage(post));
