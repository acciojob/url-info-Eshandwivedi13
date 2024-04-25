//your JS code here. If required.
// window.location.origin;
// console.log(window.location);
// const currentURL = window.location.href;
// console.log(currentURL, "a");

let url = window.location.ancestorOrigins[1];
let n = url.length;
alert(`The length of the URL is : ${n}`);