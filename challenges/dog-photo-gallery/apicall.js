
// let addButton = document.getElementById("addButton");
// let uList = document.getElementById("uList");
// let listItem = document.createElement("li");
// // listItem.innerHTML = "sdsda";

// addButton.addEventListener("click", buttonClicked);

// function buttonClicked() { 
//     addButton.innerText = "ehhh";
//     uList.appendChild(listItem);
//     // document.createElement("h1").innerHTML = "aahh";
//     fetch("https://dog.ceo/api/breeds/image/random")
//         .then(function (response) {
//       response.message;
//         }).then(function (data) {
            
//             // let item = document.createElement("li");
//             listItem.innerHTML = `<img src = '${data}'/>`;
//             // list.appendChild(item);
//             uList.appendChild(listItem);
//         }).catch((error) => console.log(error));
    

// }


let btnAdd = document.getElementById("addButton");
let list = document.getElementsByClassName("container")[0];
btnAdd.addEventListener("click", () => {
  getImage();
});
function getImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let item = document.createElement("li");
      item.innerHTML = `<img src = '${data.message}'/>`;
      list.appendChild(item);
    })
    .catch((error) => console.log(error));
}