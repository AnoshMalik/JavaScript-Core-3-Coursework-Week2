let imageVar = document.getElementById("image");

fetch(`https://xkcd.now.sh/?comic=latest`)
    .then(function (response) { 
        console.log(response.json());
        console.log("**" + response.json.img);
        return response;
    }).then(function (data) {
        imageVar.innerHTML = `<img src="${data.img}" />`;
     }).catch((error)=>(console.log(error)));