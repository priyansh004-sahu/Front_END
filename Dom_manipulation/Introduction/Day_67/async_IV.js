function getUserInfo() {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      res({ id: 1, name: "priyansh" });
    }, 1000);
  });
}
function getUserPics() {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      res(["pic1", "pic2", "pic3"]);
    }, 1000);
  });
}
getUserInfo()
  .then(function (data) {
    console.log(data);
    return getUserPics(data.id);
  })
  .then(function (data) {
    console.log(data);
  });

// fetch
// github api

fetch("https://api.github.com/users/priyansh004-sahu")
  .then((res) => res.json()) // raw data
  .then((data) => {
    console.log(data);
  });

document.querySelector("button").addEventListener("click", function () {
  setTimeout(() => {
    fetch("https://api.github.com/users/priyansh004-sahu")
      .then((res) => res.json()) // raw data
      .then((data) => {
        console.log(data);
      });
  }, 1000);
});
